---
name: von-terra-project-site
description: Use this skill to make on-brand changes to The Von Terra Project's public website (vtp_site) — updating the team roster/bios, mission/values text, footer facts, adding pages or blog posts — in the VTP visual style. Knows the static-HTML/Cloudflare stack, the shared header/footer, and where every fact lives. Renders facts that originate in governance; never invents them.
user-invocable: true
---

You are an expert at maintaining **The Von Terra Project website** (`vtp_site`, live at
vonterraproject.org). You make changes that are **structurally correct, on-brand, and
faithful to the canonical facts** — which live upstream in **governance**, not here.

## The stack (know this)
- **Static HTML, no build step**, served by **Cloudflare**. Each `.html` page is hand-edited and self-contained; there is no framework, no bundler, no server.
- **One stylesheet:** `css/style.css` — its `:root` brand tokens are **mirrored from `vtp_voice/tokens/colors.css`** (provenance comments mark each). Do **not** freelance hex/type here; if the brand changes, it changes in `vtp_voice` first, then is re-synced.
- **Shared header/footer** are **baked into every page** (not includes). `_partials.js` is the *generator* template for them (it carries the footer's EIN/contact/socials) — but pages don't reference it at runtime, so a footer change means editing **every page** (or regenerating from `_partials.js`).
- **Brand rules** (from `vtp_voice`): dark earth field `#2E2E2E`, olive `#5C754A`, sage `#A0B98C`, gold `#D8B45C`; **Lexend**; **wide-tracked UPPERCASE** headings/eyebrows; **no emoji** (line icons / SVGs only); olive→gold rule divider; ISO dates.

## Where the facts live (fact surfaces)
| Fact | Lives in |
|---|---|
| Mission / values text | `index.html`, `about.html`, `donate.html` (prose) |
| EIN `33-2041628` | footer of most pages + `_partials.js`; `about.html`, `donate.html`, `index.html` |
| Contact email / phone | footers + `about.html`, `donate.html`, `index.html` |
| LinkedIn / Discord | footers + `_partials.js` |
| Team roster | `team.html` — cards grouped **Board of Directors** then staff |
| Per-person bio | `team-<slug>.html` |
| Headshots | `website_images/team-<slug>.jpg` (or initials `<div class="team-avatar-initials">XY</div>`) |
| Page list (SEO) | `sitemap.xml` |
| Drive-embed file IDs | `documents.html`, `VTP-Report-2025.html` — see `vtp_governance/governance/classification/website-embed-manifest.md` |

## Roster card pattern (`team.html`)
```html
<div class="card team-card">
<img class="team-avatar" src="website_images/team-<slug>.jpg" alt="<Name>">
  <h3><Name></h3>
  <p class="role"><Title></p>
  <p class="bio"><one-line bio></p>
  <a href="team-<slug>.html">Learn More</a>
</div>
```
No headshot yet → replace the `<img>` with `<div class="team-avatar-initials">XY</div>`.

## Bio page pattern (`team-<slug>.html`)
`<div class="page-band">` with avatar + `<h1><Name></h1>` + `<p class="sub-teal"><Title></p>`,
then `<div class="bio-body">` paragraphs and optional `<h3>` sections (Education, Passion &
Mission, Memberships). Copy an existing `team-*.html` as the template; keep the shared
header/footer identical.

## How to make common changes (always preserve the shared header/footer)
- **Title change:** update `team.html` card `.role` **and** the person's `team-<slug>.html` (`<h1>`/`.sub-teal`). Keep titles verbatim from governance.
- **New member:** add a card to `team.html` (right group), create `team-<slug>.html` from a copy, add `website_images/team-<slug>.jpg` (or initials), add a `sitemap.xml` entry. Bio text comes from the Drive `Biographies` doc, re-written in voice's tone.
- **Departure:** remove the card + `sitemap.xml` entry; decide whether to delete or 301 the bio page (note: no server — Cloudflare redirect rule).
- **Fact change (EIN/contact/mission):** update every page that shows it + `_partials.js`. Grep first: `grep -rn "33-2041628\|contact@vonterraproject" --include=*.html .`
- **New page / blog post:** match an existing page's structure + header/footer; add to `sitemap.xml`.

## Boundaries
- **Render, don't decide.** Facts (names, titles, mission, EIN) come from `governance/canonical-facts.json`. If asked to change a fact, change it in governance first (or confirm it's ratified there), then mirror it here. Don't invent bios or restyle the brand on your own.
- **Human-gated deploy.** Make edits in the working tree / on a branch; a human reviews and pushes (Cloudflare deploys from the repo). Never claim something is "live."
- Keep the build-free, self-contained nature: no new framework/bundler.
