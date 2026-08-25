import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: 24, textAlign: "center" }}>
      <div>
        <p style={{ fontSize: 64, fontWeight: 900, color: "var(--brand-gold)", margin: 0, lineHeight: 1 }}>404</p>
        <h1 style={{ margin: "12px 0 10px" }}>We couldn&apos;t find that page</h1>
        <p style={{ maxWidth: 380, margin: "0 auto 24px" }}>The page may have moved. Let&apos;s get you back to booking a service.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-navy">Go home</Link>
          <Link href="/book" className="btn btn-gold">Book a service</Link>
        </div>
      </div>
    </div>
  );
}
