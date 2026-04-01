import type { ArchiveItem, SelectedPiece } from "./types";

export const archiveItems: ArchiveItem[] = [
  // 2025
  {
    id: "v1",
    type: "video",
    title: "The On-Demand Economy and the Future of Executive Talent",
    description:
      "Jody joins CNN to discuss how BTG is reshaping how companies access top-tier independent talent — and what that means for the workforce of the future.",
    publication: "CNN",
    category: "Future of Work",
    year: 2025,
    date: "2025-02-18",
    youtubeId: "dQw4w9WgXcQ",
    featured: true,
  },
  {
    id: "a1",
    type: "article",
    title: "Why the Best Executives Are Going Independent",
    description:
      "The shift from corporate careers to independent consulting isn't a trend — it's a structural transformation that companies can no longer afford to ignore.",
    publication: "Harvard Business Review",
    category: "Future of Work",
    year: 2025,
    date: "2025-01-14",
    externalUrl: "#",
    featured: true,
  },
  {
    id: "p1",
    type: "podcast",
    title: "Building BTG: The Story Behind the On-Demand Talent Marketplace",
    description:
      "Jody tells the unfiltered story of co-founding Business Talent Group — the pivots, the early skeptics, and the moment she knew it would work.",
    show: "How I Built This",
    category: "Entrepreneurship",
    year: 2025,
    date: "2025-01-07",
    embedUrl: "https://open.spotify.com/embed/episode/placeholder",
    duration: "52 min",
    featured: true,
  },

  // 2024
  {
    id: "a2",
    type: "article",
    title: "The Case for Flexible Leadership at the Top",
    description:
      "As organizations face relentless uncertainty, the rigid permanent hire is giving way to a more adaptive model — and the C-suite is not immune.",
    publication: "The Wall Street Journal",
    category: "Leadership",
    year: 2024,
    date: "2024-11-20",
    externalUrl: "#",
  },
  {
    id: "a3",
    type: "article",
    title: "Female Founders and the Persistent Funding Gap",
    description:
      "Despite record-breaking strides, women-led businesses still face systemic barriers to capital — and the numbers reveal just how wide that gap remains.",
    publication: "Forbes",
    category: "Women in Business",
    year: 2024,
    date: "2024-09-11",
    externalUrl: "#",
  },
  {
    id: "v2",
    type: "video",
    title: "Rethinking Talent Acquisition for the 2020s",
    description:
      "On Bloomberg TV, Jody breaks down why traditional hiring models are failing modern companies — and what the alternatives look like.",
    publication: "Bloomberg",
    category: "Future of Work",
    year: 2024,
    date: "2024-08-28",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "p2",
    type: "podcast",
    title: "Leading Through Uncertainty",
    description:
      "Jody discusses frameworks for making decisions when the data is incomplete and the stakes are high — lessons drawn from two decades of building companies.",
    show: "Masters of Scale",
    category: "Leadership",
    year: 2024,
    date: "2024-07-15",
    embedUrl: "https://open.spotify.com/embed/episode/placeholder",
    duration: "44 min",
  },
  {
    id: "a4",
    type: "article",
    title: "What 25 Years of Building Companies Taught Me About Failure",
    description:
      "The most important lessons aren't the ones you learn from success. A reflection on the pivots, wrong turns, and costly mistakes that ultimately made BTG possible.",
    publication: "Inc. Magazine",
    category: "Entrepreneurship",
    year: 2024,
    date: "2024-06-02",
    externalUrl: "#",
  },
  {
    id: "a5",
    type: "article",
    title: "The Boardroom Is Not Ready for the Future of Work",
    description:
      "Corporate boards are still operating on assumptions about talent and hierarchy that no longer reflect how work actually gets done.",
    publication: "Fortune",
    category: "Business Strategy",
    year: 2024,
    date: "2024-04-17",
    externalUrl: "#",
  },
  {
    id: "p3",
    type: "podcast",
    title: "The Power of Networks in the Independent Economy",
    description:
      "Why strategic relationships are more valuable than any single deal — and how to build them with authenticity in an era of transactional networking.",
    show: "The Tim Ferriss Show",
    category: "Entrepreneurship",
    year: 2024,
    date: "2024-03-04",
    embedUrl: "https://open.spotify.com/embed/episode/placeholder",
    duration: "1h 12 min",
  },

  // 2023
  {
    id: "a6",
    type: "article",
    title: "The Myth of the Permanent Employee",
    description:
      "We've built our entire talent infrastructure around a model of employment that was invented in the industrial age. It's time to question the premise.",
    publication: "Harvard Business Review",
    category: "Future of Work",
    year: 2023,
    date: "2023-11-08",
    externalUrl: "#",
  },
  {
    id: "v3",
    type: "video",
    title: "Jody Greenstone Miller on the Next Chapter of BTG",
    description:
      "A candid conversation on CNBC about scaling a marketplace business, navigating the post-pandemic talent market, and what's next for Business Talent Group.",
    publication: "CNBC",
    category: "Entrepreneurship",
    year: 2023,
    date: "2023-09-21",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "a7",
    type: "article",
    title: "Board Diversity Is Not Enough. We Need Board Expertise.",
    description:
      "Progress on diversity in boardrooms is real but insufficient. The next frontier is bringing in directors who actually understand the industries they oversee.",
    publication: "The New York Times",
    category: "Leadership",
    year: 2023,
    date: "2023-07-30",
    externalUrl: "#",
  },
  {
    id: "p4",
    type: "podcast",
    title: "Work, Redefined",
    description:
      "Jody joins Adam Grant to discuss how the meaning of work is shifting — and what leaders need to understand about a workforce that is rethinking everything.",
    show: "WorkLife with Adam Grant",
    category: "Future of Work",
    year: 2023,
    date: "2023-05-16",
    embedUrl: "https://open.spotify.com/embed/episode/placeholder",
    duration: "38 min",
  },
  {
    id: "a8",
    type: "article",
    title:
      "Scaling with Purpose: How Not to Lose Your Company While Growing It",
    description:
      "Growth is the goal, but most founders fail to preserve the culture and clarity that made their company worth scaling in the first place.",
    publication: "Fast Company",
    category: "Business Strategy",
    year: 2023,
    date: "2023-03-22",
    externalUrl: "#",
  },

  // 2022
  {
    id: "a9",
    type: "article",
    title: "The Return-to-Office Debate Is Missing the Point",
    description:
      "The real question isn't where people work — it's how leaders can rebuild trust and performance in a world where the old rules no longer apply.",
    publication: "The Wall Street Journal",
    category: "Future of Work",
    year: 2022,
    date: "2022-10-12",
    externalUrl: "#",
  },
  {
    id: "v4",
    type: "video",
    title: "Women, Leadership, and the Path to the Top",
    description:
      "A TEDx talk on the structural and cultural barriers that still prevent talented women from reaching senior leadership — and what organizations must do differently.",
    publication: "TEDx",
    category: "Women in Business",
    year: 2022,
    date: "2022-06-08",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "a10",
    type: "article",
    title: "Why Every Company Needs a Talent Marketplace Strategy",
    description:
      "Access to talent is increasingly the limiting factor for growth. Companies that fail to build flexible talent pipelines will find themselves outcompeted by those that do.",
    publication: "Bloomberg Businessweek",
    category: "Business Strategy",
    year: 2022,
    date: "2022-04-19",
    externalUrl: "#",
  },

  // 2021
  {
    id: "a11",
    type: "article",
    title: "The Great Resignation Was Never About Work-Life Balance",
    description:
      "Millions left their jobs not for more flexibility but for more meaning. Understanding why is the only way leaders can begin to respond.",
    publication: "Harvard Business Review",
    category: "Future of Work",
    year: 2021,
    date: "2021-11-03",
    externalUrl: "#",
  },
  {
    id: "p5",
    type: "podcast",
    title: "On-Demand Talent and the Post-Pandemic Organization",
    description:
      "How the pandemic accelerated a decade's worth of change in how companies think about their workforce — and what the talent marketplace model offers as an answer.",
    show: "Acquired",
    category: "Future of Work",
    year: 2021,
    date: "2021-08-25",
    embedUrl: "https://open.spotify.com/embed/episode/placeholder",
    duration: "1h 24 min",
  },
  {
    id: "a12",
    type: "article",
    title: "Entrepreneurship After 40: The Advantage Nobody Talks About",
    description:
      "Most startup mythology celebrates youth. But the compounding returns of experience, network, and pattern recognition give older founders a durable edge.",
    publication: "Inc. Magazine",
    category: "Entrepreneurship",
    year: 2021,
    date: "2021-05-14",
    externalUrl: "#",
  },

  // 2020
  {
    id: "a13",
    type: "article",
    title: "Crisis Leadership: What the Best CEOs Did Differently in 2020",
    description:
      "The pandemic was a forcing function that separated leaders who lead from those who managed. Here's what distinguished the two.",
    publication: "Fortune",
    category: "Leadership",
    year: 2020,
    date: "2020-12-08",
    externalUrl: "#",
  },
  {
    id: "v5",
    type: "video",
    title: "The Independent Workforce: A Silver Lining of the Pandemic",
    description:
      "In this CNN segment, Jody argues that the disruption of 2020 permanently expanded the pool of high-end independent talent available to companies.",
    publication: "CNN",
    category: "Future of Work",
    year: 2020,
    date: "2020-09-17",
    youtubeId: "dQw4w9WgXcQ",
  },
];

export const selectedPieces: SelectedPiece[] = [
  {
    id: "sp1",
    title: "Why the Best Executives Are Going Independent",
    publication: "Harvard Business Review",
    year: 2025,
    personalIntro:
      "This piece captures what I've been seeing at BTG for over a decade — the quiet exodus of exceptional talent from the corporate ladder toward independence. I wrote this because I wanted to put data behind what our own experience had already confirmed.",
    externalUrl: "#",
  },
  {
    id: "sp2",
    title: "The Myth of the Permanent Employee",
    publication: "Harvard Business Review",
    year: 2023,
    personalIntro:
      "I've been making this argument in boardrooms for years. When HBR gave me the space to make it in full, I tried to write something that would actually challenge how executives think about the structure of their workforce — not just the perks they offer.",
    externalUrl: "#",
    pdfUrl: "#",
  },
  {
    id: "sp3",
    title: "Female Founders and the Persistent Funding Gap",
    publication: "Forbes",
    year: 2024,
    personalIntro:
      "The numbers in this piece frustrated and motivated me in equal measure. The gap is real, it is measurable, and the excuses for it have long since expired. I hope this piece makes it harder to look away.",
    externalUrl: "#",
  },
  {
    id: "sp4",
    title: "The Great Resignation Was Never About Work-Life Balance",
    publication: "Harvard Business Review",
    year: 2021,
    personalIntro:
      "When the Great Resignation conversation started dominating every leadership forum, I felt like something essential was being missed. This is my attempt to say what I actually think was happening — and what leaders got wrong in their response.",
    externalUrl: "#",
    pdfUrl: "#",
  },
  {
    id: "sp5",
    title: "What 25 Years of Building Companies Taught Me About Failure",
    publication: "Inc. Magazine",
    year: 2024,
    personalIntro:
      "Writing this piece was genuinely uncomfortable. Talking about success is easy. Talking honestly about the decisions I got wrong, the hires I shouldn't have made, the pivots I made too late — that required a different kind of honesty. I'm glad I did it.",
    externalUrl: "#",
  },
  {
    id: "sp6",
    title: "Crisis Leadership: What the Best CEOs Did Differently in 2020",
    publication: "Fortune",
    year: 2020,
    personalIntro:
      "I was watching leaders navigate 2020 in real time — many of them BTG clients. The contrast between those who rose and those who faltered was striking and instructive. I wrote this while the wound was still fresh.",
    externalUrl: "#",
    pdfUrl: "#",
  },
];

export const featuredItems = archiveItems.filter((item) => item.featured);

export const latestItems = [...archiveItems]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 4);
