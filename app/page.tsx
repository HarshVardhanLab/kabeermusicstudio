import Link from "next/link";
import type { Metadata } from "next";
import { channelUrl, programs, videos, traditions, artists } from "@/lib/site-data";
import Localized from "@/components/localized";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return <main id="main">
    {/* Floating devotional particle symbols — kept as OM (Devanagari script, not emoji) */}
    <div className="devotional-particles" aria-hidden="true">
      <span className="dp dp-1">ॐ</span>
      <span className="dp dp-2">✺</span>
      <span className="dp dp-3">ॐ</span>
      <span className="dp dp-4">✦</span>
      <span className="dp dp-5">ॐ</span>
      <span className="dp dp-6">✿</span>
      <span className="dp dp-7">ॐ</span>
    </div>

    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="sun-disc" />
        <div className="mandala mandala-a">✺</div>
        <div className="mandala mandala-b">✳</div>
        <div className="temple-line"><i /><i /><i /><b /></div>
      </div>
      <div className="hero-content">
        <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> <Localized>BHAKTI, SHARED TOGETHER</Localized></div>
        <h1><Localized>Make room</Localized><br /><Localized as="em">for devotion.</Localized></h1>
        <p><Localized>From a quiet family gathering to a hall full of singing voices, find the sound for your occasion.</Localized></p>
        <div className="hero-actions">
          <Link className="button button-dark" href="/book"><Localized>Enquire for your event</Localized> <span className="icon" aria-hidden="true">north_east</span></Link>
            <Link className="text-link" href="/videos">
            <span className="play-icon"><span className="icon icon-filled" aria-hidden="true">play_arrow</span></span> <Localized>Hear the devotion</Localized>
          </Link>
        </div>
        <div className="hero-note">
          <span className="note-icon"><span className="icon" aria-hidden="true">music_note</span></span>
          <span><b><Localized>A catalogue rooted in bhakti</Localized></b><small><Localized>Shiva · Hanuman · Ram · Krishna · Mata and more</Localized></small></span>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="art-halo" />
        <div className="art-petal p1" />
        <div className="art-petal p2" />
        <div className="art-petal p3" />
        <div className="art-lamp">
          <div className="lamp-flame" />
          <div className="lamp-bowl" />
          <div className="lamp-foot" />
        </div>
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-caption"><span>ॐ</span><small>श्रद्धा · संगीत · संगत</small></div>
      </div>
      <Link className="scroll-cue" href="#programs">
        <span className="icon" aria-hidden="true">south</span> <Localized>Discover the experience</Localized>
      </Link>
    </section>

    {/* Scrolling mantra ribbon */}
    <div className="mantra-band" aria-hidden="true">
      <div className="mantra-scroll">
        <span>ॐ नमः शिवाय</span><i>✦</i><span>जय श्री राम</span><i>✦</i><span>राधे कृष्णा</span><i>✦</i><span>जय माता दी</span><i>✦</i><span>जय बजरंगबली</span><i>✦</i><span>जाहर पीर</span><i>✦</i>
        <span>ॐ नमः शिवाय</span><i>✦</i><span>जय श्री राम</span><i>✦</i><span>राधे कृष्णा</span><i>✦</i><span>जय माता दी</span><i>✦</i><span>जय बजरंगबली</span><i>✦</i><span>जाहर पीर</span><i>✦</i>
      </div>
    </div>

    <div className="category-ribbon" aria-label="Devotional categories">
      <span>शिव भजन</span><i>✦</i><span>हनुमान भजन</span><i>✦</i><span>राम भजन</span><i>✦</i><span>कृष्ण भजन</span><i>✦</i><span>माता भजन</span><i>✦</i><span>सत्संगी</span><i>✦</i><span>गोगा जी</span><i>✦</i><span>कथा</span>
    </div>

    <section className="section programs" id="programs">
      <div className="section-heading">
        <div>
          <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> <Localized>FIND YOUR MOMENT</Localized></div>
          <h2><Localized>What are we</Localized><br className="mobile-break" /> <Localized>gathering for?</Localized></h2>
        </div>
        <p><Localized>Every occasion has its own feeling. Tell us what you're planning and we'll help explore a suitable devotional format.</Localized></p>
      </div>
      <div className="program-grid">
        {programs.map((program, index) => (
          <Link className={`program-card card-${program.color}`} href={`/book?program=${program.slug}`} key={program.slug}>
            <span className="card-icon"><span className="icon" aria-hidden="true">{program.iconName}</span></span>
            <span className="card-number">0{index + 1} / <Localized>{program.category}</Localized></span>
            <strong><Localized>{program.title}</Localized></strong>
            <span className="card-bottom"><Localized>{program.description}</Localized><span className="icon" aria-hidden="true">north_east</span></span>
            <span className="card-ornament">ॐ</span>
          </Link>
        ))}
      </div>
      <p className="availability-note"><span className="icon icon-filled" aria-hidden="true">verified</span> <Localized>Formats and artist availability depend on your date and location. The team will confirm what’s possible.</Localized></p>
      <Link className="section-more" href="/programs"><Localized>Explore program ideas</Localized> <span className="icon" aria-hidden="true">north_east</span></Link>
    </section>

    {/* Traditions mini-preview */}
    <section className="section traditions-preview" id="traditions">
      <div className="section-heading">
        <div>
          <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> <Localized>DEVOTIONAL TRADITIONS</Localized></div>
          <h2><Localized>Six paths of</Localized><br className="mobile-break" /> <em><Localized>bhakti.</Localized></em></h2>
        </div>
        <p><Localized>From Shiva to Goga Ji, each tradition carries its own mood, melody and meaning. Explore the paths.</Localized></p>
      </div>
      <div className="trad-preview-grid">
        {traditions.map(t => (
          <Link key={t.slug} className={`trad-preview-card trad-card-${t.color}`} href="/traditions">
            <span className="trad-preview-glyph" aria-hidden="true"><span className="icon icon-xl">{t.iconName}</span></span>
            <strong className="trad-preview-hindi">{t.hindi}</strong>
            <span className="trad-preview-name">{t.title}</span>
            <span className="trad-preview-arrow"><span className="icon" aria-hidden="true">arrow_forward</span></span>
          </Link>
        ))}
      </div>
      <Link className="section-more" href="/traditions"><Localized>Discover all traditions</Localized> <span className="icon" aria-hidden="true">north_east</span></Link>
    </section>

    <section className="listen-section" id="performances">
      <div className="listen-inner">
        <div className="listen-intro">
          <div className="eyebrow eyebrow-light"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> <Localized>PRESS PLAY, FEEL THE MOMENT</Localized></div>
          <h2><Localized>A voice for</Localized><br /><em><Localized>every bhav.</Localized></em></h2>
          <p><Localized>Explore devotional recordings from the Bhajan Kirtan Sonotek channel. Open any performance on YouTube.</Localized></p>
          <Link className="outline-link" href="/videos"><Localized>Browse performances</Localized> <span className="icon" aria-hidden="true">north_east</span></Link>
        </div>
        <div className="video-list">
          {videos.slice(0, 3).map(video => (
            <a className="video-card" href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer" key={video.id}>
              <span className="video-thumb" style={{ backgroundImage: `linear-gradient(0deg,#231b1a66,transparent 65%),url(https://img.youtube.com/vi/${video.id}/hqdefault.jpg)` }}>
                <span className="play-button"><span className="icon icon-filled" aria-hidden="true">play_arrow</span></span>
                <small>{video.category.toUpperCase()}</small>
              </span>
              <span className="video-info">
                <small>{video.singer.toUpperCase()} · {video.subtitle.toUpperCase()}</small>
                <strong>{video.title}</strong>
                <span><Localized>Listen on YouTube</Localized> <span className="icon" aria-hidden="true">north_east</span></span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Artists mini preview */}
    <section className="section artists-preview" id="artists">
      <div className="section-heading">
        <div>
          <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> <Localized>VOICES OF DEVOTION</Localized></div>
          <h2><Localized>The artists behind the bhajan.</Localized></h2>
        </div>
        <p><Localized>Meet the singers who bring the devotional spirit of the channel to life at private gatherings.</Localized></p>
      </div>
      <div className="artist-preview-grid">
        {artists.map(a => (
          <Link key={a.slug} className="artist-preview-card" href="/artists">
            <span className="apcard-initial">{a.name.charAt(0)}</span>
            <span className="apcard-specialty"><Localized>{a.specialty}</Localized></span>
            <strong className="apcard-name">{a.name}</strong>
            <span className="apcard-arrow"><Localized>Explore</Localized> <span className="icon" aria-hidden="true">north_east</span></span>
          </Link>
        ))}
      </div>
      <Link className="section-more" href="/artists"><Localized>Meet all artists</Localized> <span className="icon" aria-hidden="true">north_east</span></Link>
    </section>

    <section className="section steps" id="about">
      <div className="section-heading">
        <div>
          <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> <Localized>SIMPLE AS IT SHOULD BE</Localized></div>
          <h2><Localized>From first thought</Localized><br /><Localized>to folded hands.</Localized></h2>
        </div>
        <p><Localized>Start with a conversation. The details come together once the team understands your gathering.</Localized></p>
      </div>
      <div className="steps-grid">
        <article>
          <span className="step-no">01</span>
          <div className="step-symbol"><span className="icon" aria-hidden="true">edit_note</span></div>
          <h3><Localized>Tell us what you’re planning</Localized></h3>
          <p><Localized>Share the occasion, date, city and the kind of devotional music you have in mind.</Localized></p>
        </article>
        <article>
          <span className="step-no">02</span>
          <div className="step-symbol"><span className="icon" aria-hidden="true">explore</span></div>
          <h3><Localized>Explore what fits</Localized></h3>
          <p><Localized>The team can discuss performers, format, logistics and availability for your event.</Localized></p>
        </article>
        <article>
          <span className="step-no">03</span>
          <div className="step-symbol"><span className="icon" aria-hidden="true">favorite</span></div>
          <h3><Localized>Confirm together</Localized></h3>
          <p><Localized>Once details and terms are agreed, you’ll know the next steps to confirm your program.</Localized></p>
        </article>
      </div>
      <Link className="section-more" href="/about"><Localized>Learn about the channel</Localized> <span className="icon" aria-hidden="true">north_east</span></Link>
    </section>

    <section className="quote-band">
      <div className="quote-mark">"</div>
      <p><Localized>Where voices join in devotion,</Localized><br /><Localized>a gathering becomes a memory.</Localized></p>
      <span>भक्ति में ही शक्ति है</span>
      <Link className="button button-cream" href="/book"><Localized>Let’s plan together</Localized> <span className="icon" aria-hidden="true">north_east</span></Link>
      <div className="quote-flower"><span className="icon" aria-hidden="true">local_florist</span></div>
    </section>

    <section className="section faq-preview">
      <div>
        <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> <Localized>GOOD TO KNOW</Localized></div>
        <h2><Localized>A few things</Localized><br /><Localized>you may be wondering.</Localized></h2>
      </div>
      <div className="faq-preview-body">
        <p><Localized>Every enquiry starts a conversation. The date and performer are confirmed by the team after checking availability and event details.</Localized></p>
        <Link className="text-link" href="/faq"><Localized>Read frequently asked questions</Localized> <span className="icon" aria-hidden="true">north_east</span></Link>
      </div>
    </section>

    <section className="last-cta">
      <div className="last-cta-flower" aria-hidden="true"><span className="icon">local_florist</span></div>
      <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> <Localized>YOUR GATHERING STARTS HERE</Localized></div>
      <h2><Localized>Let the planning</Localized><br /><Localized>begin with a hello.</Localized></h2>
      <p><Localized>Tell us a little about your occasion. We’ll take it from there.</Localized></p>
      <Link className="button button-dark" href="/book"><Localized>Send an event enquiry</Localized> <span className="icon" aria-hidden="true">north_east</span></Link>
      <a className="under-link" href={channelUrl} target="_blank" rel="noreferrer"><Localized>Watch the channel on YouTube</Localized> <span className="icon icon-sm" aria-hidden="true">north_east</span></a>
    </section>
  </main>;
}
