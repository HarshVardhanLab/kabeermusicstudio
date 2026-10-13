"use client";

import { languageNames, Language } from "@/lib/i18n";
import { useLanguage } from "@/components/language-provider";

export default function LanguageSelect({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage, t } = useLanguage();
  return <label className={`language-select${compact ? " compact" : ""}`} aria-label={t("Change language")}>
    {!compact && <span aria-hidden="true">文</span>}
    <select aria-label={t("Change language")} value={language} onChange={event => setLanguage(event.target.value as Language)}>
      {(Object.keys(languageNames) as Language[]).map(option => <option value={option} key={option}>{languageNames[option]}</option>)}
    </select>
  </label>;
}
