import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MessageCircle } from "lucide-react";
import { SERVICES } from "@/data/services";
import { SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="section-navy" style={{ paddingTop: 64 }}>
      <div className="container">
        <div className="footer-grid" style={{ display: "grid", gap: 40, gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span aria-hidden style={{ display: "grid", placeItems: "center", width: 40, height: 40, borderRadius: 10, background: "var(--brand-gold)", color: "var(--brand-navy)", fontWeight: 900 }}>2U</span>
              <strong style={{ color: "#fff", fontSize: 16 }}>{SITE.wordmark}</strong>
            </div>
            <p style={{ fontSize: 13.5, color: "#c2d0e2", maxWidth: 320 }}>{SITE.blurb}</p>
            <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
              <a href={SITE.socials.whatsapp} aria-label="WhatsApp" className="footer-soc"><MessageCircle size={18} /></a>
              <a href={SITE.socials.facebook} aria-label="Facebook" className="footer-soc"><Facebook size={18} /></a>
              <a href={SITE.socials.instagram} aria-label="Instagram" className="footer-soc"><Instagram size={18} /></a>
            </div>
          </div>

          <div>
            <p className="foot-head">Company</p>
            {[{ href: "/about", label: "About" }, { href: "/gallery", label: "Our Works" }, { href: "/blog", label: "Blog" }, { href: "/contacts", label: "Contacts" }, { href: "/terms", label: "Terms" }, { href: "/privacy", label: "Privacy" }].map((l) => (
              <Link key={l.href} href={l.href} className="foot-link">{l.label}</Link>
            ))}
          </div>

          <div>
            <p className="foot-head">Services</p>
            {SERVICES.map((s) => (<Link key={s.slug} href={`/services/${s.slug}`} className="foot-link">{s.name}</Link>))}
          </div>

          <div>
            <p className="foot-head">Get in touch</p>
            <a href={`tel:${SITE.phone}`} className="foot-link" style={{ display: "flex", alignItems: "center", gap: 8 }}><Phone size={15} /> {SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="foot-link" style={{ display: "flex", alignItems: "center", gap: 8 }}><Mail size={15} /> {SITE.email}</a>
            <p style={{ fontSize: 12.5, color: "#a9bad0", marginTop: 12 }}>Serving {SITE.serviceArea}</p>
            <Link href="/book" className="btn btn-gold" style={{ marginTop: 16 }}>Book a Service</Link>
          </div>
        </div>

        <div style={{ marginTop: 48, paddingTop: 20, paddingBottom: 28, borderTop: "1px solid rgba(255,255,255,0.12)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10, fontSize: 12.5, color: "#a9bad0" }}>
          <span>© {year} {SITE.name}. {SITE.tagline}</span>
          <span>Built to come 2 u.</span>
        </div>
      </div>

      <style>{`
        .foot-head { color:#fff; font-weight:700; font-size:12px; letter-spacing:0.14em; text-transform:uppercase; margin:0 0 14px; }
        .foot-link { display:block; font-size:13.5px; color:#c2d0e2; padding:5px 0; transition:color .15s ease; }
        .foot-link:hover { color: var(--brand-gold); }
        .footer-soc { display:grid; place-items:center; width:38px; height:38px; border-radius:10px; background:rgba(255,255,255,0.1); color:#fff; transition:background .2s ease; }
        .footer-soc:hover { background: var(--brand-gold); color: var(--brand-navy); }
        @media (max-width: 860px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
