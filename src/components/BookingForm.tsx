"use client";

import { useState, useEffect, useMemo } from "react";
import { MessageCircle, Mail, CheckCircle2, Paperclip } from "lucide-react";
import { SERVICES, getService } from "@/data/services";
import { buildMessage, whatsappUrl, mailtoUrl, type BookingCore } from "@/lib/booking";

const EMPTY_CORE: BookingCore = { name: "", email: "", phone: "", preferredDate: "", area: "", details: "" };

export default function BookingForm({ initialService }: { initialService?: string }) {
  const [slug, setSlug] = useState(initialService && getService(initialService) ? initialService : "");
  const [core, setCore] = useState<BookingCore>(EMPTY_CORE);
  const [extras, setExtras] = useState<Record<string, string | boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [attachmentName, setAttachmentName] = useState<string>("");
  const [sent, setSent] = useState(false);

  const service = useMemo(() => getService(slug), [slug]);

  useEffect(() => {
    setExtras({});
    setErrors({});
  }, [slug]);

  const setCoreField = (k: keyof BookingCore, v: string) => setCore((p) => ({ ...p, [k]: v }));
  const setExtra = (k: string, v: string | boolean) => setExtras((p) => ({ ...p, [k]: v }));

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (!slug) e.service = "Please choose a service.";
    if (!core.name.trim()) e.name = "Your name is required.";
    if (!core.phone.trim()) e.phone = "A phone number is required.";
    if (!core.email.trim()) e.email = "An email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(core.email)) e.email = "Enter a valid email.";
    if (service) {
      for (const f of service.fields) {
        if (f.required && !extras[f.name]) e[f.name] = `${f.label} is required.`;
      }
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSend(channel: "whatsapp" | "email") {
    if (!validate() || !service) return;
    const message = buildMessage(service, core, extras);
    const url = channel === "whatsapp" ? whatsappUrl(message) : mailtoUrl(service, message);
    window.open(url, channel === "whatsapp" ? "_blank" : "_self");
    setSent(true);
  }

  if (sent && service) {
    return (
      <div className="card fade-in" style={{ padding: 40, textAlign: "center" }}>
        <div style={{ display: "inline-grid", placeItems: "center", width: 68, height: 68, borderRadius: 999, background: "var(--brand-gold-soft)", color: "var(--brand-navy)", marginBottom: 18 }}>
          <CheckCircle2 size={34} />
        </div>
        <h3 style={{ marginBottom: 10 }}>Request ready to send</h3>
        <p style={{ maxWidth: 420, margin: "0 auto 22px" }}>
          Your {service.name} request has opened in WhatsApp or your email app — just hit send. We&apos;ll confirm availability and get back to you shortly.
        </p>
        <button className="btn btn-outline" onClick={() => setSent(false)}>Send another request</button>
      </div>
    );
  }

  return (
    <div className="card" style={{ padding: "clamp(22px, 4vw, 38px)" }}>
      <div style={{ marginBottom: 26 }}>
        <span className="section-tag" style={{ marginBottom: 14 }}>Booking request</span>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)" }}>{service ? `Book ${service.name}` : "Book a service"}</h2>
        <p style={{ fontSize: 14, marginTop: 8 }}>
          This is a request, not an instant booking — we confirm availability with you directly so there&apos;s never a double booking.
        </p>
      </div>

      <div style={{ marginBottom: 18 }}>
        <label className="field-label" htmlFor="service">Service</label>
        <select id="service" className="field" value={slug} onChange={(e) => setSlug(e.target.value)}>
          <option value="">Choose a service…</option>
          {SERVICES.map((s) => (<option key={s.slug} value={s.slug}>{s.name}</option>))}
        </select>
        {errors.service && <p className="err">{errors.service}</p>}
      </div>

      <div className="form-row">
        <div>
          <label className="field-label" htmlFor="name">Full name</label>
          <input id="name" className="field" value={core.name} onChange={(e) => setCoreField("name", e.target.value)} placeholder="Your name" />
          {errors.name && <p className="err">{errors.name}</p>}
        </div>
        <div>
          <label className="field-label" htmlFor="phone">Phone</label>
          <input id="phone" className="field" value={core.phone} onChange={(e) => setCoreField("phone", e.target.value)} placeholder="e.g. 082 000 0000" />
          {errors.phone && <p className="err">{errors.phone}</p>}
        </div>
      </div>

      <div className="form-row">
        <div>
          <label className="field-label" htmlFor="email">Email</label>
          <input id="email" className="field" type="email" value={core.email} onChange={(e) => setCoreField("email", e.target.value)} placeholder="you@email.com" />
          {errors.email && <p className="err">{errors.email}</p>}
        </div>
        <div>
          <label className="field-label" htmlFor="date">Preferred date / time</label>
          <input id="date" className="field" value={core.preferredDate} onChange={(e) => setCoreField("preferredDate", e.target.value)} placeholder="e.g. Sat morning" />
        </div>
      </div>

      <div style={{ marginBottom: 18 }}>
        <label className="field-label" htmlFor="area">Address / area</label>
        <input id="area" className="field" value={core.area} onChange={(e) => setCoreField("area", e.target.value)} placeholder="Suburb or address" />
      </div>

      {service && service.fields.length > 0 && (
        <div className="fade-up" style={{ padding: "18px", borderRadius: 12, background: "var(--brand-neutral)", marginBottom: 18 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-gold)", margin: "0 0 14px" }}>{service.name} details</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {service.fields.map((f) => (
              <div key={f.name}>
                {f.type === "toggle" ? (
                  <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: 14, fontWeight: 600, color: "var(--brand-navy)" }}>
                    <input type="checkbox" checked={!!extras[f.name]} onChange={(e) => setExtra(f.name, e.target.checked)} style={{ width: 18, height: 18, accentColor: "var(--brand-gold)" }} />
                    {f.label}
                  </label>
                ) : (
                  <>
                    <label className="field-label" htmlFor={f.name}>{f.label}</label>
                    {f.type === "select" ? (
                      <select id={f.name} className="field" value={(extras[f.name] as string) || ""} onChange={(e) => setExtra(f.name, e.target.value)}>
                        <option value="">Select…</option>
                        {f.options?.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    ) : f.type === "textarea" ? (
                      <textarea id={f.name} className="field" value={(extras[f.name] as string) || ""} onChange={(e) => setExtra(f.name, e.target.value)} placeholder={f.placeholder} />
                    ) : (
                      <input id={f.name} className="field" type={f.type === "number" ? "number" : f.type === "date" ? "date" : "text"} value={(extras[f.name] as string) || ""} onChange={(e) => setExtra(f.name, e.target.value)} placeholder={f.placeholder} />
                    )}
                  </>
                )}
                {errors[f.name] && <p className="err">{errors[f.name]}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ marginBottom: 18 }}>
        <label className="field-label" htmlFor="details">Details / notes</label>
        <textarea id="details" className="field" value={core.details} onChange={(e) => setCoreField("details", e.target.value)} placeholder="Anything else we should know?" />
      </div>

      <div style={{ marginBottom: 24 }}>
        <label className="field-label">Photo (optional)</label>
        <label className="btn btn-outline" style={{ cursor: "pointer", fontWeight: 600 }}>
          <Paperclip size={16} />
          {attachmentName || "Choose a photo"}
          <input type="file" accept="image/*" hidden onChange={(e) => setAttachmentName(e.target.files?.[0]?.name || "")} />
        </label>
        {attachmentName && (
          <p style={{ fontSize: 12, marginTop: 8, color: "var(--brand-text)" }}>
            Attach <strong>{attachmentName}</strong> directly in WhatsApp or your email after your request opens.
          </p>
        )}
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <button className="btn btn-gold" style={{ flex: 1, minWidth: 200 }} onClick={() => handleSend("whatsapp")}>
          <MessageCircle size={18} /> Send via WhatsApp
        </button>
        <button className="btn btn-navy" style={{ flex: 1, minWidth: 200 }} onClick={() => handleSend("email")}>
          <Mail size={18} /> Send via Email
        </button>
      </div>

      <style>{`
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 18px; }
        @media (max-width: 560px) { .form-row { grid-template-columns: 1fr; } }
        .err { color: #c0392b; font-size: 12px; margin: 6px 0 0; }
      `}</style>
    </div>
  );
}
