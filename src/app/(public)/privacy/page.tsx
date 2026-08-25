import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", description: `Privacy policy for ${SITE.name}.` };

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <span className="section-tag" style={{ marginBottom: 16 }}>Legal</span>
        <h1 style={{ marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ fontSize: 13, color: "var(--brand-text)", marginBottom: 28 }}>Last updated: February 2026</p>
        <div style={{ fontSize: 15, lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 20 }}>
          <div><h3 style={{ fontSize: 18, marginBottom: 8 }}>What we collect</h3><p>When you send a booking request, you share details like your name, contact information, address or area, and the specifics of the service you need. This is sent to us directly via WhatsApp or email — this website does not store your information in a database.</p></div>
          <div><h3 style={{ fontSize: 18, marginBottom: 8 }}>How we use it</h3><p>We use your details only to respond to your request, confirm availability, and deliver the service. We don&apos;t sell or share your information with third parties for marketing.</p></div>
          <div><h3 style={{ fontSize: 18, marginBottom: 8 }}>How requests are sent</h3><p>Booking requests are delivered through WhatsApp or your email client. Those services handle your message under their own privacy policies.</p></div>
          <div><h3 style={{ fontSize: 18, marginBottom: 8 }}>Your choices</h3><p>You can ask us to update or delete the information you&apos;ve shared at any time by contacting {SITE.email}.</p></div>
          <p style={{ fontSize: 13, color: "var(--brand-text)", fontStyle: "italic" }}>This is a general template and not legal advice. Have it reviewed by a professional before relying on it.</p>
        </div>
      </div>
    </section>
  );
}
