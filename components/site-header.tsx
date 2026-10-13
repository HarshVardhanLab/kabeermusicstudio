"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSelect from "@/components/language-select";
import { useLanguage } from "@/components/language-provider";
import { displayPhone } from "@/lib/site-data";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();
  const close = () => setOpen(false);
  const navLink = (href: string, label: string) => <Link className={`nav-link${pathname === href ? " active" : ""}`} href={href} onClick={close} aria-current={pathname === href ? "page" : undefined}>{t(label)}</Link>;

  return (
    <header className="site-header" id="top">
      <Link className="brand" href="/" aria-label="Bhajan Kirtan Sonotek home" onClick={close}>
        <span className="brand-mark" aria-hidden="true"><span>ॐ</span></span>
        <span className="brand-copy"><strong>Bhajan Kirtan</strong><small>SONOTEK</small></span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="primary-nav"
        aria-label={open ? t("Close menu") : t("Open menu")}
        onClick={() => setOpen(!open)}
      >
        <span className="icon icon-md" aria-hidden="true">{open ? "close" : "menu"}</span>
      </button>
      <nav className={`nav ${open ? "is-open" : ""}`} id="primary-nav" aria-label={t("Main navigation")}>
        {navLink("/", "Home")}
        {navLink("/programs", "Programs")}
        {navLink("/traditions", "Traditions")}
        {navLink("/artists", "Artists")}
        {navLink("/videos", "Performances")}
        {navLink("/about", "Our story")}
        <details className="nav-more" open={moreOpen} onToggle={event => setMoreOpen((event.currentTarget as HTMLDetailsElement).open)}>
          <summary>{t("More")} <span aria-hidden="true">expand_more</span></summary>
          <div className="nav-dropdown"><Link href="/faq" onClick={() => { close(); setMoreOpen(false); }}>{t("FAQs")}</Link><Link href="/contact" onClick={() => { close(); setMoreOpen(false); }}>{t("Contact")}</Link></div>
        </details>
        <Link className="nav-compact-book" href="/book" onClick={close}>{t("Book now")} <span className="icon" aria-hidden="true">north_east</span></Link>
      </nav>
      <div className="header-actions">
        <a className="call-now" href={`tel:${displayPhone.replaceAll(" ", "")}`}><span className="icon" aria-hidden="true">call</span><span>{t("Call now")}</span></a>
        <LanguageSelect />
        <Link className="nav-cta" href="/book" onClick={close}>{t("Book now")} <span className="icon" aria-hidden="true">north_east</span></Link>
      </div>
      <div className="mobile-nav-actions"><a className="call-now" aria-label={t("Call now")} href={`tel:${displayPhone.replaceAll(" ", "")}`}><span className="icon" aria-hidden="true">call</span><span>{t("Call now")}</span></a><LanguageSelect /></div>
    </header>
  );
}
