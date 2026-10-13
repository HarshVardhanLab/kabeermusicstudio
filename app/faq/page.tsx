import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/lib/site-data";
import Localized from "@/components/localized";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to common questions about making a bhajan or kirtan enquiry.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <main id="main" className="inner-page">
      <div className="inner-hero">
        <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> <Localized>GOOD TO KNOW</Localized></div>
        <h1><Localized>A few things</Localized><br /><Localized>you may be</Localized> <em><Localized>wondering.</Localized></em></h1>
        <p><Localized>Start with the basics. If you have a specific question, include it in your enquiry.</Localized></p>
      </div>
      <section className="section faq-page">
        <div className="faq-list">
          {faqs.map(faq => (
            <details key={faq.q}>
              <summary><Localized>{faq.q}</Localized><span className="icon" aria-hidden="true">add</span></summary>
              <p><Localized>{faq.a}</Localized></p>
            </details>
          ))}
        </div>
        <aside className="faq-callout">
          <span className="icon icon-filled" aria-hidden="true">help</span>
          <h2><Localized>Still have a question?</Localized></h2>
          <p><Localized>The team can discuss your specific date and event details.</Localized></p>
          <Link className="text-link" href="/book">
            <Localized>Send an enquiry</Localized> <span className="icon" aria-hidden="true">north_east</span>
          </Link>
        </aside>
      </section>
    </main>
  );
}
