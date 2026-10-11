# Emmanuel Kibiwott Chebii: Portfolio

React + TypeScript + Vite. Design. Build. Experiment.

## Run it
1. Install Node.js 18+ (nodejs.org).
2. In this folder: `npm install`
3. `npm run dev` and open the link it prints.
4. `npm run build` makes the `dist/` folder (the finished site).

## Edit content (no layout code needed)
Everything lives in **`src/data/content.ts`**:
- `site`: name, email, phones, location, `portrait`, `channelUrl`, `socials`
- `sections`: Creative portfolio, Software, Maker Lab, Resources, Shop, Journal. Each is a list of entries. Copy an entry, change its `slug`, `title`, `category`, `summary`, add `image`, and delete `placeholder: true` when it is real.
- `videos` and `categories`: YouTube page

Images and files: put them in `public/` (e.g. `public/portrait.jpg`) and write `'portrait.jpg'`.

## Add a portrait
Save the photo as `public/portrait.jpg`, then set `portrait: 'portrait.jpg'` in `site`.

## Add a YouTube video
1. Set `channelUrl` in `site` to your real channel link (turns on Subscribe).
2. Copy the ID from the video link (`youtube.com/watch?v=THIS_PART`).
3. Add to `videos`: `{id:'THIS_PART', title:'My video', category:'Maker Projects & DIY Builds'}`
Thumbnails and the embedded player are built from the ID. Category must match a name in `categories`.

## Add a project
Add an entry to the `software` section: use `sw(...)`, then set `meta` (Technologies, Status, GitHub, Demo) and `image`/`gallery` for screenshots. Maker builds use `log` for build-log entries; shop products use `price` (checkout stays disabled).

## Deploy free
The site uses hash links and relative paths, so it works anywhere.
- **Netlify:** drag the `dist/` folder onto app.netlify.com/drop, or connect the repo (build `npm run build`, publish `dist`).
- **GitHub Pages:** push this project to GitHub, run `npm run build`, and publish `dist/` (for example with the `gh-pages` package: `npx gh-pages -d dist`), then enable Pages on the `gh-pages` branch.

## Notes
- Brand colours are in `src/styles.css` (`#101713`, `#174F38`, `#65C995`, `#F4F5F0`).
- Anything labelled Placeholder is sample content. Nothing here is a real client, link or upload.
- Shop checkout is intentionally disabled until you add a payment provider.
