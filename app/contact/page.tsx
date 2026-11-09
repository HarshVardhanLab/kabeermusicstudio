import type { Metadata } from "next";
import Link from "next/link";
import { bookingPhone, bookingPhone2, bookingPhone3, channelUrl, displayPhone, displayPhone2, displayPhone3 } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Bhajan Samrat Pramod Ajmeriya for devotional music and event enquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main" className="inner-page">
      <div className="inner-hero">
        <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> GET IN TOUCH</div>
        <h1>Start with<br />a <em>conversation.</em></h1>
        <p>Choose the way that works for you. Dates and artist availability are confirmed directly by the team.</p>
      </div>

      {/* Primary contact options */}
      <section className="contact-options">
        <a href={`https://wa.me/${bookingPhone}`} target="_blank" rel="noreferrer">
          <span className="icon icon-lg" aria-hidden="true">chat</span>
          <small>QUICK ENQUIRY</small>
          <h2>WhatsApp</h2>
          <p>Send your event details and start a conversation with the team.</p>
          <b>Open WhatsApp <span className="icon icon-sm" aria-hidden="true">north_east</span></b>
        </a>
        <a href={`tel:+${bookingPhone}`}>
          <span className="icon icon-lg" aria-hidden="true">call</span>
          <small>SPEAK WITH THE TEAM</small>
          <h2>Call</h2>
          <p>Reach Bhajan Samrat Pramod Ajmeriya directly to discuss your event.</p>
          <b>{displayPhone} <span className="icon icon-sm" aria-hidden="true">north_east</span></b>
        </a>
        <a href={channelUrl} target="_blank" rel="noreferrer">
          <span className="icon icon-lg" aria-hidden="true">play_circle</span>
          <small>WATCH &amp; DISCOVER</small>
          <h2>YouTube</h2>
          <p>Explore devotional performances from the channel.</p>
          <b>Visit channel <span className="icon icon-sm" aria-hidden="true">north_east</span></b>
        </a>
      </section>

      {/* Additional contact numbers */}
      <section className="contact-numbers-section">
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          <span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> ALL CONTACT NUMBERS
        </div>
        <h2 className="contact-numbers-title">Reach us on any of<br />these numbers</h2>
        <div className="contact-numbers-grid">
          <a className="contact-num-card" href={`https://wa.me/${bookingPhone}`} target="_blank" rel="noreferrer">
            <span className="cn-icon"><span className="icon icon-filled" aria-hidden="true">chat</span></span>
            <span className="cn-label">WhatsApp</span>
            <strong className="cn-number">{displayPhone}</strong>
            <span className="cn-hint">Tap to open WhatsApp</span>
          </a>
          <a className="contact-num-card" href={`tel:+${bookingPhone2}`}>
            <span className="cn-icon"><span className="icon icon-filled" aria-hidden="true">call</span></span>
            <span className="cn-label">Call</span>
            <strong className="cn-number">{displayPhone2}</strong>
            <span className="cn-hint">Tap to call</span>
          </a>
          <a className="contact-num-card" href={`tel:+${bookingPhone3}`}>
            <span className="cn-icon"><span className="icon icon-filled" aria-hidden="true">call</span></span>
            <span className="cn-label">Call</span>
            <strong className="cn-number">{displayPhone3}</strong>
            <span className="cn-hint">Tap to call</span>
          </a>
        </div>
      </section>

      <div className="page-cta">
        <h2>Prefer to share details first?</h2>
        <p>Use the guided enquiry form, then send via WhatsApp or call the team.</p>
        <Link className="button button-dark" href="/book">
          Start an enquiry <span className="icon" aria-hidden="true">north_east</span>
        </Link>
      </div>
    </main>
  );
}
