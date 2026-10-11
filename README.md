# Emmanuel Kibiwott Chebii: Portfolio
Plain HTML + CSS + JavaScript. No build step, no installs. Design. Build. Experiment.

## Files
- `index.html`: page shell
- `css/styles.css`: all styling (brand colours at the top)
- `js/app.js`: pages, routing and all the effects (blueprint drawing, cursor spotlight, letter reveal, role rotator, marquee, tilt, scroll reveal, progress bar, theme toggle)
- `js/content.js`: **your content**. Edit this file only.
- `images/`: your photos and artwork

## Preview locally
Double-click `index.html`. That's it.

## Edit content (js/content.js)
- `site`: email, phones, `portrait`, `channelUrl`, `socials`
- `sections`: Creative portfolio, Software, Maker Lab, Resources, Shop, Journal. Copy an entry, change `slug`, `title`, `category`, `summary`, add `image`, delete `placeholder:true` when real.
- `videos`, `categories`: YouTube page

## Portrait
Save as `images/portrait.jpg`, then set `portrait:'images/portrait.jpg'`.

## Add a YouTube video
1. Set `channelUrl` to your real channel link (turns on Subscribe).
2. Copy the ID from the video link (`youtube.com/watch?v=THIS_PART`).
3. Add to `videos`: `{id:'THIS_PART',title:'My video',category:'Maker Projects & DIY Builds'}`

## Add a project
Add an entry to the `software` section using `sw(...)`, then set `meta` (Technologies, Status, GitHub, Demo) and `image` / `gallery` for screenshots. Maker builds use `log`; shop products use `price` (checkout stays disabled).

## Deploy free
- **GitHub Pages:** upload these files to the repo root. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`. Delete any old `.github/workflows` folder from the earlier React version.
- **Netlify:** drag this whole folder onto app.netlify.com/drop.

Anything labelled Placeholder is sample content. No real clients, links or uploads are invented.
