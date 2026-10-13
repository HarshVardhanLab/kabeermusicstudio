"use client";

import Link from "next/link";
import { bookingPhone } from "@/lib/site-data";
import { useLanguage } from "@/components/language-provider";

export default function MobileActions() {
  const { t } = useLanguage();
  return (
    <div className="mobile-dock">
      <a href={`https://wa.me/${bookingPhone}`} target="_blank" rel="noreferrer" aria-label="WhatsApp Sonotek">
        <span className="icon icon-filled" aria-hidden="true">chat</span>
        <span>{t("WhatsApp")}</span>
      </a>
      <Link href="/book">
        {t("Plan your event")} <span className="icon" aria-hidden="true">north_east</span>
      </Link>
    </div>
  );
}
