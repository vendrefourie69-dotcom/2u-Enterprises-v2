import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/services";

export default function ServiceGrid() {
  return (
    <div style={{ display: "grid", gap: 22, gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))" }}>
      {SERVICES.map((s, i) => (
        <div key={s.slug} className="card card-hover fade-up" style={{ padding: 24, display: "flex", flexDirection: "column", animationDelay: `${i * 0.05}s` }}>
          <span aria-hidden style={{ display: "grid", placeItems: "center", width: 52, height: 52, borderRadius: 13, background: "var(--brand-navy-soft)", color: "var(--brand-navy)", marginBottom: 16 }}>
            <s.Icon size={26} />
          </span>
          <h3 style={{ fontSize: 19, marginBottom: 6 }}>{s.name}</h3>
          <p style={{ fontSize: 13.5, flex: 1, marginBottom: 18 }}>{s.short}</p>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Link href={`/book?service=${s.slug}`} className="btn btn-gold" style={{ flex: 1 }}>Book {s.name.replace(" 2 U", "")}</Link>
            <Link href={`/services/${s.slug}`} aria-label={`Learn more about ${s.name}`} className="btn btn-outline" style={{ padding: "13px 14px" }}><ArrowRight size={16} /></Link>
          </div>
        </div>
      ))}
    </div>
  );
}
