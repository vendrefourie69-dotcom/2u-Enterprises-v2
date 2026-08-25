import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import { GALLERY } from "@/data/gallery";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Works",
  description: `A showcase of completed jobs from ${SITE.name} across all eight services.`,
};

export default function GalleryPage() {
  return (
    <>
      <section style={{ background: "var(--brand-navy)", padding: "72px 0 60px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-tag section-tag-light" style={{ marginBottom: 18 }}>Our Works</span>
          <h1 style={{ color: "#fff", maxWidth: 640, margin: "0 auto 14px" }}>Jobs we&apos;re proud of</h1>
          <p style={{ color: "#dbe4f0", maxWidth: 520, margin: "0 auto", fontSize: 15 }}>A look at recent work across our services.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
            {GALLERY.map((g) => (
              <div key={g.id} className="card card-hover" style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", width: "100%", height: 200 }}>
                  <Image src={g.image} alt={g.title} fill sizes="(max-width: 640px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: 18 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--brand-gold)", margin: 0 }}>{g.category}</p>
                  <p style={{ fontSize: 14.5, fontWeight: 600, color: "var(--brand-navy)", margin: "5px 0 0" }}>{g.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
