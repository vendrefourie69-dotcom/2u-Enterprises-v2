import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import { BLOG_POSTS, getPost } from "@/data/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const date = new Date(post.date).toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" });

  return (
    <>
      <article className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "var(--brand-navy)", marginBottom: 24 }}>
            <ArrowLeft size={16} /> Back to blog
          </Link>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--brand-gold)", margin: 0 }}>{post.category} · {date}</p>
          <h1 style={{ margin: "10px 0 24px" }}>{post.title}</h1>
          {post.body.map((para, i) => (<p key={i} style={{ fontSize: 15.5, lineHeight: 1.8, marginBottom: 18 }}>{para}</p>))}
          <div style={{ marginTop: 32 }}><Link href="/book" className="btn btn-gold">Book a service</Link></div>
        </div>
      </article>
      <CtaBand />
    </>
  );
}
