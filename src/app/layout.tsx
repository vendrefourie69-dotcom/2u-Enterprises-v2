import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.blurb,
  keywords: [
    "mobile car wash Johannesburg", "moving help Johannesburg", "event staff hire",
    "waiter bartender hire", "pet sitting Johannesburg", "home maintenance",
    "water delivery", "fruit basket delivery", "firewood delivery", "on-demand services",
  ],
  authors: [{ name: SITE.name }],
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: SITE.name, statusBarStyle: "default" },
  openGraph: {
    type: "website",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.blurb,
    url: SITE.url,
    siteName: SITE.name,
  },
  twitter: { card: "summary_large_image", title: `${SITE.name} — ${SITE.tagline}`, description: SITE.blurb },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#c9a227",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: SITE.blurb,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    areaServed: SITE.serviceArea,
    slogan: SITE.tagline,
  };

  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
