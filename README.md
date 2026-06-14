# The Von Terra Project — Website

A multi-page static website built from `VTP_website_BUILD_INSTRUCTIONS.md`. Point your host
(or any static file server) at this folder; `index.html` is the entry page. No build step
is required.

## Structure
- 14 primary pages + 7 team biography pages (21 `.html` files total)
- `css/style.css` — the single shared stylesheet
- `js/main.js` — mobile hamburger nav, dropdown menus, FAQ accordion
- `website_images/` — logo, team headshots (resized to 640px / ~60–110KB each for performance)
- `_partials.js` — generator-only template for the shared header/footer (not referenced by
  any page; safe to delete before deploying, kept so the header/footer can be regenerated
  consistently)

## TBD / missing assets (drop-in ready)
The build instructions reference assets that were not provided. Everything renders with a
graceful fallback meanwhile; add the files to `website_images/` with these exact names to
activate them — no code changes needed:

| Missing file | Where it's used | Current fallback |
|---|---|---|
| `VTPWallpaper.png` | Home hero background | Navy gradient |
| `DonorBoxWallpaper.png` | Donate hero background | Navy gradient |
| `Telephone.png`, `Email.png`, `Linkedin.png` | Contact/footer icons | Inline SVG icons in matching style (to switch to the PNGs, replace the `.ico` spans) |
| `Docs.png`, `Docs2.png` | Resource Hub / Documents decorative graphics | Omitted (HTML comments mark the spots); document cards use an inline SVG icon |
| Decorative illustrations (`2025-09-27…png`) | Optional feature imagery | Omitted per spec ("do not invent") |

Other TBDs in content:
- **Elisha Angeles** — no headshot provided → initials avatar ("EA"). Drop a photo in and
  update `team.html` / `team-elisha-angeles.html` (or ask me to wire it).
- **Saren Bennett** — no biography text provided (per spec, the bio page has no body).
- `href="#"` anchors are intentional per spec: CyberHERo program donate, all Start-Security
  vendor buttons, Documents View/Download, Donate Now.
- `[EMBED PLACEHOLDER]` boxes await the real embeds: Self-Assessment Survey, Donorbox
  widget, Document Viewer, Contact Form.

## Notes
- The VTP logo lockup (`VTP Logo.png`) was composed from the organization's emblem +
  wordmark assets at 506×120 for crisp rendering at the 40px header height.
- Fonts (Montserrat, Inter) load from Google Fonts per the build instructions — the site
  needs internet access for fonts, or self-host them and update the `<link>` tags.
