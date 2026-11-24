# Wings of Vision

You are the creative director at a world-class design studio. Design a Red Bull homepage at 1440px desktop. This is not a fan site. This is the kind of work that wins Awwwards Site of the Year.

The design philosophy: Tension before release. Most of the page is disciplined, quiet, dark — so that the ONE signature moment hits like a punch. The page should feel like standing at the edge of a cliff. Not like a nightclub flyer.

DESIGN TOKENS — non-negotiable:

Background system: #080808 base, #101010 surface, #1A1A1A elevated

Red: #CC0000 (not bright — deep, blood-serious red)

Gold: #C9A84C (matte, not chrome — like worn racing leather)

White: #EDEDED (slightly warm, not clinical)

Danger accent: #FF2200 (used ONCE on the page — the signature moment only)

Typography:

— Headlines: "Bebas Neue" or "Druk Wide" — ALL CAPS, tight letter-spacing at -0.02em, used at brutal scale (min 120px for hero)

— Body: "Neue Haas Grotesk" or "Inter" at 400 weight, 16px/28px line-height, max-width 520px columns

— Data/Labels: Same as body but 11px, 200 letter-spacing, ALL CAPS — used for eyebrows and metadata only

LAYOUT SYSTEM:

Use an asymmetric 12-column grid. NOT centered layouts. Tension comes from weight being off-balance — a massive headline bleeding left while an image anchors right. Sections should feel like they're fighting for space.

Spacing: 160px between major sections. 0px mercy. No decorative dividers — white space IS the divider.

SECTION 1 — THE HERO (viewport-locked, no scroll on load)

Full screen. #080808 background. Absolute silence — no gradients, no texture.

Left side: The word "WINGS" set at 280px Bebas Neue, #EDEDED, bleeding off the left edge by 40px. Below it in 13px ALL CAPS label type: "EST. 1987 · FUSCHL AM SEE, AUSTRIA". Below that, a single sentence in body type: "Not a beverage. A point of view." Then a red underline — 2px, #CC0000, 48px wide — like a signature.

Right side: A Red Bull can shot from below at a Dutch angle, lit with a single hard white key light from upper-left, deep shadow cutting across the lower third. The can should feel monolithic. Add a barely-visible radial glow at #FF2200 at 6% opacity behind it — this is the ONE use of the danger accent.

Bottom of hero: A single scrolling ticker in 11px caps, #C9A84C gold: "RED BULL AIR RACE · SALZBURG · JUNE 2026 · RED BULL RAMPAGE · VIRGIN, UTAH · OCT 2026 · RED BULL BC ONE · WORLD FINAL · PARIS · NOV 2026 ·" — repeating, slow scroll left, no background, just the gold type on black.

No CTA button in the hero. The page IS the CTA.

SECTION 2 — THE ROSTER (Athletes)

Black background. Full bleed.

Eyebrow text: "THE ATHLETES" in 11px gold caps, left aligned.

Below: 4 athlete cards in a horizontal strip. Each card is 320px wide, no gap — they're flush against each other. Each card is a dark photograph (high contrast, desaturated to 85%) with the athlete's name set in 72px Bebas at the bottom-left of the card, and their sport in 11px gold caps above the name. On hover, the photo goes to 100% color saturation and a 2px #CC0000 border appears on the left edge of the card only.

Sports: Motocross · Formula 1 · Snowboard · Breaking

SECTION 3 — THE CAN (Product)

This section breaks the grid intentionally.

#101010 background. Three cans arranged like a triptych — but NOT centered. They're pushed to the right two-thirds of the screen. The left third is empty except for vertical text reading "CHOOSE YOUR WEAPON" rotated 90° counterclockwise, in 13px gold caps.

Below each can: flavor name in 18px Bebas, and a single-line description in 12px body type. No prices. No buy buttons. This is desire, not commerce. A small "→ Explore" link in 11px caps is enough.

Subtle hairline rules (0.5px, #2A2A2A) separate the three can zones horizontally.

SECTION 4 — THE MANIFESTO

Full bleed. #CC0000 red background. This is the ONLY red section. It should feel like an alarm going off after the dark silence.

Single line of text, centered: "WE DON'T MAKE DRINKS. WE MAKE MOMENTS." in 96px Bebas, #080808 dark type on red.

Nothing else on this section. Full viewport height. Scroll-snapped.

SECTION 5 — EVENTS

Back to #080808. Three upcoming events in a 3-column layout. Each event has: date in 11px gold caps top-left, event name in 56px Bebas, location in 12px body, and a 1px bottom border in #1A1A1A. NO imagery — the typography carries this section entirely. Left column event has a 2px left border in #CC0000. The other two do not.

SECTION 6 — FOOTER

#080808. 80px top padding. Red Bull logo (bull silhouette only, no wordmark) centered at 32px height. Below it, navigation in 11px gold caps with 48px spacing between items. Bottom line: copyright in 10px #444444. A single 1px #CC0000 line sits at the very top of the footer.

THE RULE: If any element feels "designed," remove it. The best design decisions here are invisible. What you feel is momentum, not decoration.

HOW TO USE THIS IN FIGMA

Step 1 — Set up your token library first (before running AI). Create local styles for every color and text style named above. Figma AI respects existing styles.

Step 2 — Run the full prompt for the overall layout and structure.

Step 3 — Isolate and iterate section by section. For each section, select the frame and prompt: "Redesign just this section — more tension, less symmetry, reference the token system I've set up."

Step 4 — The manifesto section — run this separately: "Full viewport height frame, #CC0000 background, single centered headline in Bebas Neue 96px dark text, nothing else. Austere. Alarming."

Step 5 — Polish pass — Select the whole page and prompt: "Audit this design. Remove anything decorative that isn't doing structural work. Make the spacing more brutal

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/72d6252c-d002-40a6-8072-739e28713c18).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
