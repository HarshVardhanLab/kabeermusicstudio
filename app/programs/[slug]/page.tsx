import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { programs } from "@/lib/site-data";
import Localized from "@/components/localized";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return programs.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find(item => item.slug === slug);
  return { title: program?.title ?? "Program", description: program ? `Enquire about ${program.title} for your devotional gathering.` : undefined, alternates: { canonical: `/programs/${slug}` } };
}
export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = programs.find(item => item.slug === slug);
  if (!program) notFound();
  return (
    <main id="main" className="inner-page">
      <div className="breadcrumb">
        <Link href="/"><Localized>Home</Localized></Link><span>/</span>
        <Link href="/programs"><Localized>Programs</Localized></Link><span>/</span>
        <Localized>{program.title}</Localized>
      </div>
      <section className="detail-hero">
        <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> <Localized>{program.category}</Localized></div>
        <h1><Localized>{program.title.split(" ").slice(0, -1).join(" ") || program.title}</Localized><br /><em><Localized>{program.title.split(" ").at(-1) || ""}</Localized></em></h1>
        <p><Localized>{program.description}</Localized> <Localized>Share your date, city and preferences so the team can discuss a suitable arrangement.</Localized></p>
        <Link className="button button-dark" href={`/book?program=${program.slug}`}>
          <Localized>Enquire about this format</Localized> <span className="icon" aria-hidden="true">north_east</span>
        </Link>
        <p className="availability-note">
          <span className="icon icon-filled" aria-hidden="true">verified</span> <Localized>Program formats, performers, duration, equipment and pricing must be confirmed with the team.</Localized>
        </p>
      </section>
      <section className="detail-notes">
        <article>
          <span>01</span>
          <h2><Localized>Tell us the occasion</Localized></h2>
          <p><Localized>Let us know who is gathering, what you are celebrating and what devotional tradition you have in mind.</Localized></p>
        </article>
        <article>
          <span>02</span>
          <h2><Localized>Discuss the details</Localized></h2>
          <p><Localized>The team can check date and performer availability, event logistics and any requirements for your venue.</Localized></p>
        </article>
        <article>
          <span>03</span>
          <h2><Localized>Confirm the plan</Localized></h2>
          <p><Localized>A booking is confirmed only after you agree the details and receive confirmation from the team.</Localized></p>
        </article>
      </section>
    </main>
  );
}
