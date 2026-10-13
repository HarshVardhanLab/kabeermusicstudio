"use client";

import { useLanguage } from "@/components/language-provider";

export default function Announcement() {
  const { t } = useLanguage();
  return <div className="announcement"><span className="icon" aria-hidden="true">auto_awesome</span>{" "}{t("A little more bhakti in every gathering")}{" "}<span className="icon" aria-hidden="true">auto_awesome</span></div>;
}
