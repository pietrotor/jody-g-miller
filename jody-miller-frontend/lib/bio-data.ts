/**
 * Source-of-truth data for Jody's bio, shared between the website bio page
 * (`app/about/bio/page.tsx`) and the generated press PDF
 * (`app/api/press-bio/route.ts`).
 *
 * This mirrors what the public site already displays today. If Strapi becomes
 * the canonical source for any of these fields, prefer the Strapi value and
 * use the constants here only as fallbacks.
 */

export interface IBioStat {
  end: number;
  start: number;
  suffix: string;
  label: string;
  duration: number;
}

export interface IBioExperience {
  id: string;
  org: string;
  role: string;
  period: string;
  type: string;
  description: string;
}

export interface IBioEducation {
  degree: string;
  institution: string;
}

export interface IBioSpeakingTopic {
  title: string;
  description: string;
}

export const BIO_STATS: IBioStat[] = [
  { end: 18, start: 0, suffix: "+", label: "Years at BTG", duration: 2.2 },
  { end: 200, start: 120, suffix: "+", label: "Published Articles", duration: 2.5 },
  { end: 50, start: 0, suffix: "+", label: "Board & Advisory Roles", duration: 2.0 },
];

export const BIO_EXPERIENCE: IBioExperience[] = [
  {
    id: "btg",
    org: "Business Talent Group (BTG)",
    role: "Co-Founder & CEO",
    period: "2007 — 2022",
    type: "Entrepreneurial",
    description:
      "Built the leading marketplace for high-end, on-demand executive talent. Under Jody's leadership, BTG completed thousands of engagements for Fortune 500 companies, private equity firms, and high-growth startups — and pioneered the concept of the independent executive.",
  },
  {
    id: "americast",
    org: "Americast",
    role: "Acting President & COO",
    period: "2001 — 2007",
    type: "Executive",
    description:
      "Led day-to-day operations of a digital video venture formed by major U.S. media companies, managing both the strategic and operational dimensions of the business.",
  },
  {
    id: "maverick",
    org: "Maverick Records",
    role: "Executive Vice President",
    period: "1999 — 2001",
    type: "Executive",
    description:
      "Senior executive at the artist-founded record label, working across business development, strategy, and operations during a transformative period in the music industry.",
  },
  {
    id: "whitehouse",
    org: "The White House",
    role: "Chief of Staff, Office of the Vice President",
    period: "1993 — 1997",
    type: "Government",
    description:
      "Served during the Clinton Administration, working directly with senior White House leadership on domestic and foreign policy initiatives. A formative experience in how consequential decisions are made under pressure.",
  },
  {
    id: "urbaninstitute",
    org: "The Urban Institute",
    role: "Board Member",
    period: "Current",
    type: "Non-Profit & Civic",
    description:
      "Providing strategic guidance to one of the country's leading economic and social policy research organizations, focused on equity, housing, and workforce development.",
  },
  {
    id: "hrw",
    org: "Human Rights Watch",
    role: "Advisory Contributor",
    period: "Current",
    type: "Non-Profit & Civic",
    description:
      "Active contributor to one of the world's leading independent organizations dedicated to defending and protecting human rights.",
  },
];

export const BIO_EDUCATION: IBioEducation[] = [
  { degree: "B.A.", institution: "Brown University" },
  { degree: "J.D.", institution: "Northwestern University School of Law" },
];

export const BIO_HEADLINE_FALLBACK = "Redefining the way the world works.";

export const BIO_POSITIONING =
  "Founder & Chair, Business Talent Group — pioneer of the on-demand executive economy.";

export const BIO_BIOGRAPHY_FALLBACK = [
  "Jody Greenstone Miller is the Founder and Chair of Business Talent Group (BTG), the leading marketplace for high-end, on-demand executive talent. She is a recognized voice on the \"on-demand\" economy and the future of work, whose insights have shaped how modern corporations leverage independent talent to solve their most complex challenges.",
  "Under her leadership, BTG completed thousands of engagements for Fortune 500 companies, private equity firms, and high-growth startups, and pioneered the concept of the independent executive — bridging traditional labor models and the agile workforce of tomorrow.",
  "Previously, Jody served as Chief of Staff at the Office of the Vice President during the Clinton Administration, and held senior executive roles across media (Americast, Maverick Records), law, and policy. She currently serves on the board of The Urban Institute and is an advisory contributor to Human Rights Watch.",
  "A frequent speaker and contributor to major business publications — including Harvard Business Review, The Wall Street Journal, and CNN — she holds a B.A. from Brown University and a J.D. from Northwestern University School of Law.",
].join("\n\n");

export const BIO_MEDIA_CREDENTIALS: string[] = [
  "Harvard Business Review",
  "The Wall Street Journal",
  "CNN",
  "Bloomberg",
  "Fortune",
];

export const BIO_SPEAKING_TOPICS_FALLBACK: IBioSpeakingTopic[] = [
  {
    title: "The Future of Work & the On-Demand Executive Economy",
    description:
      "How the rise of high-end independent talent is reshaping corporate strategy, workforce design, and the very definition of a career — and what leaders must rethink to stay ahead.",
  },
  {
    title: "Building a Category: The BTG Story",
    description:
      "Lessons from founding and scaling a marketplace in a space that didn't yet exist — pivots, early skepticism, and the moment the model became inevitable.",
  },
  {
    title: "Leadership Across Transformation",
    description:
      "A career that spans government, media, and technology — a perspective on how consequential decisions are made, and how the best leaders adapt when the ground keeps moving.",
  },
  {
    title: "The Agile Enterprise",
    description:
      "Why the largest, most capable organizations are embracing flexible talent at the top, and the operating models that make it work at scale.",
  },
];

export const BIO_ADVISORY_AREAS_FALLBACK: string[] = [
  "Platform and marketplace companies in professional services and knowledge work",
  "Workforce transformation at Fortune 500 scale",
  "Founders and executive teams navigating periods of rapid growth",
  "Boards modernizing their talent and governance strategy",
];

export const BIO_CONTACT = {
  website: "jodygreenstonemiller.com",
  path: "/contact",
};
