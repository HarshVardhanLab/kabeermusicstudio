import type { Metadata } from "next";
import Link from "next/link";
import { channelUrl, videos } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About — Bhajan Samrat Pramod Ajmeriya",
  description: "Bhajan Samrat Pramod Ajmeriya — devotional singer of Hanuman, Shyam, and bhakti bhajans. Book for your event.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main" className="inner-page">

      {/* ── 3-col hero: diya | text | photo ── */}
      <section className="about-hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="sun-disc" />
          <div className="mandala mandala-a">✺</div>
          <div className="mandala mandala-b">✳</div>
        </div>

        {/* LEFT — diya art */}
        <div className="about-hero-diya" aria-hidden="true">
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

        {/* CENTRE — text */}
        <div className="about-hero-text">
          <div className="eyebrow">
            <span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> DEVOTIONAL SINGER
          </div>
          <h1>Bhajan Samrat<br /><em>Pramod Ajmeriya</em></h1>
          <p>A celebrated voice of bhakti — known for soul-stirring Hanuman bhajans and Khatu Shyam kirtans that fill every gathering with devotion.</p>
          <div className="artist-profile-tags">
            <span><span className="icon icon-sm" aria-hidden="true">music_note</span> Hanuman Bhajan</span>
            <span><span className="icon icon-sm" aria-hidden="true">music_note</span> Shyam Bhajan</span>
            <span><span className="icon icon-sm" aria-hidden="true">music_note</span> Ram Bhajan</span>
            <span><span className="icon icon-sm" aria-hidden="true">music_note</span> Kirtan</span>
          </div>
          <Link className="button button-dark" href="/book">
            Book Pramod Ajmeriya <span className="icon" aria-hidden="true">north_east</span>
          </Link>
        </div>

        {/* RIGHT — photo */}
        <div className="about-hero-photo">
          <div className="hero-photo-wrap">
            <img
              src="/pramod.png"
              alt="Bhajan Samrat Pramod Ajmeriya"
              className="hero-photo"
              width={420}
              height={560}
            />
            <div className="hero-photo-glow" />
            <div className="hero-photo-name">
              <span>Bhajan Samrat</span>
              <strong>Pramod Ajmeriya</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Profile section */}
      <section className="artist-profile-section">
        <div className="artist-profile-card">
          <div className="artist-profile-info">
            <div className="ap-initial" aria-hidden="true">P</div>
            <div className="ap-name-block">
              <span className="ap-label">BHAJAN SAMRAT</span>
              <h2 className="ap-name">Pramod Ajmeriya</h2>
              <span className="ap-subtitle">Devotional Singer</span>
            </div>
          </div>

          <div className="artist-profile-body">
            <p>Bhajan Samrat Pramod Ajmeriya is one of the most revered devotional singers of the bhakti tradition. His voice carries the true essence of bhakti — each performance moving the hearts of devotees and filling the space with divine energy.</p>
            <p>Renowned for his Hanuman bhajans and Khatu Shyam kirtans, Pramod ji brings authentic spiritual feeling to every gathering — from intimate family functions to large-scale religious events.</p>

            <div className="ap-traditions">
              <span className="ap-trad-label">Traditions &amp; Styles</span>
              <div className="ap-trad-list">
                <span><span className="icon icon-sm" aria-hidden="true">bolt</span> Hanuman Bhajan</span>
                <span><span className="icon icon-sm" aria-hidden="true">brightness_high</span> Shyam Kirtan</span>
                <span><span className="icon icon-sm" aria-hidden="true">brightness_high</span> Ram Bhajan</span>
                <span><span className="icon icon-sm" aria-hidden="true">spa</span> Shiva Bhajan</span>
                <span><span className="icon icon-sm" aria-hidden="true">local_fire_department</span> Mata Bhajan</span>
                <span><span className="icon icon-sm" aria-hidden="true">groups</span> Satsang</span>
              </div>
            </div>

            <div className="ap-occasions">
              <span className="ap-trad-label">Best for</span>
              <div className="ap-occ-list">
                <div><span className="icon icon-sm icon-filled" aria-hidden="true">check_circle</span> Bhajan Sandhya</div>
                <div><span className="icon icon-sm icon-filled" aria-hidden="true">check_circle</span> Mata Ki Chowki</div>
                <div><span className="icon icon-sm icon-filled" aria-hidden="true">check_circle</span> Jagran</div>
                <div><span className="icon icon-sm icon-filled" aria-hidden="true">check_circle</span> Kirtan evenings</div>
                <div><span className="icon icon-sm icon-filled" aria-hidden="true">check_circle</span> Ram Navami · Janmashtami</div>
                <div><span className="icon icon-sm icon-filled" aria-hidden="true">check_circle</span> Hanuman Jayanti</div>
                <div><span className="icon icon-sm icon-filled" aria-hidden="true">check_circle</span> Family &amp; religious gatherings</div>
                <div><span className="icon icon-sm icon-filled" aria-hidden="true">check_circle</span> Navratri celebrations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured performances */}
      <section className="section ap-performances">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> FEATURED PERFORMANCES
            </div>
            <h2>Watch &amp; listen<br /><em>on YouTube.</em></h2>
          </div>
          <p>Browse performances by Pramod Ajmeriya from the Sonotek channel.</p>
        </div>
        <div className="ap-video-grid">
          {videos.map(video => (
            <a
              key={video.id}
              className="catalog-card"
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noreferrer"
            >
              <span
                className="catalog-thumb"
                style={{ backgroundImage: `linear-gradient(0deg,#20191688,transparent 70%),url(https://img.youtube.com/vi/${video.id}/hqdefault.jpg)` }}
              >
                <span className="play-button">
                  <span className="icon icon-filled" aria-hidden="true">play_arrow</span>
                </span>
                <small>{video.category}</small>
              </span>
              <span className="catalog-copy">
                <small>{video.singer} · {video.subtitle}</small>
                <strong>{video.title}</strong>
                <span>Watch on YouTube <span className="icon" aria-hidden="true">north_east</span></span>
              </span>
            </a>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <a className="outline-link dark-outline" href={channelUrl} target="_blank" rel="noreferrer">
            Browse full channel on YouTube <span className="icon" aria-hidden="true">north_east</span>
          </a>
        </div>
      </section>

      {/* Book CTA */}
      <section className="page-cta ap-book-cta">
        <div className="ap-cta-om" aria-hidden="true">ॐ</div>
        <h2>Book Pramod Ajmeriya<br />for your gathering</h2>
        <p>Send an enquiry with your event date, city and preferred devotional style. The team will confirm availability.</p>
        <Link className="button button-dark" href="/book">
          Send an enquiry <span className="icon" aria-hidden="true">north_east</span>
        </Link>
        <Link className="under-link" href="/contact">
          View all contact numbers <span className="icon icon-sm" aria-hidden="true">north_east</span>
        </Link>
      </section>

    </main>
  );
}
