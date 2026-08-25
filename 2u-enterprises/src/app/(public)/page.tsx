import Link from "next/link";
import Image from "next/image";
import { Send, CheckCircle2, Truck } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import ServiceGrid from "@/components/ServiceGrid";
import CtaBand from "@/components/CtaBand";
import FaqAccordion from "@/components/FaqAccordion";
import { BLOG_POSTS } from "@/data/blog";
import { GALLERY } from "@/data/gallery";

const STEPS = [
  { Icon: Send, title: "You request", text: "Pick a service and send a booking request — takes under a minute, no payment upfront." },
  { Icon: CheckCircle2, title: "We confirm", text: "We check availability and confirm your slot directly, so there's never a double booking." },
  { Icon: Truck, title: "We come 2 u", text: "Our team arrives at your door, on time, ready to get the job done." },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span className="section-tag" style={{ marginBottom: 16 }}>Our Services</span>
            <h2 style={{ maxWidth: 560, margin: "0 auto 12px" }}>Eight services, one simple promise</h2>
            <p style={{ maxWidth: 520, margin: "0 auto" }}>
              Whatever you need brought to your door, tap a card to send a request. We confirm, then we come 2 u.
            </p>
          </div>
          <ServiceGrid />
        </div>
      </section>

      <section className="section section-neutral">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span className="section-tag" style={{ marginBottom: 16 }}>How it works</span>
            <h2>Three steps to done</h2>
          </div>
          <div style={{ display: "grid", gap: 22, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {STEPS.map((s, i) => (
              <div key={i} className="card" style={{ padding: 30, textAlign: "center" }}>
                <div style={{ position: "relative", display: "inline-grid", placeItems: "center", width: 64, height: 64, borderRadius: 16, background: "var(--brand-gold-soft)", color: "var(--brand-navy)", marginBottom: 18 }}>
                  <s.Icon size={28} />
                  <span style={{ position: "absolute", top: -8, right: -8, width: 26, height: 26, borderRadius: 999, background: "var(--brand-navy)", color: "#fff", fontSize: 12, fontWeight: 800, display: "grid", placeItems: "center" }}>{i + 1}</span>
                </div>
                <h3 style={{ fontSize: 19, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13.5 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
            <div>
              <span className="section-tag" style={{ marginBottom: 16 }}>Our Works</span>
              <h2>Recent jobs, done right</h2>
            </div>
            <Link href="/gallery" className="btn btn-outline">View all works</Link>
          </div>
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
            {GALLERY.slice(0, 4).map((g) => (
              <div key={g.id} className="card card-hover" style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", width: "100%", height: 180 }}>
                  <Image src={g.image} alt={g.title} fill sizes="(max-width: 640px) 100vw, 25vw" style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: 16 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--brand-gold)", margin: 0 }}>{g.category}</p>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "var(--brand-navy)", margin: "4px 0 0" }}>{g.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-neutral">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
            <div>
              <span className="section-tag" style={{ marginBottom: 16 }}>From the blog</span>
              <h2>Tips & updates</h2>
            </div>
            <Link href="/blog" className="btn btn-outline">Read the blog</Link>
          </div>
          <div style={{ display: "grid", gap: 22, gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
            {BLOG_POSTS.slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card card-hover" style={{ padding: 24, display: "block" }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--brand-gold)", margin: 0 }}>{p.category}</p>
                <h3 style={{ fontSize: 18, margin: "8px 0 10px" }}>{p.title}</h3>
                <p style={{ fontSize: 13.5 }}>{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-tag" style={{ marginBottom: 16 }}>FAQ</span>
            <h2>Good to know</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
