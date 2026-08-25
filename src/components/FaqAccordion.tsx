"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  { q: "How does booking work?", a: "You send a booking request through the site. We check availability and confirm your slot directly — there's no upfront payment and no live calendar to fight with, so double bookings never happen." },
  { q: "Which areas do you cover?", a: "We serve Johannesburg and the surrounding suburbs. If you're just outside, send a request anyway and we'll let you know." },
  { q: "How much do your services cost?", a: "Pricing depends on the service and the details of the job, so we quote per request. Send us what you need and we'll come back with a clear price before anything is confirmed." },
  { q: "How quickly can you come out?", a: "It depends on the service and how busy we are, but many requests are handled same-day or next-day. For H2O 2 U you can flag your request as urgent." },
  { q: "How do I pay?", a: "We arrange payment once your booking is confirmed and the details are agreed. Nothing is charged when you send the initial request." },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="card" style={{ padding: 0, overflow: "hidden" }}>
            <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "18px 22px", background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "inherit", fontSize: 15, fontWeight: 600, color: "var(--brand-navy)" }}>
              {f.q}
              <span style={{ color: "var(--brand-gold)", flexShrink: 0 }}>{isOpen ? <Minus size={18} /> : <Plus size={18} />}</span>
            </button>
            {isOpen && (<div className="fade-in" style={{ padding: "0 22px 20px", fontSize: 13.5, lineHeight: 1.7 }}>{f.a}</div>)}
          </div>
        );
      })}
    </div>
  );
}
