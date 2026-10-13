import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { programs } from "@/lib/site-data";

type Enquiry = { program?: unknown; date?: unknown; time?: unknown; city?: unknown; venue?: unknown; audience?: unknown; budget?: unknown; name?: unknown; phone?: unknown; notes?: unknown; consent?: unknown; website?: unknown };
const clean = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";
const htmlEntities: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => htmlEntities[char] || char);

export async function POST(request: Request) {
  const data = await request.json().catch(() => null) as Enquiry | null;
  if (!data) return NextResponse.json({ error: "Invalid enquiry details." }, { status: 400 });
  if (clean(data.website, 200)) return NextResponse.json({ ok: true, reference: "received" });
  if (data.consent !== true) return NextResponse.json({ error: "Consent is required to send an enquiry." }, { status: 400 });

  const program = clean(data.program, 80);
  const date = clean(data.date, 10);
  const city = clean(data.city, 100);
  const name = clean(data.name, 100);
  const phone = clean(data.phone, 24);
  const notes = clean(data.notes, 1200);
  const allowedProgram = programs.some(item => item.slug === program) || program === "Other devotional program";
  const todayParts = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date());
  const indiaToday = `${todayParts.find(part => part.type === "year")?.value}-${todayParts.find(part => part.type === "month")?.value}-${todayParts.find(part => part.type === "day")?.value}`;
  const futureDate = /^\d{4}-\d{2}-\d{2}$/.test(date) && !Number.isNaN(Date.parse(`${date}T00:00:00`)) && date >= indiaToday;
  if (!allowedProgram || !futureDate || !city || !name || !/^(?:\+?91[\s-]?)?[6-9]\d{9}$/.test(phone.replace(/[()]/g, ""))) {
    return NextResponse.json({ error: "Please check the required event and contact details." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.BOOKING_EMAIL;
  const sender = process.env.BOOKING_FROM_EMAIL;
  if (!apiKey || !recipient || !sender) return NextResponse.json({ error: "Email enquiry is not configured. Please use WhatsApp or call the team." }, { status: 503 });

  const reference = `BKS-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}-${randomUUID().slice(0, 6).toUpperCase()}`;
  const rows: Array<[string, string]> = [
    ["Reference", reference], ["Program", program], ["Event date", date], ["Preferred time", clean(data.time, 30)], ["City", city], ["Venue type", clean(data.venue, 60)], ["Expected gathering", clean(data.audience, 50)], ["Budget range", clean(data.budget, 50)], ["Name", name], ["Mobile", phone], ["Additional details", notes],
  ];
  const html = `<h2>New Bhajan Kirtan Sonotek enquiry</h2><table>${rows.map(([label, value]) => `<tr><th align="left" style="padding:6px 14px 6px 0">${escapeHtml(label)}</th><td style="padding:6px 0">${escapeHtml(value || "Not provided")}</td></tr>`).join("")}</table><p>This is an enquiry only. Confirm date availability and terms with the customer.</p>`;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: sender, to: [recipient], subject: `Event enquiry ${reference} — ${name}`, html, reply_to: undefined }),
  }).catch(() => null);
  if (!response?.ok) return NextResponse.json({ error: "The email could not be delivered. Please try WhatsApp or call the team." }, { status: 502 });
  return NextResponse.json({ ok: true, reference });
}
