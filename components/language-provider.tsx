"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { Language, translate } from "@/lib/i18n";

type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; t: (value: string) => string };
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  useEffect(() => {
    const saved = window.localStorage.getItem("sonotek-language");
    if (saved === "en" || saved === "hi" || saved === "hinglish") setLanguageState(saved);
    document.documentElement.lang = saved === "hi" ? "hi" : saved === "hinglish" ? "hi-Latn" : "en";
  }, []);
  const setLanguage = (next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem("sonotek-language", next);
    document.documentElement.lang = next === "hi" ? "hi" : next === "hinglish" ? "hi-Latn" : "en";
  };
  const value = useMemo(() => ({ language, setLanguage, t: (text: string) => translate(language, text) }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
