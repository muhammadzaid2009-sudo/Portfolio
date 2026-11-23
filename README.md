# Muhammad Zaid — Portfolio

A responsive, accessible static portfolio for GitHub Pages. It uses plain HTML and CSS; there is no JavaScript, backend, build step, tracker, form, or third-party widget.

## Files

- `index.html`, `styles.css` — page markup and visual system.
- `content/profile.json`, `content/projects.json`, `content/stack.json`, `content/certifications.json` — editable content records. Update matching page copy in `index.html`; the page stays usable without a data-loading script.
- `assets/` — locally authored SVG favicon and social sharing image, plus the locally stored LetsDefend badge image.
- `robots.txt`, `sitemap.xml` — search crawler files.

## Preview locally

Open `index.html` in a browser, or serve this folder with any static file server. No packages are required.

## Update content

Edit the JSON content files first, then update matching copy in `index.html`. Keep unconfirmed fields visibly marked until verified. Avoid adding internship client data, private telemetry, personal details that were not provided, or offensive-security instructions for real targets.

## Deploy to GitHub Pages

1. Push these files to the `main` branch of `muhammadzaid2009-sudo/Portfolio`.
2. In repository **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
3. The project site URL is `https://muhammadzaid2009-sudo.github.io/Portfolio/`. If you choose another domain or rename the repo, update the canonical URL, Open Graph image URL, sitemap, and robots file.

No workflow is needed for a plain static root deployment. The page is designed for responsive layouts, keyboard use, reduced motion, dark-mode preference, print, and semantic navigation.

## Design decisions

The visual direction is a quiet case file: an asymmetrical identity rail and a synthetic Wazuh-style sample alert give the security subject matter a specific visual anchor. The rest of the page uses editorial rows, whitespace, restrained navy and cobalt, and amber only for the labelled sample alert. The design avoids terminal-green hacker tropes, generic equal-card grids, invented metrics, and ornamental iconography. The desktop layout uses a narrow sticky rail; the rail becomes a compact horizontal navigation on small screens.

The alert resolves once on load and stops animating when reduced motion is requested. The SVG lab diagram is hand-built and includes a text alternative. All external links are ordinary links; no third-party assets are loaded.

## Remaining information

See `content/profile.json` for all `[CONFIRM]` and `[TODO]` items.
