export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  body: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-on-demand-services-save-you-time",
    title: "Why on-demand services are the smartest way to buy back your time",
    category: "Lifestyle",
    excerpt: "The real cost of a chore isn't the money — it's the hours. Here's how bringing services to your door changes the maths.",
    date: "2026-02-10",
    body: [
      "Every errand has a hidden price tag: the drive there, the queue, the drive back. On their own they seem small. Stacked across a week, they quietly eat a whole afternoon.",
      "On-demand services flip that. Instead of you going to the service, the service comes to you — which means the only time you spend is the minute it takes to send a request.",
      "That's the whole idea behind 2U Enterprises. Whether it's a mobile car wash while you work, firewood dropped and stacked, or extra hands on moving day, the goal is the same: give you your hours back.",
      "Start with the chore you dread most this week. Send one request, and let us come 2 u.",
    ],
  },
  {
    slug: "how-to-prep-for-a-mobile-car-wash",
    title: "How to prep for a mobile car wash (it's easier than you think)",
    category: "Car Wash 2 U",
    excerpt: "A few small things make your mobile wash faster and better. None of them take more than a minute.",
    date: "2026-01-28",
    body: [
      "A mobile car wash comes fully equipped — water, products, and equipment included. But a little prep gets you an even better result.",
      "Clear personal items from the seats and boot so the team can reach every surface. Park somewhere with a bit of space around the car, ideally in shade. And if there's a specific stain or spot you want handled, mention it in your booking notes.",
      "That's genuinely it. Send the request, tell us where you'll be, and we'll bring the shine 2 u.",
    ],
  },
  {
    slug: "planning-an-event-how-many-staff",
    title: "Planning an event? Here's how many staff you actually need",
    category: "Event Staff 2 U",
    excerpt: "A quick rule of thumb for waiters and bartenders, so your guests are never left waiting.",
    date: "2026-01-15",
    body: [
      "The most common event-staffing mistake is under-booking. Guests end up queuing at the bar and food service drags.",
      "As a rough guide: one waiter per 15–20 guests for a seated meal, and one bartender per 40–50 guests for drinks. Bump those up for formal or fast-paced events.",
      "Not sure? Tell us your guest count and event type in a booking request, and we'll recommend the right number before you commit.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
