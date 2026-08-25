import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service", description: `Terms of service for ${SITE.name}.` };

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <span className="section-tag" style={{ marginBottom: 16 }}>Legal</span>
        <h1 style={{ marginBottom: 8 }}>Terms of Service</h1>
        <p style={{ fontSize: 13, color: "var(--brand-text)", marginBottom: 28 }}>Last updated: February 2026</p>
        <div style={{ fontSize: 15, lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 20 }}>
          <div><h3 style={{ fontSize: 18, marginBottom: 8 }}>1. Bookings are requests</h3><p>All bookings made through this site are requests, not confirmed appointments. {SITE.name} confirms availability with you directly before any service is scheduled. Submitting a request does not create a binding booking until we confirm.</p></div>
          <div><h3 style={{ fontSize: 18, marginBottom: 8 }}>2. Pricing & payment</h3><p>Prices are quoted per request based on the details you provide. Any quote is confirmed with you before work begins. Payment terms are agreed at the time of confirmation.</p></div>
          <div><h3 style={{ fontSize: 18, marginBottom: 8 }}>3. Service area</h3><p>We operate across {SITE.serviceArea}. Requests outside this area may be declined or subject to additional arrangements.</p></div>
          <div><h3 style={{ fontSize: 18, marginBottom: 8 }}>4. Cancellations</h3><p>If you need to cancel or reschedule a confirmed booking, please let us know as early as possible so we can offer the slot to someone else.</p></div>
          <div><h3 style={{ fontSize: 18, marginBottom: 8 }}>5. Liability</h3><p>We take reasonable care in delivering every service. {SITE.name} is not liable for indirect or consequential losses arising from the use of our services beyond the value of the service provided.</p></div>
          <div><h3 style={{ fontSize: 18, marginBottom: 8 }}>6. Contact</h3><p>Questions about these terms? Reach us at {SITE.email}.</p></div>
          <p style={{ fontSize: 13, color: "var(--brand-text)", fontStyle: "italic" }}>This is a general template and not legal advice. Have it reviewed by a professional before relying on it.</p>
        </div>
      </div>
    </section>
  );
}
