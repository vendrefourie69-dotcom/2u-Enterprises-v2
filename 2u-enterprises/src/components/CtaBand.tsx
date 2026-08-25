import Link from "next/link";
import { SITE } from "@/lib/site";

export default function CtaBand({
  title = "Ready when you are.",
  subtitle = "Send a request and we'll confirm availability — then we come 2 u.",
  service,
}: {
  title?: string;
  subtitle?: string;
  service?: string;
}) {
  const href = service ? `/book?service=${service}` : "/book";
  return (
    <section className="section-navy" style={{ padding: "70px 0" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <span className="section-tag section-tag-light" style={{ marginBottom: 18 }}>{SITE.tagline}</span>
        <h2 style={{ maxWidth: 620, margin: "0 auto 14px" }}>{title}</h2>
        <p style={{ maxWidth: 520, margin: "0 auto 28px", color: "#c2d0e2", fontSize: 15 }}>{subtitle}</p>
        <Link href={href} className="btn btn-gold" style={{ fontSize: 15, padding: "15px 32px" }}>Book a Service</Link>
      </div>
    </section>
  );
}
