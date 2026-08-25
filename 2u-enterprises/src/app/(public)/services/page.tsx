import type { Metadata } from "next";
import ServiceGrid from "@/components/ServiceGrid";
import CtaBand from "@/components/CtaBand";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `All eight on-demand services from ${SITE.name} — car wash, moving help, event staff, pet care, maintenance, water, fruit, and firewood, brought to your door.`,
};

export default function ServicesPage() {
  return (
    <>
      <section style={{ background: "var(--brand-navy)", padding: "72px 0 60px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-tag section-tag-light" style={{ marginBottom: 18 }}>What we do</span>
          <h1 style={{ color: "#fff", maxWidth: 640, margin: "0 auto 14px" }}>Eight services, brought 2 u</h1>
          <p style={{ color: "#dbe4f0", maxWidth: 520, margin: "0 auto", fontSize: 15 }}>Tap any service to send a request. We confirm availability, then we come 2 u.</p>
        </div>
      </section>
      <section className="section">
        <div className="container"><ServiceGrid /></div>
      </section>
      <CtaBand />
    </>
  );
}
