import {
  Car,
  Truck,
  Wine,
  PawPrint,
  Wrench,
  Droplets,
  Apple,
  Flame,
  type LucideIcon,
} from "lucide-react";
import { SERVICE_IMAGES } from "./images";

export type FieldType = "text" | "textarea" | "date" | "number" | "select" | "toggle";

export interface ServiceField {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

export interface Service {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  Icon: LucideIcon;
  includes: string[];
  idealFor: string[];
  pricing: string;
  image: string;
  fields: ServiceField[];
}

// `fields` are the service-SPECIFIC extras shown only when that service is chosen.
// Core fields (name, phone, email, date, area, notes, photo) are always shown by the form.

export const SERVICES: Service[] = [
  {
    slug: "car-wash",
    name: "Car Wash 2 U",
    short: "Premium mobile car care, at your door.",
    tagline: "A showroom shine without leaving your driveway.",
    description:
      "Professional mobile car care that comes to your home or office. Exterior wash, interior detail, and finishing touches — we bring the water, products, and equipment so you don't lift a finger.",
    Icon: Car,
    includes: [
      "Exterior hand wash & dry",
      "Interior vacuum & wipe-down",
      "Tyre shine & window clean",
      "Optional wax & polish upgrade",
    ],
    idealFor: ["Busy professionals", "Fleet & family cars", "Pre-sale valet"],
    pricing: "Quote on request",
    image: SERVICE_IMAGES["car-wash"],
    fields: [
      {
        name: "vehicleType",
        label: "Vehicle type / size",
        type: "select",
        options: ["Hatchback", "Sedan", "SUV / 4x4", "Bakkie", "Minibus", "Other"],
        required: true,
      },
    ],
  },
  {
    slug: "move",
    name: "Move 2 U",
    short: "Professional moving assistants, on demand.",
    tagline: "Extra hands that show up ready to lift.",
    description:
      "Reliable moving assistants for house moves, office relocations, or single heavy items. Careful handling, on time, and as many hands as the job needs.",
    Icon: Truck,
    includes: [
      "Trained lifting assistants",
      "Careful wrapping & handling",
      "Loading & unloading",
      "Furniture reassembly help",
    ],
    idealFor: ["Home moves", "Office relocation", "Single heavy items"],
    pricing: "Quote on request",
    image: SERVICE_IMAGES["move"],
    fields: [
      { name: "pickup", label: "Pickup location", type: "text", placeholder: "Suburb / area", required: true },
      { name: "dropoff", label: "Drop-off location", type: "text", placeholder: "Suburb / area", required: true },
      {
        name: "loadSize",
        label: "Rough load size",
        type: "select",
        options: ["A few items", "1-bed flat", "2–3 bed house", "Office", "Not sure"],
        required: true,
      },
    ],
  },
  {
    slug: "event-staff",
    name: "Event Staff 2 U",
    short: "Rent a waiter, waitress or bartender.",
    tagline: "Polished service staff for your event.",
    description:
      "Experienced, presentable waiters, waitresses, and bartenders for private functions, parties, and corporate events. Booked by the hour, as many as you need.",
    Icon: Wine,
    includes: [
      "Uniformed, vetted staff",
      "Waiters & waitresses",
      "Professional bartenders",
      "Setup & pack-down support",
    ],
    idealFor: ["Private parties", "Weddings & functions", "Corporate events"],
    pricing: "Quote on request",
    image: SERVICE_IMAGES["event-staff"],
    fields: [
      { name: "eventDate", label: "Event date", type: "date", required: true },
      { name: "staffCount", label: "Number of staff", type: "number", placeholder: "e.g. 3", required: true },
      {
        name: "staffType",
        label: "Staff type",
        type: "select",
        options: ["Waiter / Waitress", "Bartender", "Mix of both"],
        required: true,
      },
      { name: "hours", label: "Hours needed", type: "number", placeholder: "e.g. 5", required: true },
    ],
  },
  {
    slug: "pet-care",
    name: "Pet Care 2 U",
    short: "Pet feeding & house-sitting while you're away.",
    tagline: "Peace of mind while you travel.",
    description:
      "Trustworthy pet feeding, walking, and house-sitting while you're away. Your pets stay in their own home, fed and cared for on schedule.",
    Icon: PawPrint,
    includes: [
      "Scheduled feeding & fresh water",
      "Dog walking on request",
      "Home check-ins",
      "Daily update messages",
    ],
    idealFor: ["Holidays & travel", "Work trips", "Long days out"],
    pricing: "Quote on request",
    image: SERVICE_IMAGES["pet-care"],
    fields: [
      { name: "petType", label: "Pet type & number", type: "text", placeholder: "e.g. 2 dogs, 1 cat", required: true },
      { name: "startDate", label: "Start date", type: "date", required: true },
      { name: "endDate", label: "End date", type: "date", required: true },
    ],
  },
  {
    slug: "maintenance",
    name: "Maintenance 2 U",
    short: "Basic home maintenance & repairs.",
    tagline: "The small jobs, sorted.",
    description:
      "Handyman help for the jobs that pile up — leaks, fittings, mounting, small repairs. Tell us the problem, send a photo, and we'll come prepared.",
    Icon: Wrench,
    includes: [
      "General repairs & fixes",
      "Mounting & installation",
      "Basic plumbing & electrical",
      "Odd jobs around the home",
    ],
    idealFor: ["Home repairs", "Rentals & move-outs", "Quick fixes"],
    pricing: "Quote on request",
    image: SERVICE_IMAGES["maintenance"],
    fields: [
      {
        name: "problem",
        label: "Describe the problem",
        type: "textarea",
        placeholder: "What needs fixing? A photo helps — attach one below.",
        required: true,
      },
    ],
  },
  {
    slug: "h2o",
    name: "H2O 2 U",
    short: "Emergency water delivery.",
    tagline: "Water when you need it most.",
    description:
      "Fast, reliable water delivery during outages and shortages. Flag it urgent and we'll prioritise getting clean water to your door.",
    Icon: Droplets,
    includes: [
      "Bulk & container delivery",
      "Emergency priority option",
      "Homes & businesses",
      "Reliable during outages",
    ],
    idealFor: ["Water outages", "Events", "Businesses"],
    pricing: "Quote on request",
    image: SERVICE_IMAGES["h2o"],
    fields: [
      { name: "quantity", label: "Quantity needed", type: "text", placeholder: "e.g. 5 × 25L", required: true },
      { name: "urgent", label: "This is urgent (emergency)", type: "toggle" },
    ],
  },
  {
    slug: "fruits",
    name: "Fruits 2 U",
    short: "Weekly fresh fruit basket delivery.",
    tagline: "Fresh fruit, delivered on repeat.",
    description:
      "Seasonal fruit baskets delivered to your home or office. Order a one-off or set it to recur weekly and keep the bowl full.",
    Icon: Apple,
    includes: [
      "Hand-picked seasonal fruit",
      "Home or office delivery",
      "One-off or weekly",
      "Flexible basket sizes",
    ],
    idealFor: ["Offices", "Health-conscious homes", "Gifts"],
    pricing: "Quote on request",
    image: SERVICE_IMAGES["fruits"],
    fields: [
      {
        name: "basketSize",
        label: "Basket size",
        type: "select",
        options: ["Small", "Medium", "Large", "Office (bulk)"],
        required: true,
      },
      { name: "recurring", label: "Deliver weekly (recurring)", type: "toggle" },
    ],
  },
  {
    slug: "firewood",
    name: "Firewood 2 U",
    short: "Quality hardwood, delivered.",
    tagline: "Seasoned hardwood at your door.",
    description:
      "Quality seasoned hardwood delivered and stacked. Perfect for braais, fireplaces, and cold nights — order by the load.",
    Icon: Flame,
    includes: [
      "Seasoned hardwood",
      "Delivered & stacked",
      "Braai & fireplace ready",
      "Bulk loads available",
    ],
    idealFor: ["Braais", "Fireplaces", "Restaurants & lodges"],
    pricing: "Quote on request",
    image: SERVICE_IMAGES["firewood"],
    fields: [
      {
        name: "quantity",
        label: "Quantity / load size",
        type: "select",
        options: ["Small bag", "Half load", "Full load", "Bulk / recurring"],
        required: true,
      },
      { name: "deliveryArea", label: "Delivery area", type: "text", placeholder: "Suburb / area", required: true },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
