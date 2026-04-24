/**
 * Seeds Strapi with the hardcoded content from the frontend.
 * Run with: node scripts/seed.mjs
 * Strapi must be running at localhost:1337
 */

const STRAPI_URL = "http://localhost:1337";

async function api(method, path, body) {
  const res = await fetch(`${STRAPI_URL}/api${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify({ data: body }) : undefined,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${method} ${path} → ${res.status}: ${text}`);
  }
  return res.json();
}

// ── Categories ─────────────────────────────────────────────────────────

const CATEGORIES = [
  "Business Strategy",
  "Entrepreneurship",
  "Future of Work",
  "Leadership",
  "Women in Business",
];

async function seedCategories() {
  const map = new Map();

  for (const name of CATEGORIES) {
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    try {
      const res = await api("POST", "/categories", { name, slug });
      map.set(name, res.data.id);
      console.log(`  ✓ Category: ${name}`);
    } catch {
      const existing = await fetch(
        `${STRAPI_URL}/api/categories?filters[name][$eq]=${encodeURIComponent(name)}`,
      );
      const data = await existing.json();
      if (data.data?.[0]) {
        map.set(name, data.data[0].id);
        console.log(`  → Category exists: ${name}`);
      }
    }
  }

  return map;
}

// ── Archive Items ──────────────────────────────────────────────────────

const ARCHIVE_ITEMS = [
  { title: "The On-Demand Economy and the Future of Executive Talent", type: "video", year: 2025, description: "Jody joins CNN to discuss how BTG is reshaping how companies access top-tier independent talent — and what that means for the workforce of the future.", source: "CNN", category: "Future of Work", publishedDate: "2025-02-18", youtubeId: "dQw4w9WgXcQ", featured: true },
  { title: "Why the Best Executives Are Going Independent", type: "article", year: 2025, description: "The shift from corporate careers to independent consulting isn't a trend — it's a structural transformation that companies can no longer afford to ignore.", source: "Harvard Business Review", category: "Future of Work", publishedDate: "2025-01-14", externalUrl: "#", featured: true },
  { title: "Building BTG: The Story Behind the On-Demand Talent Marketplace", type: "podcast", year: 2025, description: "Jody tells the unfiltered story of co-founding Business Talent Group — the pivots, the early skeptics, and the moment she knew it would work.", source: "How I Built This", category: "Entrepreneurship", publishedDate: "2025-01-07", embedUrl: "https://open.spotify.com/embed/episode/placeholder", duration: "52 min", featured: true },
  { title: "The Case for Flexible Leadership at the Top", type: "article", year: 2024, description: "As organizations face relentless uncertainty, the rigid permanent hire is giving way to a more adaptive model — and the C-suite is not immune.", source: "The Wall Street Journal", category: "Leadership", publishedDate: "2024-11-20", externalUrl: "#", featured: false },
  { title: "Female Founders and the Persistent Funding Gap", type: "article", year: 2024, description: "Despite record-breaking strides, women-led businesses still face systemic barriers to capital — and the numbers reveal just how wide that gap remains.", source: "Forbes", category: "Women in Business", publishedDate: "2024-09-11", externalUrl: "#", featured: false },
  { title: "Rethinking Talent Acquisition for the 2020s", type: "video", year: 2024, description: "On Bloomberg TV, Jody breaks down why traditional hiring models are failing modern companies — and what the alternatives look like.", source: "Bloomberg", category: "Future of Work", publishedDate: "2024-08-28", youtubeId: "dQw4w9WgXcQ", featured: false },
  { title: "Leading Through Uncertainty", type: "podcast", year: 2024, description: "Jody discusses frameworks for making decisions when the data is incomplete and the stakes are high — lessons drawn from two decades of building companies.", source: "Masters of Scale", category: "Leadership", publishedDate: "2024-07-15", embedUrl: "https://open.spotify.com/embed/episode/placeholder", duration: "44 min", featured: false },
  { title: "What 25 Years of Building Companies Taught Me About Failure", type: "article", year: 2024, description: "The most important lessons aren't the ones you learn from success. A reflection on the pivots, wrong turns, and costly mistakes that ultimately made BTG possible.", source: "Inc. Magazine", category: "Entrepreneurship", publishedDate: "2024-06-02", externalUrl: "#", featured: false },
  { title: "The Boardroom Is Not Ready for the Future of Work", type: "article", year: 2024, description: "Corporate boards are still operating on assumptions about talent and hierarchy that no longer reflect how work actually gets done.", source: "Fortune", category: "Business Strategy", publishedDate: "2024-04-17", externalUrl: "#", featured: false },
  { title: "The Power of Networks in the Independent Economy", type: "podcast", year: 2024, description: "Why strategic relationships are more valuable than any single deal — and how to build them with authenticity in an era of transactional networking.", source: "The Tim Ferriss Show", category: "Entrepreneurship", publishedDate: "2024-03-04", embedUrl: "https://open.spotify.com/embed/episode/placeholder", duration: "1h 12 min", featured: false },
  { title: "The Myth of the Permanent Employee", type: "article", year: 2023, description: "We've built our entire talent infrastructure around a model of employment that was invented in the industrial age. It's time to question the premise.", source: "Harvard Business Review", category: "Future of Work", publishedDate: "2023-11-08", externalUrl: "#", featured: false },
  { title: "Jody Greenstone Miller on the Next Chapter of BTG", type: "video", year: 2023, description: "A candid conversation on CNBC about scaling a marketplace business, navigating the post-pandemic talent market, and what's next for Business Talent Group.", source: "CNBC", category: "Entrepreneurship", publishedDate: "2023-09-21", youtubeId: "dQw4w9WgXcQ", featured: false },
  { title: "Board Diversity Is Not Enough. We Need Board Expertise.", type: "article", year: 2023, description: "Progress on diversity in boardrooms is real but insufficient. The next frontier is bringing in directors who actually understand the industries they oversee.", source: "The New York Times", category: "Leadership", publishedDate: "2023-07-30", externalUrl: "#", featured: false },
  { title: "Work, Redefined", type: "podcast", year: 2023, description: "Jody joins Adam Grant to discuss how the meaning of work is shifting — and what leaders need to understand about a workforce that is rethinking everything.", source: "WorkLife with Adam Grant", category: "Future of Work", publishedDate: "2023-05-16", embedUrl: "https://open.spotify.com/embed/episode/placeholder", duration: "38 min", featured: false },
  { title: "Scaling with Purpose: How Not to Lose Your Company While Growing It", type: "article", year: 2023, description: "Growth is the goal, but most founders fail to preserve the culture and clarity that made their company worth scaling in the first place.", source: "Fast Company", category: "Business Strategy", publishedDate: "2023-03-22", externalUrl: "#", featured: false },
  { title: "The Return-to-Office Debate Is Missing the Point", type: "article", year: 2022, description: "The real question isn't where people work — it's how leaders can rebuild trust and performance in a world where the old rules no longer apply.", source: "The Wall Street Journal", category: "Future of Work", publishedDate: "2022-10-12", externalUrl: "#", featured: false },
  { title: "Women, Leadership, and the Path to the Top", type: "video", year: 2022, description: "A TEDx talk on the structural and cultural barriers that still prevent talented women from reaching senior leadership — and what organizations must do differently.", source: "TEDx", category: "Women in Business", publishedDate: "2022-06-08", youtubeId: "dQw4w9WgXcQ", featured: false },
  { title: "Why Every Company Needs a Talent Marketplace Strategy", type: "article", year: 2022, description: "Access to talent is increasingly the limiting factor for growth. Companies that fail to build flexible talent pipelines will find themselves outcompeted by those that do.", source: "Bloomberg Businessweek", category: "Business Strategy", publishedDate: "2022-04-19", externalUrl: "#", featured: false },
  { title: "The Great Resignation Was Never About Work-Life Balance", type: "article", year: 2021, description: "Millions left their jobs not for more flexibility but for more meaning. Understanding why is the only way leaders can begin to respond.", source: "Harvard Business Review", category: "Future of Work", publishedDate: "2021-11-03", externalUrl: "#", featured: false },
  { title: "On-Demand Talent and the Post-Pandemic Organization", type: "podcast", year: 2021, description: "How the pandemic accelerated a decade's worth of change in how companies think about their workforce — and what the talent marketplace model offers as an answer.", source: "Acquired", category: "Future of Work", publishedDate: "2021-08-25", embedUrl: "https://open.spotify.com/embed/episode/placeholder", duration: "1h 24 min", featured: false },
  { title: "Entrepreneurship After 40: The Advantage Nobody Talks About", type: "article", year: 2021, description: "Most startup mythology celebrates youth. But the compounding returns of experience, network, and pattern recognition give older founders a durable edge.", source: "Inc. Magazine", category: "Entrepreneurship", publishedDate: "2021-05-14", externalUrl: "#", featured: false },
  { title: "Crisis Leadership: What the Best CEOs Did Differently in 2020", type: "article", year: 2020, description: "The pandemic was a forcing function that separated leaders who lead from those who managed. Here's what distinguished the two.", source: "Fortune", category: "Leadership", publishedDate: "2020-12-08", externalUrl: "#", featured: false },
  { title: "The Independent Workforce: A Silver Lining of the Pandemic", type: "video", year: 2020, description: "In this CNN segment, Jody argues that the disruption of 2020 permanently expanded the pool of high-end independent talent available to companies.", source: "CNN", category: "Future of Work", publishedDate: "2020-09-17", youtubeId: "dQw4w9WgXcQ", featured: false },
];

async function seedArchiveItems(categoryMap) {
  for (const item of ARCHIVE_ITEMS) {
    const { category: catName, ...rest } = item;
    const catId = categoryMap.get(catName);
    try {
      await api("POST", "/archive-items", { ...rest, category: catId ?? null });
      console.log(`  ✓ Archive: ${item.title.slice(0, 50)}…`);
    } catch (e) {
      console.log(`  ✗ Archive failed: ${item.title.slice(0, 50)}… — ${e.message}`);
    }
  }
}

// ── Selected Pieces ────────────────────────────────────────────────────

const SELECTED_PIECES = [
  { title: "Why the Best Executives Are Going Independent", publication: "Harvard Business Review", year: 2025, personalIntro: "This piece captures what I've been seeing at BTG for over a decade — the quiet exodus of exceptional talent from the corporate ladder toward independence. I wrote this because I wanted to put data behind what our own experience had already confirmed.", externalUrl: "#", order: 1 },
  { title: "The Myth of the Permanent Employee", publication: "Harvard Business Review", year: 2023, personalIntro: "I've been making this argument in boardrooms for years. When HBR gave me the space to make it in full, I tried to write something that would actually challenge how executives think about the structure of their workforce — not just the perks they offer.", externalUrl: "#", pdfUrl: "#", order: 2 },
  { title: "Female Founders and the Persistent Funding Gap", publication: "Forbes", year: 2024, personalIntro: "The numbers in this piece frustrated and motivated me in equal measure. The gap is real, it is measurable, and the excuses for it have long since expired. I hope this piece makes it harder to look away.", externalUrl: "#", order: 3 },
  { title: "The Great Resignation Was Never About Work-Life Balance", publication: "Harvard Business Review", year: 2021, personalIntro: "When the Great Resignation conversation started dominating every leadership forum, I felt like something essential was being missed. This is my attempt to say what I actually think was happening — and what leaders got wrong in their response.", externalUrl: "#", pdfUrl: "#", order: 4 },
  { title: "What 25 Years of Building Companies Taught Me About Failure", publication: "Inc. Magazine", year: 2024, personalIntro: "Writing this piece was genuinely uncomfortable. Talking about success is easy. Talking honestly about the decisions I got wrong, the hires I shouldn't have made, the pivots I made too late — that required a different kind of honesty. I'm glad I did it.", externalUrl: "#", order: 5 },
  { title: "Crisis Leadership: What the Best CEOs Did Differently in 2020", publication: "Fortune", year: 2020, personalIntro: "I was watching leaders navigate 2020 in real time — many of them BTG clients. The contrast between those who rose and those who faltered was striking and instructive. I wrote this while the wound was still fresh.", externalUrl: "#", pdfUrl: "#", order: 6 },
];

async function seedSelectedPieces() {
  for (const piece of SELECTED_PIECES) {
    try {
      await api("POST", "/selected-pieces", piece);
      console.log(`  ✓ Piece: ${piece.title.slice(0, 50)}…`);
    } catch (e) {
      console.log(`  ✗ Piece failed: ${piece.title.slice(0, 50)}… — ${e.message}`);
    }
  }
}

// ── Press Logos ─────────────────────────────────────────────────────────

const PRESS_LOGOS = [
  "WSJ", "The New York Times", "HBR", "Fortune", "Bloomberg",
  "CNN", "Fast Company", "Financial Times", "Inc.",
];

async function seedPressLogos() {
  for (let i = 0; i < PRESS_LOGOS.length; i++) {
    try {
      await api("POST", "/press-logos", { name: PRESS_LOGOS[i], order: i + 1 });
      console.log(`  ✓ Logo: ${PRESS_LOGOS[i]}`);
    } catch (e) {
      console.log(`  ✗ Logo failed: ${PRESS_LOGOS[i]} — ${e.message}`);
    }
  }
}

// ── Single Types ───────────────────────────────────────────────────────

async function seedBio() {
  try {
    await api("PUT", "/bio", {
      headline: "Redefining the way the world works.",
      biography: `Jody Greenstone Miller is the Co-Founder and former CEO of Business Talent Group (BTG), the leading marketplace for high-end, on-demand executive talent. She built BTG over nearly two decades into a company that has placed thousands of independent executives with Fortune 500 companies, private equity firms, and high-growth startups worldwide.\n\nHer career spans across the private, public, and non-profit sectors, reflecting a deep commitment to institutional excellence, enterprise, and human dignity. Jody's insights on our changing landscape of labor have been featured on major business publications, the Wall Street Journal, and Fortune, positioning her at the forefront of discussions regarding the future of work and organizational agility.\n\nToday, she continues to shape frontier ideas and advise high-growth stage companies while advocating for a more flexible model of work post-industrial environment.`,
      linkedinUrl: "https://www.linkedin.com/in/jodygreenstonemiller/",
      familyLinks: [
        { label: "Amelia Miller", url: "https://www.ameliagmiller.com" },
      ],
    });
    console.log("  ✓ Bio");
  } catch (e) {
    console.log(`  ✗ Bio failed: ${e.message}`);
  }
}

async function seedBtg() {
  try {
    await api("PUT", "/btg", {
      mission: `Business Talent Group was founded on a deceptively simple idea: the most capable executives don't all work inside companies. Many of the best — the ones with the deepest expertise, the sharpest strategic judgment, the hardest-won pattern recognition — have chosen independence.\n\nBTG exists to make that talent accessible. We match independent executives — former C-suite leaders, functional experts, industry veterans — with organizations that need exactly what they offer, when they need it, without the overhead and permanence of a traditional hire.\n\n"The best talent in the world should be free to work on their own terms. The best companies in the world should have access to it." — Jody Greenstone Miller\n\nThe future of work is more flexible, more independent, and more meritocratic than the model it is replacing. BTG has been making that future real since 2007.`,
      history: `BTG was born out of a conviction that the model of executive employment — the permanent hire, the long-term contract, the ladder — was increasingly misaligned with how the most talented people wanted to work and how the best organizations needed to access expertise.\n\n2007 — Jody Greenstone Miller and Hillary Doyle co-found Business Talent Group in Los Angeles.\n2010 — BTG completes its first hundred engagements.\n2013 — The talent network grows to over 1,000 vetted independent executives.\n2016 — BTG opens its New York office.\n2019 — BTG releases landmark research on the 'Gig Economy' for executives.\n2021 — BTG experiences its largest growth year on record.\n2023 — BTG reaches a new milestone in total engagements completed.`,
      accomplishments: `## Milestones\n\n- Over 5,000 independent executives in the BTG talent network\n- Thousands of engagements completed across Fortune 500 companies\n- Clients in financial services, healthcare, technology, consumer, media, and the public sector\n- Operations across North America, Europe, and Asia\n- Pioneered the language and frameworks for independent executive work\n\n## Media Recognition\n\n**Inc. 5000** — Recognized as one of the fastest-growing private companies in America.\n**Forbes** — Featured as a company changing the future of work.\n**Fast Company** — Cited among the most innovative companies in the talent and HR category.\n**Harvard Business Review** — BTG research cited in multiple HBR articles.\n**The Wall Street Journal** — Profiled as the defining company in the on-demand executive marketplace.`,
      investorsAndBoard: `## Investors\n\n**Placeholder Ventures** — A leading growth equity firm focused on technology-enabled marketplace businesses.\n**Placeholder Capital** — Long-term investor in companies reshaping how work is organized.\n**Placeholder Partners** — Strategic investor with deep networks in enterprise software.\n\n## Board of Directors\n\n- Jody Greenstone Miller — Co-Founder & former CEO\n- Hillary Doyle — Co-Founder\n- Board Member Placeholder A — Managing Partner, Placeholder Ventures\n- Board Member Placeholder B — Former COO, Placeholder Corporation\n- Independent Director Placeholder — Former SVP, Placeholder Global`,
    });
    console.log("  ✓ BTG");
  } catch (e) {
    console.log(`  ✗ BTG failed: ${e.message}`);
  }
}

async function seedSpeaking() {
  try {
    await api("PUT", "/speaking", {
      topics: `**The Future of Work** — The structural transformation underway in how talent is organized, deployed, and compensated.\n\n**Building and Scaling Companies** — What it actually takes to build something from nothing and grow it.\n\n**Women in Leadership** — An unflinching look at structural and cultural barriers that persist in organizations.\n\n**Independent Talent and the On-Demand Economy** — How the rise of the independent executive is reshaping the competitive landscape.\n\n**Leadership Under Uncertainty** — Frameworks for making consequential decisions without complete information.\n\n**Entrepreneurship and the Long Game** — What a twenty-plus year entrepreneurial career teaches about resilience and reinvention.`,
      advisoryAreas: `- Board governance and composition\n- Talent strategy and the future of the workforce\n- Executive team building and organizational design\n- Growth strategy for marketplace businesses\n- Women in leadership and equity in the workplace\n- Entrepreneurial strategy for founder-led companies`,
      contactIntro: "For speaking inquiries, advisory conversations, or board opportunities, please reach out directly.",
    });
    console.log("  ✓ Speaking");
  } catch (e) {
    console.log(`  ✗ Speaking failed: ${e.message}`);
  }
}

async function seedTheDetails() {
  try {
    await api("PUT", "/the-details", {
      entrepreneurial: "Co-founded Business Talent Group in 2007, building it from a concept into the leading marketplace for on-demand executive talent over nearly two decades.",
      executive: "Served as Acting President & COO of Americast, a digital video venture formed by major U.S. media companies. Held the role of Executive Vice President at Maverick Records.",
      government: "Served as Chief of Staff in the Office of the Vice President during the Clinton Administration, working directly with senior White House leadership on domestic and foreign policy initiatives.",
      boards: "Served on multiple public, private, and nonprofit boards. Active in governance and advisory roles at the intersection of talent, technology, and institutional leadership.",
      nonprofit: "Active supporter and advocate for women in business, underrepresented founders, and equitable access to leadership opportunities. Board member of The Urban Institute and advisory contributor to Human Rights Watch.",
    });
    console.log("  ✓ The Details");
  } catch (e) {
    console.log(`  ✗ The Details failed: ${e.message}`);
  }
}

// ── Main ───────────────────────────────────────────────────────────────

async function main() {
  console.log("\n🌱 Seeding Strapi with frontend content…\n");

  console.log("Categories:");
  const categoryMap = await seedCategories();

  console.log("\nArchive Items:");
  await seedArchiveItems(categoryMap);

  console.log("\nSelected Pieces:");
  await seedSelectedPieces();

  console.log("\nPress Logos:");
  await seedPressLogos();

  console.log("\nSingle Types:");
  await seedBio();
  await seedBtg();
  await seedSpeaking();
  await seedTheDetails();

  console.log("\n✅ Seed complete!\n");
}

main().catch(console.error);
