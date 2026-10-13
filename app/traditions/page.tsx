import type { Metadata } from "next";
import Link from "next/link";
import { traditions, channelUrl } from "@/lib/site-data";
import Localized from "@/components/localized";

export const metadata: Metadata = {
  title: "Devotional Traditions",
  description: "Explore the bhakti traditions of Bhajan Kirtan Sonotek — Shiva, Hanuman, Ram, Krishna, Mata, Goga Ji and more.",
  alternates: { canonical: "/traditions" },
};

export default function TraditionsPage() {
  return (
    <main id="main" className="inner-page">
      {/* Floating devotional background — Devanagari script, not emoji */}
      <div className="trad-symbols-bg" aria-hidden="true">
        <span className="tsym tsym-1">ॐ</span>
        <span className="tsym tsym-2">✺</span>
        <span className="tsym tsym-3">ॐ</span>
        <span className="tsym tsym-4">✦</span>
        <span className="tsym tsym-5">✿</span>
        <span className="tsym tsym-6">❋</span>
        <span className="tsym tsym-7">ॐ</span>
        <span className="tsym tsym-8">✸</span>
      </div>

      <div className="inner-hero trad-hero">
        <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> <Localized>THE DEVOTIONAL PATHS</Localized></div>
        <h1><Localized>Six traditions,</Localized><br /><Localized>one</Localized> <em><Localized>bhakti.</Localized></em></h1>
        <p><Localized>Every tradition tells a different story of the divine. Explore the singing traditions that flow through the Bhajan Kirtan Sonotek channel.</Localized></p>
        <div className="trad-hero-symbols" aria-hidden="true">
          <span>शिव</span><i>·</i><span>हनुमान</span><i>·</i><span>राम</span><i>·</i><span>कृष्ण</span><i>·</i><span>माता</span><i>·</i><span>गोगा जी</span>
        </div>
      </div>

      {/* 3D tradition cards */}
      <section className="trad-grid-section">
        <div className="trad-grid">
          {traditions.map((t) => (
            <article key={t.slug} className={`trad-card trad-card-${t.color}`}>
              <div className="trad-card-inner">
                <div className="trad-card-front">
                  <span className="trad-symbol-text">{t.symbolText}</span>
                  <div className="trad-glyph" aria-hidden="true">
                    <span className="icon icon-xl">{t.iconName}</span>
                  </div>
                  <strong className="trad-hindi">{t.hindi}</strong>
                  <span className="trad-title"><Localized>{t.title}</Localized></span>
                  <span className="trad-hint"><Localized>Hover to explore</Localized></span>
                </div>
                <div className="trad-card-back">
                  <p className="trad-desc"><Localized>{t.description}</Localized></p>
                  <div className="trad-mood"><span><Localized>Mood</Localized></span><strong><Localized>{t.mood}</Localized></strong></div>
                  <div className="trad-occasions">
                    <span><Localized>Best for</Localized></span>
                    <ul>
                      {t.occasions.map((o) => (
                        <li key={o}>
                          <span className="icon" aria-hidden="true">diamond</span><Localized>{o}</Localized>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link className="trad-cta" href={`/book?program=${t.slug === "shiva" || t.slug === "hanuman" || t.slug === "ram" || t.slug === "krishna" ? "bhajan-sandhya" : t.slug === "mata" ? "mata-ki-chowki" : "satsang"}`}>
                    <Localized>Enquire for this tradition</Localized> <span className="icon" aria-hidden="true">north_east</span>
                  </Link>
                </div>
              </div>
              {/* Decorative rotating mandala */}
              <div className="trad-card-mandala" aria-hidden="true">✺</div>
            </article>
          ))}
        </div>
      </section>

      {/* Mantra band */}
      <section className="mantra-band" aria-hidden="true">
        <div className="mantra-scroll">
          <span>ॐ नमः शिवाय</span><i>✦</i>
          <span>जय श्री राम</span><i>✦</i>
          <span>राधे कृष्णा</span><i>✦</i>
          <span>जय माता दी</span><i>✦</i>
          <span>जय बजरंगबली</span><i>✦</i>
          <span>जाहर पीर</span><i>✦</i>
          <span>ॐ नमः शिवाय</span><i>✦</i>
          <span>जय श्री राम</span><i>✦</i>
          <span>राधे कृष्णा</span><i>✦</i>
          <span>जय माता दी</span><i>✦</i>
          <span>जय बजरंगबली</span><i>✦</i>
          <span>जाहर पीर</span><i>✦</i>
        </div>
      </section>

      {/* Channel CTA */}
      <section className="trad-cta-section">
        <div className="trad-cta-lotus" aria-hidden="true"><span className="icon">local_florist</span></div>
        <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> <Localized>FIND YOUR TRADITION</Localized></div>
        <h2><Localized>Tell us the path</Localized><br /><Localized>your heart</Localized> <em><Localized>follows.</Localized></em></h2>
        <p><Localized>Share your preferred tradition or devotional style in your enquiry. The team will help find the right performers.</Localized></p>
        <div className="trad-cta-row">
          <Link className="button button-dark" href="/book"><Localized>Plan your event</Localized> <span className="icon" aria-hidden="true">north_east</span></Link>
          <a className="outline-link dark-outline" href={channelUrl} target="_blank" rel="noreferrer"><Localized>Listen on YouTube</Localized> <span className="icon" aria-hidden="true">north_east</span></a>
        </div>
      </section>
    </main>
  );
}
