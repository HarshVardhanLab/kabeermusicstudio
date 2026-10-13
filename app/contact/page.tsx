import type { Metadata } from "next";
import Link from "next/link";
import { bookingPhone, channelUrl, displayPhone } from "@/lib/site-data";
import Localized from "@/components/localized";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Bhajan Kirtan Sonotek about devotional music and event enquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main" className="inner-page">
      <div className="inner-hero">
        <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> <Localized>GET IN TOUCH</Localized></div>
        <h1><Localized>Start with</Localized><br /><Localized>a conversation.</Localized></h1>
        <p><Localized>Choose the way that works for you. Dates and artist availability are confirmed directly by the team.</Localized></p>
      </div>
      <section className="contact-options">
        <a href={`https://wa.me/${bookingPhone}`} target="_blank" rel="noreferrer">
          <span className="icon icon-lg" aria-hidden="true">chat</span>
          <small><Localized>QUICK ENQUIRY</Localized></small>
          <h2>WhatsApp</h2>
          <p><Localized>Send your event details and start a conversation.</Localized></p>
          <b><Localized>Open WhatsApp</Localized> <span className="icon icon-sm" aria-hidden="true">north_east</span></b>
        </a>
        <a href={`tel:${displayPhone.replaceAll(" ", "")}`}>
          <span className="icon icon-lg" aria-hidden="true">call</span>
          <small><Localized>SPEAK WITH THE TEAM</Localized></small>
          <h2>Call</h2>
          <p><Localized>Use the public contact number to discuss your event.</Localized></p>
          <b>{displayPhone} <span className="icon icon-sm" aria-hidden="true">north_east</span></b>
        </a>
        <a href={channelUrl} target="_blank" rel="noreferrer">
          <span className="icon icon-lg" aria-hidden="true">play_circle</span>
          <small><Localized>WATCH &amp; DISCOVER</Localized></small>
          <h2>YouTube</h2>
          <p><Localized>Explore devotional performances from the channel.</Localized></p>
          <b><Localized>Visit channel</Localized> <span className="icon icon-sm" aria-hidden="true">north_east</span></b>
        </a>
      </section>
      <div className="page-cta">
        <h2><Localized>Prefer to share details first?</Localized></h2>
        <p><Localized>Use the guided enquiry form, then send via WhatsApp or call the team.</Localized></p>
        <Link className="button button-dark" href="/book">
          <Localized>Start an enquiry</Localized> <span className="icon" aria-hidden="true">north_east</span>
        </Link>
      </div>
    </main>
  );
}
