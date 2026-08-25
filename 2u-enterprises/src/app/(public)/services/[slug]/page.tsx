import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { SERVICES, getService, SERVICE_SLUGS } from "@/data/services";
import { GALLERY } from "@/data/gallery";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.name,
    description: `${service.description} Serving ${SITE.serviceArea}. ${SITE.tagline}`,
    keywords: [service.name, `${service.name} ${SITE.serviceArea}`, "on-demand", "mobile service"],
    openGraph: { title: `${service.name} · ${SITE.name}`, description: service.description, images: [service.image] },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = GALLERY.filter((g) => g.category === service.name).slice(0, 3);
  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    areaServed: SITE.serviceArea,
    provider: { "@type": "LocalBusiness", name: SITE.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ position: "relative", minHeight: 420, display: "flex", alignItems: "center", background: "var(--brand-navy)" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(90deg, rgba(34,60,92,0.94) 0%, rgba(34,60,92,0.6) 100%), url(${service.image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 620 }}>
            <span className="section-tag section-tag-light" style={{ marginBottom: 18 }}>
              <service.Icon size={14} style={{ marginRight: 2 }} /> {service.name}
            </span>
            <h1 style={{ color: "#fff", marginBottom: 16 }}>{service.tagline}</h1>
            <p style={{ color: "#dbe4f0", fontSize: 16, maxWidth: 520, marginBottom: 28 }}>{service.description}</p>
            <Link href={`/book?service=${service.slug}`} className="btn btn-gold" style={{ fontSize: 15, padding: "15px 30px" }}>
              Book {service.name} <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-wrap" style={{ display: "grid", gap: 44, gridTemplateColumns: "1.4fr 1fr" }}>
          <div className="detail-main">
            <span className="section-tag" style={{ marginBottom: 16 }}>What&apos;s included</span>
            <h2 style={{ marginBottom: 22 }}>Everything you get with {service.name}</h2>
            <div className="include-grid" style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr" }}>
              {service.includes.map((inc) => (
                <div key={inc} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ display: "grid", placeItems: "center", width: 24, height: 24, borderRadius: 999, background: "var(--brand-gold-soft)", color: "var(--brand-navy)", flexShrink: 0, marginTop: 2 }}>
                    <Check size={14} />
                  </span>
                  <span style={{ fontSize: 14, color: "var(--brand-navy)", fontWeight: 500 }}>{inc}</span>
                </div>
              ))}
            </div>

            {related.length > 0 && (
              <div style={{ marginTop: 44 }}>
                <span className="section-tag" style={{ marginBottom: 16 }}>Recent work</span>
                <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", marginTop: 8 }}>
                  {related.map((g) => (
                    <div key={g.id} style={{ position: "relative", width: "100%", height: 130, borderRadius: 12, overflow: "hidden", border: "1px solid var(--brand-line)" }}>
                      <Image src={g.image} alt={g.title} fill sizes="160px" style={{ objectFit: "cover" }} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside>
            <div className="card" style={{ padding: 26, position: "sticky", top: 96 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-gold)", margin: "0 0 6px" }}>Pricing</p>
              <p style={{ fontSize: 20, fontWeight: 800, color: "var(--brand-navy)", margin: "0 0 20px" }}>{service.pricing}</p>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-gold)", margin: "0 0 10px" }}>Ideal for</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 22 }}>
                {service.idealFor.map((t) => (
                  <span key={t} style={{ fontSize: 12, fontWeight: 600, color: "var(--brand-navy)", background: "var(--brand-navy-soft)", padding: "5px 11px", borderRadius: 999 }}>{t}</span>
                ))}
              </div>
              <Link href={`/book?service=${service.slug}`} className="btn btn-gold btn-block" style={{ marginBottom: 10 }}>Book {service.name}</Link>
              <p style={{ fontSize: 12, textAlign: "center", color: "var(--brand-text)", margin: 0 }}>Request-based · we confirm availability</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-neutral">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <span className="section-tag" style={{ marginBottom: 16 }}>More services</span>
            <h2>Other ways we come 2 u</h2>
          </div>
          <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {others.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card card-hover" style={{ padding: 24, display: "block" }}>
                <span style={{ display: "grid", placeItems: "center", width: 46, height: 46, borderRadius: 12, background: "var(--brand-navy-soft)", color: "var(--brand-navy)", marginBottom: 14 }}>
                  <s.Icon size={22} />
                </span>
                <h3 style={{ fontSize: 17, marginBottom: 6 }}>{s.name}</h3>
                <p style={{ fontSize: 13 }}>{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .detail-wrap { grid-template-columns: 1fr !important; }
          .detail-main + aside { order: -1; }
        }
        @media (max-width: 480px) { .include-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
