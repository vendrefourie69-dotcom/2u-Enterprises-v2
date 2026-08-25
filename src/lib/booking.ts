import { SITE } from "./site";
import type { Service } from "@/data/services";

export interface BookingCore {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  area: string;
  details: string;
}

// Builds a readable request message from core + service-specific fields.
export function buildMessage(
  service: Service,
  core: BookingCore,
  extras: Record<string, string | boolean>
): string {
  const lines: string[] = [];
  lines.push(`New booking request — ${service.name}`);
  lines.push("");
  lines.push(`Name: ${core.name}`);
  lines.push(`Phone: ${core.phone}`);
  lines.push(`Email: ${core.email}`);
  if (core.area) lines.push(`Area / address: ${core.area}`);
  if (core.preferredDate) lines.push(`Preferred date/time: ${core.preferredDate}`);

  const extraEntries = Object.entries(extras).filter(([, v]) => v !== "" && v !== false);
  if (extraEntries.length) {
    lines.push("");
    lines.push(`— ${service.name} details —`);
    for (const [key, value] of extraEntries) {
      const field = service.fields.find((f) => f.name === key);
      const label = field?.label ?? key;
      lines.push(`${label}: ${value === true ? "Yes" : value}`);
    }
  }

  if (core.details) {
    lines.push("");
    lines.push(`Notes: ${core.details}`);
  }

  return lines.join("\n");
}

export function whatsappUrl(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailtoUrl(service: Service, message: string): string {
  const subject = `Booking request — ${service.name}`;
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
}
