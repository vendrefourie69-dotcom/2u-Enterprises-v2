import { Suspense } from "react";
import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Service",
  description: `Send a booking request to ${SITE.name}. Choose a service, tell us the details, and we'll confirm availability.`,
};

export default async function BookPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  return (
    <section className="section" style={{ background: "var(--brand-neutral)" }}>
      <div className="container" style={{ maxWidth: 720 }}>
        <Suspense fallback={<div className="card" style={{ padding: 40 }}>Loading…</div>}>
          <BookingForm initialService={service} />
        </Suspense>
      </div>
    </section>
  );
}
