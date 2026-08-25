import type { Metadata } from "next";
import Image from "next/image";
import { Target, Heart, Clock, ShieldCheck } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${SITE.name} brings everyday services to your door across ${SITE.serviceArea}. Learn how the "we come 2 u" model works.`,
};

const VALUES = [
  { Icon: Clock, title: "Your time first", text: "Every service is built to save you a trip. You send a request; we handle the rest." },
  { Icon: ShieldCheck, title: "Reliable & vetted", text: "Presentable, dependable people who show up when they say they will." },
  { Icon: Heart, title: "Local & personal", text: "We're part of your community, serving neighbours across the area." },
  { Icon: Target, title: "One clear promise", text: "Whatever the service, the deal is the same — we come 2 u." },
];

export default function AboutPage() {
  return (
    <>
      <section style={{ background: "var(--brand-navy)", padding: "72px 0 60px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-tag section-tag-light" style={{ marginBottom: 18 }}>About us</span>
          <h1 style={{ color: "#fff", maxWidth: 640, margin: "0 auto 14px" }}>Everyday services, brought to your door</h1>
          <p style={{ color: "#dbe4f0", maxWidth: 560, margin: "0 auto", fontSize: 15 }}>{SITE.name} exists to give you back your time. Instead of you chasing errands across town, we bring the service to you.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="section-tag" style={{ marginBottom: 16 }}>Our story</span>
          <h2 style={{ marginBottom: 18 }}>Built on a simple idea</h2>
          <p style={{ fontSize: 15, marginBottom: 16 }}>Life is busy, and the small jobs pile up — the car needs a wash, the fridge needs fruit, moving day needs extra hands, the fireplace needs wood. Each one means a trip, a queue, and time you don&apos;t have.</p>
          <p style={{ fontSize: 15, marginBottom: 16 }}>We started {SITE.name} to flip that around. Across eight services, the model never changes: you send a request, we confirm availability, and we come 2 u. No apps to fight with, no live calendar mishaps, no double bookings.</p>
          <p style={{ fontSize: 15 }}>Today we serve {SITE.serviceArea}, and we&apos;re growing every service to reach more homes and businesses.</p>
        </div>
      </section>

      <section style={{ paddingBottom: 20 }}>
        <div className="container">
          <div style={{ position: "relative", width: "100%", height: "clamp(220px, 34vw, 400px)", borderRadius: 18, overflow: "hidden", border: "1px solid var(--brand-line)" }}>
            <Image src="/images/extras/16-2u-branded-vehicle.jpg" alt="2U Enterprises branded vehicle on the road" fill sizes="(max-width: 1180px) 100vw, 1180px" style={{ objectFit: "cover" }} priority />
          </div>
        </div>
      </section>

      <section className="section section-neutral">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-tag" style={{ marginBottom: 16 }}>What we stand for</span>
            <h2>The values behind every job</h2>
          </div>
          <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {VALUES.map((v) => (
              <div key={v.title} className="card" style={{ padding: 26 }}>
                <span style={{ display: "grid", placeItems: "center", width: 48, height: 48, borderRadius: 12, background: "var(--brand-gold-soft)", color: "var(--brand-navy)", marginBottom: 14 }}>
                  <v.Icon size={22} />
                </span>
                <h3 style={{ fontSize: 17, marginBottom: 8 }}>{v.title}</h3>
                <p style={{ fontSize: 13.5 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
