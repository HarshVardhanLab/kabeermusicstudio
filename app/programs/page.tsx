import type { Metadata } from "next";
import Link from "next/link";
import { programs } from "@/lib/site-data";
import Localized from "@/components/localized";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore devotional program ideas and ask about event availability.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <main id="main" className="inner-page">
      <div className="inner-hero">
        <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> <Localized>PROGRAM IDEAS</Localized></div>
        <h1><Localized>Find the feeling</Localized><br /><Localized>for your gathering.</Localized></h1>
        <p><Localized>Choose a starting point. The team will help confirm whether the format and performers are available for your date and location.</Localized></p>
      </div>
      <div className="section programs inner-programs">
        <div className="program-grid">
          {programs.map((program, i) => (
            <Link className={`program-card card-${program.color}`} href={`/programs/${program.slug}`} key={program.slug}>
              <span className="card-icon"><span className="icon" aria-hidden="true">{program.iconName}</span></span>
              <span className="card-number">0{i + 1} / <Localized>{program.category}</Localized></span>
              <strong><Localized>{program.title}</Localized></strong>
              <span className="card-bottom"><Localized>{program.description}</Localized><span className="icon" aria-hidden="true">north_east</span></span>
            </Link>
          ))}
        </div>
        <p className="availability-note">
          <span className="icon icon-filled" aria-hidden="true">verified</span> <Localized>These are enquiry categories, not guaranteed packages. Share your event details to discuss options.</Localized>
        </p>
      </div>
      <div className="page-cta">
        <h2><Localized>Not sure what fits?</Localized></h2>
        <p><Localized>Tell us about your occasion and we can start from there.</Localized></p>
        <Link className="button button-dark" href="/book"><Localized>Ask about your event</Localized> <span className="icon" aria-hidden="true">north_east</span></Link>
      </div>
    </main>
  );
}
