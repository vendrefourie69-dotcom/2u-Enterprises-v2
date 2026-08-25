"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { SERVICES } from "@/data/services";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", mega: true },
  { href: "/gallery", label: "Our Works" },
  { href: "/blog", label: "Blog" },
  { href: "/contacts", label: "Contacts" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--brand-line)" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 900 }}>
          <span aria-hidden style={{ display: "grid", placeItems: "center", width: 40, height: 40, borderRadius: 10, background: "var(--brand-navy)", color: "var(--brand-gold)", fontWeight: 900, fontSize: 17 }}>2U</span>
          <span style={{ color: "var(--brand-navy)", letterSpacing: "-0.01em", fontSize: 16 }}>{SITE.wordmark}</span>
        </Link>

        <nav className="nav-desktop" style={{ display: "none", alignItems: "center", gap: 4 }}>
          {NAV.map((item) =>
            item.mega ? (
              <div key={item.href} onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)} style={{ position: "relative" }}>
                <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "10px 14px", fontWeight: 600, fontSize: 14 }}>
                  {item.label} <ChevronDown size={15} />
                </Link>
                {megaOpen && (
                  <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", width: 560, background: "#fff", border: "1px solid var(--brand-line)", borderRadius: 16, boxShadow: "var(--shadow-lift)", padding: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                    {SERVICES.map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`} className="mega-item" style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: 10 }}>
                        <span aria-hidden style={{ display: "grid", placeItems: "center", width: 34, height: 34, borderRadius: 8, background: "var(--brand-navy-soft)", color: "var(--brand-navy)", flexShrink: 0 }}>
                          <s.Icon size={17} />
                        </span>
                        <span>
                          <span style={{ display: "block", fontWeight: 700, fontSize: 13.5, color: "var(--brand-navy)" }}>{s.name}</span>
                          <span style={{ display: "block", fontSize: 11.5, color: "var(--brand-text)" }}>{s.short}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href} style={{ padding: "10px 14px", fontWeight: 600, fontSize: 14 }}>{item.label}</Link>
            )
          )}
          <Link href="/book" className="btn btn-gold" style={{ marginLeft: 8 }}>Book Now</Link>
        </nav>

        <button className="nav-mobile-btn" aria-label="Open menu" onClick={() => setMobileOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--brand-navy)" }}>
          <Menu size={26} />
        </button>
      </div>

      {mobileOpen && (
        <div className="fade-in" style={{ position: "fixed", inset: 0, zIndex: 60, background: "#fff", padding: 24, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <span style={{ fontWeight: 900, color: "var(--brand-navy)" }}>{SITE.wordmark}</span>
            <button aria-label="Close menu" onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--brand-navy)" }}>
              <X size={26} />
            </button>
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} style={{ padding: "12px 4px", fontWeight: 600, fontSize: 17, color: "var(--brand-navy)", borderBottom: "1px solid var(--brand-line)" }}>{item.label}</Link>
            ))}
          </nav>
          <div style={{ marginTop: 8 }}>
            <p className="eyebrow" style={{ margin: "16px 0 8px" }}>Our Services</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {SERVICES.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px", borderRadius: 8, fontSize: 12.5, fontWeight: 600, color: "var(--brand-navy)", background: "var(--brand-neutral)" }}>
                  <s.Icon size={15} /> {s.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/book" onClick={() => setMobileOpen(false)} className="btn btn-gold btn-block" style={{ marginTop: "auto" }}>Book Now</Link>
        </div>
      )}

      <style>{`
        @media (min-width: 940px) { .nav-desktop { display: flex !important; } .nav-mobile-btn { display: none !important; } }
        .mega-item:hover { background: var(--brand-neutral); }
      `}</style>
    </header>
  );
}
