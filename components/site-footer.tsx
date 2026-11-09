import Link from "next/link";
import { channelUrl, displayPhone } from "@/lib/site-data";
import Localized from "@/components/localized";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <Link className="brand brand-footer" href="/">
        <span className="brand-mark"><span>ॐ</span></span>
        <span className="brand-copy"><strong>Pramod Ajmeriya</strong><small>BHAJAN SAMRAT</small></span>
      </Link>
      <p><Localized>Devotional music for moments that bring us together.</Localized></p>
      <div className="footer-links">
        <Link href="/programs"><Localized>Programs</Localized></Link>
        <Link href="/traditions"><Localized>Traditions</Localized></Link>
        <Link href="/about"><Localized>Bhajan Samrat</Localized></Link>
        <Link href="/videos"><Localized>Performances</Localized></Link>
        <Link href="/faq"><Localized>FAQs</Localized></Link>
        <a href={channelUrl} target="_blank" rel="noreferrer">
          YouTube <span className="icon icon-sm" aria-hidden="true">north_east</span>
        </a>
        <a href={`tel:${displayPhone.replaceAll(" ", "")}`}>
          <Localized>Call</Localized> <span className="icon icon-sm" aria-hidden="true">north_east</span>
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Bhajan Samrat Pramod Ajmeriya</span>
        <span><Localized>Enquiries are subject to availability and confirmation.</Localized></span>
      </div>
    </footer>
  );
}
