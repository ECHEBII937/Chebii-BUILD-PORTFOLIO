# Emmanuel Kibiwott Chebii: Portfolio

**DESIGN. BUILD. EXPERIMENT.** A multi-page website in plain HTML and CSS. JavaScript is used only for effects and small interactions.

Live: https://chebii.co.ke

## How it is organised
- **Pages** are normal `.html` files: `index`, `about`, `portfolio`, `software`, `maker`, `youtube`, `resources`, `shop`, `journal`, `contact`.
- **Item pages** live in folders (`portfolio/`, `software/`, `maker/`, `resources/`, `shop/`, `journal/`): one file per project, build, resource, product or post.
- **Look:** `css/styles.css`. **Effects only:** `js/effects.js`.
- **Pictures:** `images/`. **Blank item pages to copy:** `_templates/`.

## Edit text
Open any `.html` file, change the words between the tags, save and commit. Comments like `<!-- DESCRIPTION: ... -->` mark each editable spot.

## Add pictures
Each item page looks for `slug-1.jpg`, `slug-2.jpg` ... in `images/`, where the slug is the page file name without `.html` (for example `maker/model-boat.html` uses `model-boat-1.jpg` to `model-boat-5.jpg`). Upload with those names and they appear. To add another picture to a slider, copy a `<figure>` line. Shop QR code: `images/mpesa-till-qr.png`. Portrait: replace the placeholder block in `about.html` and `index.html` as the comment says.

## Add download or GitHub links
On the item page find the button marked `(link coming soon)`. Replace `href="#"` with your link (a normal Google Drive share link works), delete the word `off` from `class="btn s off"`, and delete `(link coming soon)`.

## Add a new item
1. Copy the matching file from `_templates/` into the right folder and rename it (`my-new-logo.html`).
2. Replace every `new-item` with the new file name (without `.html`), then fill in the text.
3. Open the listing page (for example `portfolio.html`), copy a whole `<a class="tile">` block, and change its link, image name, title, category and text.

## Add a YouTube video
In `youtube.html` copy a whole `<article class="tile">` block. Change the video ID (the part after `watch?v=`) in all three places, the title, and the category.

## Shop and payments
Each product page has the M-Pesa checkout (Till 4686524). To change the till number, price, QR or WhatsApp number, use Find and Replace across the project (in VS Code: Ctrl+Shift+H). Card payments are a demo only until a gateway is connected.

## Change the menu or footer
The menu is repeated on every page, so use Find and Replace across all files to change it.

## Deploy
Upload everything to the repo root (keep your existing `CNAME` file). GitHub Pages: Settings, Pages, Deploy from a branch, `main`, `/ (root)`.
