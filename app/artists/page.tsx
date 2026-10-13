import type { Metadata } from "next";
import Link from "next/link";
import { artists, videos } from "@/lib/site-data";
import Localized from "@/components/localized";

export const metadata: Metadata = {
  title: "Artists",
  description: "Meet the devotional singers of Bhajan Kirtan Sonotek — Riya Brajwasi, Anjali Jain, Yashpreet Kaur, Rajesh Madina and more.",
  alternates: { canonical: "/artists" },
};

export default function ArtistsPage() {
  return (
    <main id="main" className="inner-page">
      {/* Floating ornamental background */}
      <div className="artist-bg-symbols" aria-hidden="true">
        <span className="abg abg-1 icon">music_note</span>
        <span className="abg abg-2 icon">queue_music</span>
        <span className="abg abg-3">ॐ</span>
        <span className="abg abg-4 icon">local_florist</span>
        <span className="abg abg-5 icon">library_music</span>
        <span className="abg abg-6 icon">spa</span>
      </div>

      <div className="inner-hero artist-hero">
        <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> <Localized>VOICES OF DEVOTION</Localized></div>
        <h1><Localized>The artists who</Localized><br /><Localized>carry the</Localized> <em><Localized>bhav.</Localized></em></h1>
        <p><Localized>The Bhajan Kirtan Sonotek channel brings together a diverse ensemble of devotional singers. Discover their styles and explore their performances.</Localized></p>
        <p className="artist-note"><Localized>Artist availability for private events is subject to date and confirmation by the team.</Localized></p>
      </div>

      {/* Artist cards grid */}
      <section className="section artists-section">
        <div className="artists-grid">
          {artists.map((artist) => {
            const artistVideos = videos.filter(v => artist.videos.includes(v.id));
            return (
              <article key={artist.slug} className="artist-card">
                {/* Decorative diya top */}
                <div className="artist-card-top" aria-hidden="true">
                  <div className="artist-diya">
                    <div className="ad-flame" />
                    <div className="ad-bowl" />
                  </div>
                  <span className="artist-initial">{artist.name.charAt(0)}</span>
                </div>
                <div className="artist-card-body">
                  <div className="artist-specialty"><Localized>{artist.specialty}</Localized></div>
                  <h2 className="artist-name">{artist.name}</h2>
                  <p className="artist-desc"><Localized>{artist.description}</Localized></p>
                  {artistVideos.length > 0 && (
                    <div className="artist-videos">
                      <span className="artist-vids-label"><Localized>Featured on channel</Localized></span>
                      <div className="artist-vid-list">
                        {artistVideos.map(v => (
                          <a
                            key={v.id}
                            href={`https://www.youtube.com/watch?v=${v.id}`}
                            target="_blank"
                            rel="noreferrer"
                            className="artist-vid-chip"
                          >
                            <span className="av-thumb" style={{ backgroundImage: `url(https://img.youtube.com/vi/${v.id}/mqdefault.jpg)` }} />
                            <span className="av-info">
                              <strong>{v.title}</strong>
                              <small>{v.category}</small>
                            </span>
                            <span className="av-play"><span className="icon icon-filled" aria-hidden="true">play_arrow</span></span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  <Link className="artist-enquire" href="/book">
                    <Localized>Enquire with this artist in mind</Localized> <span className="icon" aria-hidden="true">north_east</span>
                  </Link>
                </div>
                <div className="artist-card-mandala" aria-hidden="true">✺</div>
              </article>
            );
          })}
        </div>
        <p className="availability-note" style={{ textAlign: "center", marginTop: "40px" }}>
          <span className="icon icon-filled" aria-hidden="true">verified</span> <Localized>Mentioning a preferred artist in your enquiry does not guarantee their availability. The team will confirm.</Localized>
        </p>
      </section>

      {/* Booking CTA */}
      <section className="page-cta artist-cta">
        <div className="artist-cta-symbol" aria-hidden="true">ॐ</div>
        <h2><Localized>Have a voice in mind?</Localized></h2>
        <p><Localized>Mention your preferred singer when you send your event enquiry. The team will explore availability for your date.</Localized></p>
        <Link className="button button-dark" href="/book"><Localized>Send an enquiry</Localized> <span className="icon" aria-hidden="true">north_east</span></Link>
      </section>
    </main>
  );
}
