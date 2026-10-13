import type { Metadata } from "next";
import VideoCatalog from "@/components/video-catalog";
import Localized from "@/components/localized";

export const metadata: Metadata = {
  title: "Performances",
  description: "Browse a curated selection of Bhajan Kirtan Sonotek YouTube performances.",
  alternates: { canonical: "/videos" },
};

export default function VideosPage() {
  return (
    <main id="main" className="inner-page">
      <div className="inner-hero">
        <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> <Localized>FROM THE CHANNEL</Localized></div>
        <h1><Localized>Listen into</Localized><br /><em><Localized>the devotion.</Localized></em></h1>
        <p><Localized>A small, curated selection across devotional styles. Each card opens the original video on YouTube.</Localized></p>
      </div>
      <section className="section catalog-section">
        <VideoCatalog />
      </section>
    </main>
  );
}
