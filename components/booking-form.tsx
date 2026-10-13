"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { bookingPhone, displayPhone, programs } from "@/lib/site-data";
import { useLanguage } from "@/components/language-provider";

type Details = { program: string; date: string; time: string; city: string; venue: string; audience: string; budget: string; name: string; phone: string; notes: string; consent: boolean; website: string };
const empty: Details = { program: "", date: "", time: "", city: "", venue: "", audience: "", budget: "", name: "", phone: "", notes: "", consent: false, website: "" };

export default function BookingForm({ initialProgram = "", emailEnabled = false }: { initialProgram?: string; emailEnabled?: boolean }) {
  const [details, setDetails] = useState<Details>({ ...empty, program: initialProgram });
  const [step, setStep] = useState(1);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [reference, setReference] = useState("");
  const router = useRouter();
  const { t } = useLanguage();
  const today = new Date();
  const minDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

  function update<K extends keyof Details>(key: K, value: Details[K]) {
    setDetails(current => ({ ...current, [key]: value }));
  }
  function nextStep(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const required = step === 1 ? ["program", "date", "city"] : ["name", "phone"];
    const invalid = required.find(key => !String(details[key as keyof Details]).trim());
    if (invalid) { document.getElementById(invalid)?.focus(); return; }
    if (step === 1 && details.date < minDate) { setMessage(t("Please choose today or a future date.")); return; }
    if (step === 2 && !/^(?:\+?91[\s-]?)?[6-9]\d{9}$/.test(details.phone.replace(/[()]/g, "").trim())) { setMessage(t("Enter a valid 10-digit Indian mobile number.")); document.getElementById("phone")?.focus(); return; }
    setMessage("");
    setStep(2);
  }
  function whatsapp() {
    if (!details.consent) { setMessage(t("Please agree to share these details with Sonotek to continue.")); return; }
    if (!/^(?:\+?91[\s-]?)?[6-9]\d{9}$/.test(details.phone.replace(/[()]/g, "").trim())) { setMessage(t("Enter a valid 10-digit Indian mobile number.")); return; }
    const programLabel = programs.find(item => item.slug === details.program)?.title || details.program;
    const lines = [t("Namaste, I would like to enquire about a devotional program."), "", `${t("Program")}: ${t(programLabel)}`, `${t("Event date")}: ${details.date}`, details.time && `${t("Preferred time")}: ${t(details.time)}`, `${t("City")}: ${details.city}`, details.venue && `${t("Venue type")}: ${t(details.venue)}`, details.audience && `${t("Expected gathering")}: ${t(details.audience)}`, details.budget && `${t("Budget range")}: ${t(details.budget)}`, `${t("Your name")}: ${details.name}`, `${t("Mobile number")}: ${details.phone}`, details.notes && `${t("Additional details")}: ${details.notes}`, "", t("Please let me know about availability and next steps. I understand this enquiry is not a confirmed booking.")].filter(Boolean).join("\n");
    window.open(`https://wa.me/${bookingPhone}?text=${encodeURIComponent(lines)}`, "_blank", "noopener,noreferrer");
    setMessage(t("WhatsApp opened with your enquiry. Review the message and press Send to share it with the team."));
  }
  async function email(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!details.consent) { setMessage(t("Please agree to share these details with Sonotek to continue.")); return; }
    setBusy(true); setMessage("");
    try {
      const response = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(details) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || t("Could not send this enquiry. Please try WhatsApp or call the team."));
      setReference(result.reference);
      router.push(`/book/success?ref=${encodeURIComponent(result.reference)}`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : t("Could not send this enquiry. Please try WhatsApp or call the team."));
    } finally { setBusy(false); }
  }

  if (reference) return (
    <div className="form-success" role="status">
      <span className="success-mark"><span className="icon icon-filled" aria-hidden="true">check_circle</span></span>
      <div className="eyebrow"><span className="icon icon-sm" aria-hidden="true">fiber_manual_record</span> {t("ENQUIRY SENT")}</div>
      <h2>{t("Thank you,")}<br /><em>{details.name}.</em></h2>
      <p>{t("Your enquiry reference is")} <strong>{reference}</strong>. {t("The team will follow up using the contact details you provided. This is an enquiry, not a confirmed booking.")}</p>
      <Link className="text-link" href="/">{t("Back to home")} <span className="icon" aria-hidden="true">north_east</span></Link>
    </div>
  );

  return (
    <form className="booking-form" onSubmit={step === 1 ? nextStep : email}>
      <div className="form-progress" aria-label={t(step === 1 ? "Step 1 of 2" : "Step 2 of 2")}>
        <span className={step >= 1 ? "current" : ""} />
        <span className={step >= 2 ? "current" : ""} />
        <small>STEP {step} OF 2 · {t(step === 1 ? "EVENT DETAILS" : "YOUR CONTACT")}</small>
      </div>
      {step === 1 ? (
        <div className="form-step">
          <h2>{t("What are you")}<br /><em>{t("planning?")}</em></h2>
          <p className="form-intro">{t("A few details help the team understand your gathering.")}</p>
          <label>{t("Program or devotional style")}
            <select id="program" value={details.program} onChange={e => update("program", e.target.value)} required>
              <option value="">{t("Choose a starting point")}</option>
              {programs.map(item => <option value={item.slug} key={item.slug}>{t(item.title)}</option>)}
              <option value="Other devotional program">{t("Something else")}</option>
            </select>
          </label>
          <div className="form-row">
            <label>{t("Event date")}<input id="date" type="date" min={minDate} value={details.date} onChange={e => update("date", e.target.value)} required /></label>
            <label>{t("Preferred time")} <small>{t("optional")}</small>
              <select value={details.time} onChange={e => update("time", e.target.value)}>
                <option value="">{t("Choose")}</option><option>{t("Morning")}</option><option>{t("Afternoon")}</option><option>{t("Evening")}</option><option>{t("Flexible")}</option>
              </select>
            </label>
          </div>
          <label>{t("City or town")}<input id="city" type="text" value={details.city} onChange={e => update("city", e.target.value)} placeholder={t("e.g. Delhi")} autoComplete="address-level2" required /></label>
          <label>{t("Venue type")} <small>{t("optional")}</small>
            <select value={details.venue} onChange={e => update("venue", e.target.value)}>
              <option value="">{t("Choose if known")}</option><option value="Home">{t("Home venue")}</option><option value="Temple">{t("Temple")}</option><option value="Community hall">{t("Community hall")}</option><option value="Outdoor venue">{t("Outdoor venue")}</option><option value="Other">{t("Other")}</option>
            </select>
          </label>
          <label className="honeypot" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={details.website} onChange={e => update("website", e.target.value)} /></label>
          <button className="button button-dark form-submit" type="submit">{t("Continue to contact details")} <span className="icon" aria-hidden="true">north_east</span></button>
        </div>
      ) : (
        <div className="form-step">
          <button className="back-link" type="button" onClick={() => { setMessage(""); setStep(1); }}>
            <span className="icon" aria-hidden="true">arrow_back</span> {t("← Back to event details")}
          </button>
          <h2>{t("How can we")}<br /><em>{t("reach you?")}</em></h2>
          <p className="form-intro">{t("Share your contact details and choose how you’d like to send the enquiry.")}</p>
          <label>{t("Your name")}<input id="name" type="text" autoComplete="name" value={details.name} onChange={e => update("name", e.target.value)} placeholder={t("Name")} required /></label>
          <label>{t("Mobile number")}<input id="phone" type="tel" autoComplete="tel" inputMode="tel" value={details.phone} onChange={e => update("phone", e.target.value)} placeholder={t("10-digit mobile number")} required /></label>
          <div className="form-row">
            <label>{t("Expected gathering")} <small>{t("optional")}</small>
              <select value={details.audience} onChange={e => update("audience", e.target.value)}>
                <option value="">{t("Choose")}</option><option>{t("Up to 50")}</option><option>50–150</option><option>150–500</option><option>500+</option><option>{t("Not sure")}</option>
              </select>
            </label>
            <label>{t("Budget range")} <small>{t("optional")}</small>
              <select value={details.budget} onChange={e => update("budget", e.target.value)}>
                <option value="">{t("Prefer to discuss")}</option><option>{t("Under ₹25,000")}</option><option>{t("₹25,000–₹50,000")}</option><option>{t("₹50,000–₹1,00,000")}</option><option>{t("₹1,00,000+")}</option>
              </select>
            </label>
          </div>
          <label>{t("Additional details")} <small>{t("optional")}</small>
            <textarea rows={3} value={details.notes} onChange={e => update("notes", e.target.value)} placeholder={t("Preferred artist, venue details, or anything else to share")} />
          </label>
          <label className="consent">
            <input type="checkbox" checked={details.consent} onChange={e => update("consent", e.target.checked)} required />
            <span>{t("I agree to share these details with Sonotek so the team can respond to my enquiry.")}</span>
          </label>
          {message && <p className="form-message" role="status">{message}</p>}
          <button className="button button-dark form-submit" type="button" onClick={whatsapp}>
            {t("Continue with WhatsApp")} <span className="icon" aria-hidden="true">north_east</span>
          </button>
          {emailEnabled && (
            <button className="button button-outline form-submit" type="submit" disabled={busy}>
              {busy ? t("Sending enquiry…") : t("Send enquiry by email")} <span className="icon" aria-hidden="true">north_east</span>
            </button>
          )}
          <a className="call-option" href={`tel:${displayPhone.replaceAll(" ", "")}`}>{t("Prefer to call?")} {displayPhone}</a>
          <p className="form-privacy">{t("WhatsApp opens with a message for you to review and send. Email sends the details directly to the booking team. Your date is not confirmed until the team replies.")}</p>
        </div>
      )}
      {step === 1 && message && <p className="form-message" role="alert">{message}</p>}
    </form>
  );
}
