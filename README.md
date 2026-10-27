# OrrenMashk Group Inc. | orrenmashk.com

Static multi-page site, v2.0 rebuild. Dark palette, serif-driven analytical identity, zero JavaScript dependency on the critical path.

## Structure

```
/
├── index.html                        Home
├── sitemap.xml
├── robots.txt
├── README.md
├── css/
│   └── main.css                      Shared stylesheet, design tokens, components
├── js/
│   └── nav.js                        Progressive-enhancement mobile menu toggle only
├── images/
│   ├── logo-primary.png              Full logo with text
│   ├── logo-shield.png               Shield mark only (used in nav/footer)
│   ├── logo-full.png
│   └── logo-lockup.png
├── assets/
│   └── OrrenMashk_Capability_Statement.pdf   (TO BE ADDED - placeholder links in HTML)
└── pages/
    ├── capabilities.html             Index of six capability areas
    ├── threat-red-team.html          FULL SERVICE PAGE (week-one deliverable for Ketzal reply)
    ├── operational-functions.html    RSA / PIM / IPA / RDR
    ├── engagements.html              Sanitized NCARNG past-performance tile
    ├── insights.html                 Placeholder; doctrine essays land here starting month two
    ├── about.html                    Leadership and government buyer identifiers
    └── contact.html                  Four inquiry routes, form, direct email addresses
```

## Design system

- **Headings:** Source Serif 4 (fallback: Georgia)
- **Body:** Inter (fallback: system-ui, Segoe UI, Helvetica)
- **Mono (identifiers):** JetBrains Mono (fallback: Consolas, Monaco)
- **Palette:** Deep black `#0A0A0A` base, panel grays `#141414` to `#222222`, gold accent `#C9A961`, bright gold `#E4C77A`
- Weight discipline: headings 600, body 400, identifiers 500
- Hairline gold rule under section headings as the primary accent motif
- WCAG 2.1 AA contrast ratios maintained on all text pairings

## Deployment notes

**Fonts.** Google Fonts CDN is used for staging. For production, self-host the three families in `/css/fonts/` and update `@font-face` declarations in `main.css`. Self-hosting removes the Google dependency, improves locked-down government browser rendering, and makes the site faster.

**Capability statement PDF.** Replace the placeholder path `/assets/OrrenMashk_Capability_Statement.pdf` with the actual file once produced. Linked from the home-page hero, home-page identifier section, About page, and footer.

**Email addresses.** The contact page uses four inbound addresses: `ops@`, `partners@`, `media@`, `careers@`, plus a general `info@` in footers. Configure MX / forwarding before the site goes live. Right now the form POSTs to `/submit`, which must be wired to the CMS handler, a Netlify/Formspree-style collector, or a server-side script.

**Logo nav fallback.** The nav brand lockup renders the text "OrrenMashk Group Inc." in HTML, with the shield mark PNG on its left. This means the brand reads correctly even if the image fails to load, and the text is screen-reader-accessible without an alt-text workaround.

**Section 508 / WCAG 2.1 AA checklist.**
- Skip link present on every page
- Semantic HTML5 landmarks (header, nav, main, footer) with ARIA labels
- Breadcrumb navs labeled
- `aria-current="page"` on active nav links
- Focus-visible outlines on all interactive elements
- Form fields have explicit labels, autocomplete attributes, and required flags
- `prefers-reduced-motion` honored
- Print stylesheet included
- No JavaScript required for any content, navigation, or form submission

## Content changes in v2.0 vs. prior site

**Removed (compliance):**
- "Doodle Labs mesh radio" naming (partner citation discipline; Doodle Labs reseller agreement belongs to Heightened Senses)
- Reseller language, NDAA-compliant fulfillment language, and manufacturer catalog framing (entity separation)
- "Vets to Drones workforce pipeline" explicit reference (hold until written positioning is settled; Veteran-led framing retained)
- SDVOSB claims (OrrenMashk is not SDVOSB-certified; reinstate across the site in the coordinated sweep after SBA VetCert approval)

**Added:**
- Threat & Red Team as named lead capability
- Rapid Disaster Response (RDR) as a fourth operational function alongside RSA, PIM, IPA
- Visible government-buyer identifiers block with copyable fields: CAGE 18U68, UEI VFYHAKCHFMJ4, EIN 41-2673022, NAICS, PSC codes
- Capability statement PDF download CTAs
- Engagements page with sanitized multi-vendor C-UAS demonstration facilitation tile
- Insights page scaffolding
- Multi-page architecture
- Schema.org Organization and Service structured data
- Full sitemap and robots.txt

## Rules in force throughout

- Entity separation: no blending with Heightened Senses or Vets to Drones in copy, team listings, or framing
- Partner citation discipline: no OEM or platform named without executed OrrenMashk-side agreement and marketing approval
- CI/HUMINT framed as background and methodology, not ongoing operational claim
- No manufacturer positioning
- Daniel Defense advisory stays off the site (HS and OCI-sensitive)
- JIATF 401 never appears
- "Uncrewed" not "unmanned"; capitalize "Veteran"; no em dashes

## Local preview

```bash
cd /path/to/orrenmashk
python3 -m http.server 8000
# Open http://localhost:8000
```

Or any static host: Netlify, Cloudflare Pages, Vercel, S3+CloudFront, or whatever the current hosting arrangement is.

## Next build phase (weeks 2–4)

- Replace placeholder capability statement PDF
- Verify Doodle Labs scrub extends to LinkedIn page, circulating materials, email signatures
- Confirm NCARNG written consent to be named publicly before swapping engagement tile text
- Write first doctrine essay for Insights launch (month 2)
- Add favicons and OG preview card images
- Wire contact form to a mail handler
