# Muhammad Zaid — Portfolio

A responsive, accessible static portfolio deployed to Vercel. It uses vanilla HTML, CSS, and a small progressive-enhancement script. There is no backend, tracker, contact form, package dependency, build step, or third-party widget.

## Project files

- `index.html`, `styles.css`, `script.js` — page, responsive visual system, and optional interaction enhancements.
- `content/` — reference records for profile, projects, skills, and credentials. Live content is rendered from HTML; edit the matching HTML when changing copy.
- `assets/` — local favicons, social preview, and LetsDefend badge.
- `404.html`, `site.webmanifest`, `vercel.json` — not-found page, install metadata, and security/cache headers.
- `TODO-FOR-OWNER.md` — files and details that need Muhammad’s input.
- `robots.txt`, `sitemap.xml` — search crawler files.

## Preview locally

Open `index.html` in a browser, or serve the folder with any static file server. No packages are required.

## Update content

Edit live copy in `index.html` and keep the reference records in `content/` aligned. Put unconfirmed details in `TODO-FOR-OWNER.md`, not on the live page. Do not add internship client data, private telemetry, or details that have not been confirmed.

## Deploy

Import the repository into Vercel and deploy the project root as a static site. The primary URL is `https://muhammad-zaid-portfolio-one.vercel.app/`. If the domain changes, update canonical and social metadata in `index.html`, plus `sitemap.xml` and `robots.txt`.

The page supports keyboard navigation, reduced motion, system/light/dark themes, print, and semantic landmarks. JavaScript adds optional controls; page content remains in the HTML if it is disabled.

## License

Code is licensed under the MIT License. Personal writing, branding, and credential images are excluded; see [LICENSE](LICENSE).
