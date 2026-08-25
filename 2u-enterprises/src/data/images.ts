/* ============================================================================
   IMAGE REGISTRY — the single place every image path on the site is defined.
   ============================================================================

   HOW THIS WORKS
   --------------
   Every image on the site is a LOCAL file under /public/images/.
   To change any picture, you just replace the file in GitHub at the path shown
   below — you do NOT need to touch any other code.

   Folders:
     /public/images/hero/       → homepage hero slider backgrounds
     /public/images/services/   → one image per service (used on cards + detail pages)
     /public/images/gallery/    → "Our Works" showcase images

   >>> STATUS: Real 2U-branded photos are now in place for all services, the
       hero slider, and the gallery. To change any picture, replace the file at
       the path shown below (keep the same filename) — no code edit needed.

       Spare images also uploaded and available in /public/images/extras/ if you
       want to swap any in later: urban backgrounds, branded vehicle, café,
       office & home interiors, customer support/review shots.
   ============================================================================ */

// ---- HERO SLIDER (homepage) -------------------------------------------------
export const HERO_IMAGES = {
  main: "/images/hero/hero-main.jpg",
  carWash: "/images/hero/hero-car-wash.jpg",
  eventStaff: "/images/hero/hero-event-staff.jpg",
};

// ---- SERVICES (one per service, keyed by slug) ------------------------------
export const SERVICE_IMAGES: Record<string, string> = {
  "car-wash": "/images/services/car-wash.jpg",
  "move": "/images/services/move.jpg",
  "event-staff": "/images/services/event-staff.jpg",
  "pet-care": "/images/services/pet-care.jpg",
  "maintenance": "/images/services/maintenance.jpg",
  "h2o": "/images/services/h2o.jpg",
  "fruits": "/images/services/fruits.jpg",
  "firewood": "/images/services/firewood.jpg",
};

// ---- GALLERY / OUR WORKS ----------------------------------------------------
// Add or remove entries here as your real work photos come in.
export const GALLERY_IMAGES: { id: string; file: string; title: string; category: string }[] = [
  { id: "g1", file: "/images/gallery/work-01.jpg", title: "Full exterior & interior detail", category: "Car Wash 2 U" },
  { id: "g2", file: "/images/gallery/work-02.jpg", title: "Two-bed apartment move", category: "Move 2 U" },
  { id: "g3", file: "/images/gallery/work-03.jpg", title: "Corporate function, 6 staff", category: "Event Staff 2 U" },
  { id: "g4", file: "/images/gallery/work-04.jpg", title: "Weekend pet-sitting", category: "Pet Care 2 U" },
  { id: "g5", file: "/images/gallery/work-05.jpg", title: "Bathroom leak repair", category: "Maintenance 2 U" },
  { id: "g6", file: "/images/gallery/work-06.jpg", title: "Emergency water drop", category: "H2O 2 U" },
  { id: "g7", file: "/images/gallery/work-07.jpg", title: "Weekly office fruit baskets", category: "Fruits 2 U" },
  { id: "g8", file: "/images/gallery/work-08.jpg", title: "Full load, delivered & stacked", category: "Firewood 2 U" },
];
