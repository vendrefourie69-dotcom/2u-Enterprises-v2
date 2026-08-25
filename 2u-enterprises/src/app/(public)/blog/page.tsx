import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { BLOG_POSTS } from "@/data/blog";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Blog", description: `Tips, guides, and updates from ${SITE.name}.` };

export default function BlogPage() {
  return (
    <>
      <section style={{ background: "var(--brand-navy)", padding: "72px 0 60px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-tag section-tag-light" style={{ marginBottom: 18 }}>Blog</span>
          <h1 style={{ color: "#fff", maxWidth: 640, margin: "0 auto 14px" }}>Tips & updates</h1>
          <p style={{ color: "#dbe4f0", maxWidth: 520, margin: "0 auto", fontSize: 15 }}>Practical advice to get the most from every service.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gap: 22, gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
            {BLOG_POSTS.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card card-hover" style={{ padding: 26, display: "block" }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--brand-gold)", margin: 0 }}>{p.category}</p>
                <h3 style={{ fontSize: 19, margin: "8px 0 10px" }}>{p.title}</h3>
                <p style={{ fontSize: 13.5, marginBottom: 14 }}>{p.excerpt}</p>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: "var(--brand-navy)" }}>Read more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
