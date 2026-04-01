# Ethereal Parchment: A Design System for The Modern Monograph

### 1. Overview & Creative North Star

**Creative North Star: The Academic Curator**

Ethereal Parchment is a design system that marries the tactile authority of a heritage broadsheet with the fluid motion of modern digital interfaces. It rejects the "standard app" aesthetic in favor of a high-end editorial experience. By utilizing expansive whitespace, extreme typographic contrast, and a warm, low-contrast palette, the system creates an environment of intellectual calm and deliberate pacing.

Layouts are intentionally asymmetrical, using a 12-column grid not for rigid containment, but as a playground for varying column spans and dramatic offsets.

---

### 2. Colors

The palette is grounded in "Parchment" (Background: `#f4f1ea`) and "Ink" (Primary: `#1a1a17`), creating a soft, readable contrast that mimics premium paper.

- **The "No-Line" Rule:** Visual separation is achieved through color blocks or 1px hairline rules at 10-20% opacity. Bold, heavy borders are strictly prohibited.

- **Surface Hierarchy:**
  - `surface_container_low` (`#eeebe3`): Used for secondary content blocks and media backgrounds.
  - `surface_container` (`#e8e5dc`): Used for global footers and distinct navigational sectioning.

- **Accent Philosophy:**
  - **Sage (`#7c8375`):** Used for meta-information, labels, and iconography.
  - **Terracotta (`#a66d5b`):** Reserved exclusively for active states, link underlines, and "Introduction" markers to draw the eye without overwhelming the content.

---

### 3. Typography

Typography is the skeletal structure of this system. It uses a sophisticated pairing of a classic serif and a high-utility sans-serif.

- **The Scale:**
  - **Display (Hero):** 92px, 0.95 leading. Use italic spans for emphasis within headlines.
  - **Headline (H1–H2):** 48px to 32px.
  - **Body (Primary):** 1.25rem (20px) to 1.125rem (18px). Always set with `font-light` for an airy feel.
  - **UI Label:** 10px. Uppercase, `letter-spacing: 0.12em`. This is used for all metadata and navigational items.

- **Typographic Rhythm:** Headlines use the "Newsreader" (or EB Garamond) serif for an archival feel, while functional labels use "Inter" to maintain clarity.

---

### 4. Elevation & Depth

Depth is created through "Tonal Layering" rather than light-source simulation.

- **The Layering Principle:** Content stacks are defined by shifting from `surface` to `surface_container_low`.
- **Ambient Shadows:** Only use `shadow-sm` for physical objects (like book covers or portraits) to give them a slight "lift" off the page. UI components like cards should remain flat and borderless or use the `outline_variant` at low opacity.
- **Glassmorphism:** Navigation bars use a `90%` opacity background with a `backdrop-blur-md` to maintain context of the content scrolling beneath them while ensuring legibility.

---

### 5. Components

- **Buttons:** Sharp 0px corners. Primary buttons are solid "Ink" with "Parchment" text. Secondary buttons are outlined with 1px hairlines.
- **Navigation Links:** Horizontal spacing of 48px (3rem). Active states are indicated by a 1px solid Terracotta underline.
- **Media Containers:** Aspect ratios are strictly 16:9, 1:1, or 3:4. All media uses a subtle `grayscale-[10-20%]` filter to align with the brand's muted tonal depth.
- **Inputs:** Underline-style inputs only. Backgrounds remain transparent to the container.

---

### 6. Do's and Don'ts

- **Do:** Use `italic` spans within large headlines to create a rhythmic, conversational tone.
- **Do:** Allow for massive vertical margins (up to 160px) between major sections.
- **Don't:** Use rounded corners (except for iconography or specific circular "play" buttons).
- **Don't:** Use pure black (`#000`) or pure white (`#FFF`). Always use the off-white and off-black tones of the palette to maintain the "Editorial" warmth.
- **Don't:** Center-align long-form body text; maintain left-alignment for readability and a modern grid feel.
