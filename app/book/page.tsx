import type { Metadata } from "next";
import BookingForm from "@/components/booking-form";
import Localized from "@/components/localized";

export const metadata: Metadata = {
  title: "Event enquiry",
  description: "Share your event details and enquire about a bhajan or kirtan.",
  alternates: { canonical: "/book" },
};
type Props = { searchParams: Promise<{ program?: string | string[] }> };

export default async function BookPage({ searchParams }: Props) {
  const params = await searchParams;
  const selected = Array.isArray(params.program) ? params.program[0] : params.program;
  const emailEnabled = Boolean(process.env.RESEND_API_KEY && process.env.BOOKING_EMAIL && process.env.BOOKING_FROM_EMAIL);
  return (
    <main id="main" className="booking-page">
      <div className="booking-aside">
        <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> <Localized>YOUR GATHERING STARTS HERE</Localized></div>
        <h1><Localized>Let’s start</Localized><br /><Localized>with a hello.</Localized></h1>
        <p><Localized>Share the details you know. The team can help discuss availability, format and next steps.</Localized></p>
        <div className="booking-assurance">
          <span className="icon icon-filled" aria-hidden="true">info</span>
          <p><Localized>Sending an enquiry does not reserve a date. The team confirms availability and booking terms with you.</Localized></p>
        </div>
        <div className="booking-aside-foot">ॐ <small>श्रद्धा · संगीत · संगत</small></div>
      </div>
      <section className="booking-panel">
        <BookingForm initialProgram={selected || ""} emailEnabled={emailEnabled} />
      </section>
    </main>
  );
}
