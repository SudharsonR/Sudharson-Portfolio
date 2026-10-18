# Sudharson Ravi Portfolio

A static HTML, CSS, and JavaScript portfolio. There is no build step or framework.

## Run locally

Open `index.html` in a browser or serve this folder with VS Code Live Server.

## Content and media

Edit `window.SITE_DATA` near the top of `js/script.js` to update profile information,
projects, links, and contact settings. Project images are in `assets/images/`.
Portfolio videos are hosted on Cloudinary and their URLs are configured in
`js/script.js`; the hero showreel URL is also in `index.html`. Keep local `.mp4`
and `.webm` files out of the repository. `videos/image1.jpg` is a local profile
image referenced by the site and must be kept.

## Deploy to Vercel

Import the repository as a static site and use:

- Framework preset: **Other**
- Root directory: **.**
- Build command: leave empty
- Output directory: **.**
- Install command: leave empty
