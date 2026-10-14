# Emmanuel Kibiwott Chebii: Portfolio & Creator Site

**DESIGN. BUILD. EXPERIMENT.**

Personal portfolio and creator website for Emmanuel Kibiwott Chebii, a Technical Trainer, ICT Professional, Graphic Designer, AI & Automation Enthusiast, Web Developer and Maker based in Eldoret, Kenya.

Live site: https://chebii.co.ke/

## About the project

A fast, static website that puts creative and technical work first and documents the journey: design, code, AI tools, ICT training and hands-on making. It is built with plain HTML, CSS and JavaScript, so there is nothing to install or build, and it hosts free on GitHub Pages or Netlify.

The look follows the personal brand: a blueprint / technical-drawing backdrop, bold name typography as the logo, and a charcoal and green palette.

| Colour | Hex |
| --- | --- |
| Charcoal | `#101713` |
| Deep green | `#174F38` |
| Green accent | `#65C995` |
| Warm white | `#F4F5F0` |

## What's on the site

- **Home:** animated hero, featured work, software projects, expertise, latest content, YouTube banner and a short About.
- **Creative portfolio:** logos, branding, posters, brochures, layouts, digital content and print-ready artwork, with search and category filters.
- **ICT, software & AI:** receipt generator, invoice system, Telegram AI chatbot, QR ticket verification, AI learning plan generator, and web / SME solutions.
- **Maker Lab:** a workshop journal for builds, with materials, progress, lessons learned and build logs.
- **YouTube:** branded channel page with categories, click-to-play embeds and a Subscribe button.
- **Resources & teaching:** library for lesson plans, session plans, ICT guides, templates and AI tools.
- **Digital shop:** product structure and detail pages. Checkout is disabled until configured.
- **Journal:** project updates, tutorials and reflections.
- **About and Contact:** background, education and experience, email, phones, location and social links.

## Effects

Blueprint line-drawing on load, letter-by-letter name reveal, cursor-following grid spotlight in the hero, rotating role titles, scrolling brand marquee, 3D card tilt, scroll reveals, scroll progress bar, soft cursor glow, and a light / dark theme toggle. Motion switches off for visitors who prefer reduced motion.

## Project structure

```
index.html        page shell
css/styles.css    all styling and brand colours
js/app.js         pages, routing and effects
js/content.js     your content: edit this file only
images/           photos and artwork
```

## Editing content

Everything lives in `js/content.js`:

- `site`: email, phones, `portrait`, `channelUrl`, `socials`
- `sections`: portfolio, software, maker, resources, shop and journal entries
- `videos` and `categories`: the YouTube page

**Portrait:** save as `images/portrait.jpg` and set `portrait:'images/portrait.jpg'`.

**Add a YouTube video:** set `channelUrl`, copy the ID from the video link (`youtube.com/watch?v=THIS_PART`), then add `{id:'THIS_PART', title:'My video', category:'Maker Projects & DIY Builds'}` to `videos`.

**Add a project:** copy an entry in the `software` section, then set its title, summary, `meta` (Technologies, Status, GitHub, Demo) and `image` / `gallery` for screenshots. Remove `placeholder:true` once it is real.

## Run locally

Double-click `index.html`.

## Deploy free

- **GitHub Pages:** upload the files to the repo root, then go to Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.
- **Netlify:** drag the folder onto app.netlify.com/drop.

## Placeholders

Anything labelled **Placeholder** is sample content waiting for real details. No clients, links, achievements or uploads are invented. Still to add: portrait photo, real project images, channel URL, videos, and GitHub / LinkedIn links.

## Contact

Emmanuel Kibiwott Chebii, Eldoret, Kenya
emmanuelchebii937@gmail.com | 0700 477 205 | 0739 420 343
