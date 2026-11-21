// Everything a non-developer may want to change lives here.

/** Where the waiting-list form sends sign-ups (the Relationships app). */
export const WAITLIST_ENDPOINT =
  process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT || "https://relationships.better1440.com/api/waitlist";

export type Status = "ready" | "beta" | "soon";

export const STATUS_LABEL: Record<Status, string> = {
  ready: "Ready for subscribers",
  beta: "Beta",
  soon: "Coming soon",
};

export interface App {
  id: string;
  name: string;
  status: Status;
  headline: string;
  body: string;
  points: string[];
  /** YouTube video id for the app's video; null shows a placeholder. */
  video: { id: string; title: string } | null;
  price?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  /** Shows the waiting-list form, tagged with this source. */
  waitlist?: { source: string; cta: string; done: string };
}

export const APPS: App[] = [
  {
    id: "analyze",
    name: "Analyze",
    status: "ready",
    headline: "Every offer, read and compared in minutes.",
    body:
      "Upload the purchase contracts you receive. Analyze pulls out every term, flags what to watch, estimates your seller's net on each offer, and builds a report you can put in front of your seller.",
    points: [
      "Reads the whole packet, with a jump to each term's page",
      "Flags missing pre-approvals, long inspection windows and unsigned pages",
      "Estimates what your seller keeps from each offer",
      "A seller-ready PDF with your logo and contact details",
    ],
    video: { id: "wXi0bzE5zDs", title: "Stop Reading Offers by Hand | Better1440 Analyze for Listing Agents" },
    price: "Start free, then $39 a month.",
    primary: { label: "Start free", href: "https://analyze.better1440.com/sign-up" },
    secondary: { label: "See pricing", href: "https://analyze.better1440.com/pricing" },
  },
  {
    id: "launch5",
    name: "Launch5",
    status: "beta",
    headline: "Every transaction, from the first signature to closing day.",
    body:
      "Launch5 manages the whole transaction, starting when the paperwork is first signed. The loop opens in Dotloop, the accepted offer comes over from Analyze with every Key Date filled in, deadline confirmations go to the lender and title by email, and nothing is dropped on the way to closing.",
    points: [
      "Starts at signing: the loop and contacts set up in Dotloop",
      "Key Dates set from the accepted offer",
      "One-click confirmation emails for every deadline",
      "Contacts kept in sync with Dotloop in both directions",
      "Includes Analyze",
    ],
    video: null,
    waitlist: {
      source: "launch5-beta",
      cta: "Ask to join the beta",
      done: "Thanks. We'll email you when a beta spot opens.",
    },
    secondary: { label: "Beta testers: sign in", href: "https://launch.garnerteam.com" },
  },
  {
    id: "relationships",
    name: "Relationships",
    status: "soon",
    headline: "A short list each morning of people worth reaching out to, and why.",
    body:
      "Birthdays, wedding and home anniversaries, a child turning 18: Relationships turns what you know about past clients into a few reasons to reach out today, each with a message drafted and ready. Nothing is ever sent for you.",
    points: [
      "Built around households, not single contacts",
      "Every home a family has bought or sold, kept over time",
      "Text, email or copy the drafted message",
      "Open house sign-in by QR code",
    ],
    video: null,
    waitlist: {
      source: "relationships",
      cta: "Join the waiting list",
      done: "You're on the list. We'll email you when Relationships opens.",
    },
  },
];

/** Other Better1440 apps, shown without links until they open. */
export const MORE = [
  { name: "On the Bump", body: "Baseball pitch tracking." },
  { name: "Shopping", body: "Details soon." },
];

export const LEGAL = {
  terms: "https://analyze.better1440.com/terms",
  privacy: "https://analyze.better1440.com/privacy",
  signIn: "https://analyze.better1440.com/sign-in",
};
