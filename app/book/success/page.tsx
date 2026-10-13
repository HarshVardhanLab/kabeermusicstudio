import type { Metadata } from "next";
import Link from "next/link";
import { bookingPhone } from "@/lib/site-data";
import Localized from "@/components/localized";

export const metadata: Metadata = { title: "Enquiry received", robots: { index: false, follow: false } };
type Props = { searchParams: Promise<{ ref?: string | string[] }> };

export default async function BookingSuccessPage({ searchParams }: Props) {
  const params = await searchParams;
  const raw = Array.isArray(params.ref) ? params.ref[0] : params.ref || "";
  const reference = /^BKS-\d{8}-[A-F0-9]{6}$/.test(raw) ? raw : "";
  return (
    <main id="main" className="success-page">
      <div className="success-card">
        <span className="success-mark"><span className="icon icon-filled" aria-hidden="true">check_circle</span></span>
        <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> <Localized>ENQUIRY SENT</Localized></div>
        <h1><Localized>Thank you for</Localized><br /><Localized>getting in touch.</Localized></h1>
        <p>
          {reference ? <><strong>{reference}</strong> <Localized>is your enquiry reference.</Localized></> : <Localized>Your enquiry has been sent.</Localized>}
          {" "}<Localized>The team will follow up using the contact details you provided. This is an enquiry, not a confirmed booking.</Localized>
        </p>
        <div className="success-actions">
          <Link className="button button-dark" href="/"><Localized>Back to home</Localized> <span className="icon" aria-hidden="true">north_east</span></Link>
          <a className="text-link" href={`https://wa.me/${bookingPhone}`} target="_blank" rel="noreferrer">
            <Localized>Open WhatsApp</Localized> <span className="icon" aria-hidden="true">north_east</span>
          </a>
        </div>
      </div>
    </main>
  );
}
