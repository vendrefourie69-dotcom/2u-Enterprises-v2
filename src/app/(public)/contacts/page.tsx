import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacts",
  description: `Get in touch with ${SITE.name}. WhatsApp, email, or phone — serving ${SITE.serviceArea}.`,
};

export default function ContactsPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 900 }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <span className="section-tag" style={{ marginBottom: 16 }}>Contacts</span>
          <h1 style={{ marginBottom: 12 }}>Let&apos;s talk</h1>
          <p style={{ maxWidth: 480, margin: "0 auto" }}>The fastest way to reach us is a booking request — but you can also get in touch directly.</p>
        </div>

        <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", marginBottom: 40 }}>
          <a href={SITE.socials.whatsapp} target="_blank" rel="noreferrer" className="card card-hover" style={{ padding: 28, textAlign: "center" }}>
            <span style={{ display: "inline-grid", placeItems: "center", width: 52, height: 52, borderRadius: 13, background: "var(--brand-gold-soft)", color: "var(--brand-navy)", marginBottom: 14 }}><MessageCircle size={24} /></span>
            <h3 style={{ fontSize: 17, marginBottom: 6 }}>WhatsApp</h3>
            <p style={{ fontSize: 13.5, margin: 0 }}>Message us directly</p>
          </a>
          <a href={`mailto:${SITE.email}`} className="card card-hover" style={{ padding: 28, textAlign: "center" }}>
            <span style={{ display: "inline-grid", placeItems: "center", width: 52, height: 52, borderRadius: 13, background: "var(--brand-gold-soft)", color: "var(--brand-navy)", marginBottom: 14 }}><Mail size={24} /></span>
            <h3 style={{ fontSize: 17, marginBottom: 6 }}>Email</h3>
            <p style={{ fontSize: 13.5, margin: 0, wordBreak: "break-word" }}>{SITE.email}</p>
          </a>
          <a href={`tel:${SITE.phone}`} className="card card-hover" style={{ padding: 28, textAlign: "center" }}>
            <span style={{ display: "inline-grid", placeItems: "center", width: 52, height: 52, borderRadius: 13, background: "var(--brand-gold-soft)", color: "var(--brand-navy)", marginBottom: 14 }}><Phone size={24} /></span>
            <h3 style={{ fontSize: 17, marginBottom: 6 }}>Phone</h3>
            <p style={{ fontSize: 13.5, margin: 0 }}>{SITE.phone}</p>
          </a>
        </div>

        <div className="card" style={{ padding: 32, textAlign: "center", background: "var(--brand-neutral)" }}>
          <MapPin size={26} style={{ color: "var(--brand-gold)", marginBottom: 10 }} />
          <h3 style={{ fontSize: 18, marginBottom: 6 }}>Service area</h3>
          <p style={{ marginBottom: 20 }}>We come 2 u across {SITE.serviceArea}.</p>
          <Link href="/book" className="btn btn-gold">Send a booking request</Link>
        </div>
      </div>
    </section>
  );
}
