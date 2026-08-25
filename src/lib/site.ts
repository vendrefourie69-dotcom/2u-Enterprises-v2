// Single source of truth for business contact details.
// Pulls from public env vars (set in Vercel) with sensible fallbacks so the
// site builds and runs even before you've filled them in.

export const SITE = {
  name: "2U Enterprises",
  wordmark: "2U ENTERPRISES",
  tagline: "We Come 2 U.",
  blurb:
    "On-demand services brought straight to your door across Johannesburg and surrounds. One request away — we confirm, then we come 2 u.",
  serviceArea: "Johannesburg & surrounds",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "27000000000",
  email: process.env.NEXT_PUBLIC_BOOKING_EMAIL || "hello@2uenterprises.co.za",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+27 00 000 0000",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://2uenterprises.vercel.app",
  socials: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
    whatsapp: "",
  },
};

SITE.socials.whatsapp = `https://wa.me/${SITE.whatsapp}`;
