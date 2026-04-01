```markdown
# Design System: The Digital Monograph

## 1. Overview & Creative North Star
**Creative North Star: "The Modern Archivist"**

This design system rejects the "templated" nature of the modern web in favor of the tactile, intentional permanence of a high-end literary journal. It is a system built on the tension between the intellectual weight of classical serif typography and the airy, systematic precision of modernist UI.

To move beyond a generic "minimalist" look, we employ **Intentional Asymmetry**. Layouts should mimic the "Golden Ratio" found in book design—using generous, uneven margins and "bleeding" images that break the container. We treat white space not as "empty" space, but as a luxury material, similar to the heavy-weight paper of a limited-edition publication.

---

## 2. Colors & Surface Logic

The palette is a dialogue between warm, ink-infused charcoals and sophisticated, off-white foundations. It is designed to be "easy on the eyes," mimicking the low-contrast reading experience of physical print.

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for sectioning. Structural boundaries must be defined solely through:
1.  **Background Shifts:** Transitioning from `surface` (#f9f9f9) to `surface-container-low` (#f4f3f3).
2.  **Negative Space:** Using the larger increments of our Spacing Scale (e.g., `16` or `20`) to create "mental" boundaries.

### Surface Hierarchy & Nesting
Treat the UI as a physical desk. Layers are created by nesting containers that shift subtly in tone:
*   **Base:** `surface` (#f9f9f9)
*   **Secondary Content Blocks:** `surface-container-low` (#f4f3f3)
*   **Interactive/Elevated Elements:** `surface-container-lowest` (#ffffff) to provide a soft, "bright" lift.

### Glass & Texture
To prevent the design from feeling "flat" or "cheap," use **Glassmorphism** for navigation bars and floating overlays. Use the `surface` color at 80% opacity with a `backdrop-blur` of 20px. This allows the sophisticated typography of the background to bleed through, maintaining a sense of layered depth.

---

## 3. Typography: The Editorial Voice

Typography is the primary visual engine of this system. We pair the academic authority of **EB Garamond** with the invisible, functional clarity of **Inter Light**.

*   **Display & Headlines (EB Garamond):** These are the "hero" elements. Use `display-lg` (3.5rem) for main titles. Character spacing should be slightly tightened (-0.02em) to mimic high-end ink printing.
*   **Body (Inter Light):** Set for maximum readability. Body text should use `body-lg` (1rem) with a generous line-height (1.6) to ensure an academic, unhurried reading pace.
*   **Labels & UI (Inter):** All-caps with increased letter spacing (+0.05em) for `label-sm` tokens to create a "captioned" look common in museum exhibits.

---

## 4. Elevation & Depth

We eschew traditional "drop shadows" in favor of **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by placing a `surface-container-lowest` card on a `surface-container` background. The contrast in "warmth" provides the necessary separation.
*   **Ambient Shadows:** If a floating element (like a modal) requires a shadow, it must be an "Atmospheric Shadow": `0px 20px 40px rgba(47, 43, 38, 0.04)`. It should feel like a soft glow rather than a dark edge.
*   **The Ghost Border:** For input fields or buttons that require a boundary for accessibility, use the `outline-variant` (#cec5bc) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** `primary` (#1a1712) background with `on-primary` (#ffffff) text. Shape is strictly rectangular (`0px` radius).
*   **Secondary:** `surface-container-highest` (#e2e2e2) background. No border.
*   **Tertiary (Editorial Link):** EB Garamond, Italic, with a 1px underline using `primary` at 30% opacity, spaced 4px below the baseline.

### Cards & Lists
*   **The Card Rule:** No borders, no shadows. Use a subtle background shift to `surface-container-low`. 
*   **List Separation:** Forbid divider lines. Use `spacing-8` (2.75rem) between list items. The "white space" acts as the separator.

### Input Fields
*   **Style:** Minimalist underline only. A 1px `outline` (#7d766e) at the bottom of the field. Upon focus, the label (Inter Light) shifts to EB Garamond Italic to signal "Human Input."

### Signature Component: The "Folio" Header
A page-top navigation element that uses `label-sm` (all-caps) and a `surface` glassmorphism effect. It should include a "Page Number" or "Current Chapter" indicator in the far left margin to reinforce the literary metaphor.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical margins. A centered column of text with a much wider right margin than left creates a "scholarly notes" aesthetic.
*   **Do** use EB Garamond in *Italics* for emphasis and pull quotes.
*   **Do** leverage `surface-container-lowest` for your most important CTAs—the "pure white" will draw the eye more effectively than a loud color.

### Don't:
*   **Don't** use a border-radius. Every corner in this system must be `0px` to maintain a sharp, architectural feel.
*   **Don't** use standard blue for links. Links should be the `primary` ink color, distinguished by typography (Italics or thin underlines).
*   **Don't** use "pure black" (#000000). Always use the `primary` "Ink" (#1a1712) to keep the tone warm and sophisticated.
*   **Don't** use icons unless absolutely necessary. Prefer text labels; if icons are used, they must be ultra-thin (1pt stroke) and never filled.