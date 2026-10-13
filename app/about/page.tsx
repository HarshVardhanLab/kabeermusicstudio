import type { Metadata } from "next";
import Link from "next/link";
import { channelUrl } from "@/lib/site-data";
import Localized from "@/components/localized";

export const metadata: Metadata = {
  title: "About",
  description: "About the Bhajan Kirtan Sonotek devotional music channel and booking enquiry experience.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main" className="inner-page">
      <div className="inner-hero">
        <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> <Localized>OUR STORY</Localized></div>
        <h1><Localized>A catalogue for</Localized><br /><Localized>many</Localized> <em><Localized>bhav.</Localized></em></h1>
        <p><Localized>Bhajan Kirtan Sonotek brings together devotional music across traditions, singers and styles.</Localized></p>
        <a className="outline-link dark-outline" href={channelUrl} target="_blank" rel="noreferrer">
          <Localized>Visit the official YouTube channel</Localized> <span className="icon" aria-hidden="true">north_east</span>
        </a>
      </div>
      <section className="channel-review">
        <div className="review-copy">
          <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> <Localized>WHAT THE CHANNEL TELLS US</Localized></div>
          <h2><Localized>Many traditions.</Localized><br /><Localized>Many voices.</Localized></h2>
          <p><Localized>The public channel description names Shiva, Hanuman, Ram, Krishna, Mata, satsangi and Goga Ji bhajans. Individual video descriptions credit performers and production contributors, so discovery should begin with devotional category and verified video samples.</Localized></p>
          <p><Localized>A channel catalogue shows musical work; it does not confirm that each singer is available for a private event. The booking path therefore asks for a preferred style or performer, then leaves availability and terms for the team to confirm.</Localized></p>
        </div>
        <div className="tradition-grid">
          <span>शिव <small>Shiva</small></span>
          <span>हनुमान <small>Hanuman</small></span>
          <span>राम <small>Ram</small></span>
          <span>कृष्ण <small>Krishna</small></span>
          <span>माता <small>Mata</small></span>
          <span>सत्संग <small>Satsangi</small></span>
          <span>गोगा जी <small>Goga Ji</small></span>
          <span>कथा <small>Katha</small></span>
        </div>
      </section>
      <section className="channel-cta">
        <p><Localized>Explore a few channel performances, then tell us what you’re planning.</Localized></p>
        <Link className="button button-dark" href="/book">
          <Localized>Plan an event enquiry</Localized> <span className="icon" aria-hidden="true">north_east</span>
        </Link>
      </section>
    </main>
  );
}
