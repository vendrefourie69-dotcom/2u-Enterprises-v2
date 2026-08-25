"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_IMAGES } from "@/data/images";

const SLIDES = [
  {
    tag: "We Come 2 U.",
    title: "On-demand services, delivered to your door.",
    subtitle: "Eight ways we make life easier — from a mobile car wash to firewood, water, and moving help. One request and we come 2 u.",
    image: HERO_IMAGES.main,
    service: "",
  },
  {
    tag: "Car Wash 2 U",
    title: "A showroom shine in your driveway.",
    subtitle: "Premium mobile car care — we bring the water, products, and equipment to you.",
    image: HERO_IMAGES.carWash,
    service: "car-wash",
  },
  {
    tag: "Event Staff 2 U",
    title: "Polished staff for your next event.",
    subtitle: "Rent professional waiters, waitresses, and bartenders by the hour.",
    image: HERO_IMAGES.eventStaff,
    service: "event-staff",
  },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const touchX = useRef<number | null>(null);
  const n = SLIDES.length;
  const go = (d: number) => setI((p) => (p + d + n) % n);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % n), 6000);
    return () => clearInterval(t);
  }, [n]);

  const slide = SLIDES[i];

  return (
    <section
      style={{ position: "relative", minHeight: 560, display: "flex", alignItems: "center", overflow: "hidden", background: "var(--brand-navy)" }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx > 0 ? -1 : 1);
        touchX.current = null;
      }}
    >
      {SLIDES.map((s, idx) => (
        <div key={idx} aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(90deg, rgba(34,60,92,0.92) 0%, rgba(34,60,92,0.65) 55%, rgba(34,60,92,0.4) 100%), url(${s.image})`, backgroundSize: "cover", backgroundPosition: "center", opacity: idx === i ? 1 : 0, transition: "opacity 0.9s ease" }} />
      ))}

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div key={i} className="fade-up" style={{ maxWidth: 640, color: "#fff" }}>
          <span className="section-tag section-tag-light" style={{ marginBottom: 20 }}>{slide.tag}</span>
          <h1 style={{ color: "#fff", marginBottom: 18 }}>{slide.title}</h1>
          <p style={{ fontSize: 16, color: "#dbe4f0", maxWidth: 540, marginBottom: 30 }}>{slide.subtitle}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href={slide.service ? `/book?service=${slide.service}` : "/book"} className="btn btn-gold" style={{ fontSize: 15, padding: "15px 30px" }}>Book a Service</Link>
            <Link href="/services" className="btn btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.35)" }}>View all services</Link>
          </div>
        </div>
      </div>

      <button aria-label="Previous slide" onClick={() => go(-1)} className="hero-arrow" style={{ left: 16 }}><ChevronLeft size={22} /></button>
      <button aria-label="Next slide" onClick={() => go(1)} className="hero-arrow" style={{ right: 16 }}><ChevronRight size={22} /></button>

      <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 3 }}>
        {SLIDES.map((_, idx) => (
          <button key={idx} aria-label={`Go to slide ${idx + 1}`} onClick={() => setI(idx)} style={{ width: idx === i ? 28 : 9, height: 9, borderRadius: 999, border: "none", cursor: "pointer", background: idx === i ? "var(--brand-gold)" : "rgba(255,255,255,0.5)", transition: "all 0.3s ease" }} />
        ))}
      </div>

      <style>{`
        .hero-arrow { position: absolute; top: 50%; transform: translateY(-50%); z-index: 3; display: grid; place-items: center; width: 44px; height: 44px; border-radius: 999px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); color: #fff; cursor: pointer; transition: background 0.2s ease; }
        .hero-arrow:hover { background: var(--brand-gold); color: var(--brand-navy); border-color: transparent; }
        @media (max-width: 640px) { .hero-arrow { display: none; } }
      `}</style>
    </section>
  );
}
