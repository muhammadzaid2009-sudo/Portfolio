<div align="center">

<br>

# `MZ.` Portfolio

**Personal security portfolio of Muhammad Zaid**

<sub>A computer science student learning cybersecurity from both sides: investigation and authorized labs.</sub>

<br>

<a href="https://muhammad-zaid-portfolio-one.vercel.app/"><img src="https://img.shields.io/badge/Live%20site-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live site on Vercel"></a>
<a href="https://muhammadzaid2009-sudo.github.io/Portfolio/"><img src="https://img.shields.io/badge/Mirror-GitHub%20Pages-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages mirror"></a>

<br><br>

<img src="https://img.shields.io/github/last-commit/muhammadzaid2009-sudo/Portfolio?style=flat-square&label=Last%20update&color=0d1117&labelColor=30363d" alt="Last update">
<img src="https://img.shields.io/github/languages/top/muhammadzaid2009-sudo/Portfolio?style=flat-square&color=0d1117&labelColor=30363d" alt="Top language">
<img src="https://img.shields.io/badge/Static%20site-no%20backend-2ea043?style=flat-square" alt="Static site">

<br><br>

[**Overview**](#-overview) &nbsp;·&nbsp; [**Sections**](#-site-sections) &nbsp;·&nbsp; [**Design**](#-design-decisions) &nbsp;·&nbsp; [**Run locally**](#-run-locally) &nbsp;·&nbsp; [**Deploy**](#-deployment)

</div>

<br>

<!-- TODO: add a desktop and a mobile screenshot, e.g. docs/screenshot-desktop.png -->
<!-- <p align="center"><img src="docs/screenshot-desktop.png" alt="Portfolio homepage" width="860"></p> -->

## 📖 Overview

This repository holds the source code for my personal portfolio at **[muhammad-zaid-portfolio-one.vercel.app](https://muhammad-zaid-portfolio-one.vercel.app/)**.

The site shows who I am, what I'm working on, and the proof behind it: an active SOC internship, a VMware home lab, public write-ups, tools I wrote, and verified certifications. It is a single, static page with no backend, no tracking, and no third-party widgets that can break.

The idea behind the design is simple: my subject is investigation and evidence, so the page is built like an analyst's workbench instead of a generic developer template.

<br>

## 🧭 Site sections

| Section | What it shows |
| :-- | :-- |
| **Hero** | A short introduction next to a clearly labelled *synthetic* Wazuh-style alert. No employer telemetry is shown. |
| **Now** | Four active tracks: blue team / SOC, offensive security (authorized labs), scripting, and systems foundations. |
| **Experience** | SOC L1 Intern at DeepAegis, described at a high level with no client or internal data. |
| **Selected work** | Write-Ups, Scripts & Tools, CTF & Lab Write-ups (GitBook), Python Projects, and Medium articles. |
| **Home lab** | A hand-built SVG diagram: Kali Linux → four virtual targets → Wazuh 4.14 → write-ups, with a text alternative. |
| **Skills** | Three honest tiers (hands-on, learning now, planned next) with no percentage bars. |
| **Certifications** | TryHackMe Jr Penetration Tester, TryHackMe Pre Security (Legacy), and the LetsDefend SOC Member badge, each linked to its verification page. |
| **Writing** | Links to GitHub write-ups, GitBook, and Medium. |
| **Contact** | Email and social links. |

<br>

## ✨ Features

- **Single page, fast to load:** static files only, with a skip link and a stable anchor for every section.
- **Accessible by design:** semantic HTML, a text alternative for the home lab diagram, and keyboard-friendly navigation.
- **Responsive:** built to read well from phone to desktop.
- **Share-ready:** Open Graph and Twitter card metadata, a custom social preview image (`assets/og-card.svg`), and a theme color.
- **Privacy-conscious:** no phone number, address, or employer data; all lab content is framed as authorized-environment practice.

<br>

## 🎨 Design decisions

- **Concept:** "the case file". Visual structure carries information instead of decoration.
- **Palette:** a cool slate-paper background (`#E8EDF1`) with deep navy ink and a single cobalt accent. Amber and red are reserved for genuine severity cues.
- **Typography:** type does the heavy lifting; one monospaced face appears only inside log-style content.
- **Motion:** minimal and purposeful, with reduced-motion preferences respected. <!-- CONFIRM -->
- **No filler:** no fake stats, skill meters, or stock hacker imagery.

<br>

## 🧰 Tech stack

| Layer | Choice |
| :-- | :-- |
| Markup and styling | HTML and CSS <!-- CONFIRM: add JS framework or build tool if used --> |
| Interactivity | Vanilla JavaScript, kept minimal <!-- CONFIRM --> |
| Diagram | Inline SVG |
| Hosting | Vercel (primary) and GitHub Pages (mirror) |
| Version control | Git and GitHub |

<br>

## 🗂️ Project structure

<!-- CONFIRM: replace with the real tree from the repo -->

```text
Portfolio/
├── index.html
├── assets/
│   ├── og-card.svg                  # social preview image
│   └── letsdefend-soc-member.png    # certification badge
└── README.md
```

<br>

## 💻 Run locally

The site is static, so any simple file server works.

```bash
# 1. Clone the repository
git clone https://github.com/muhammadzaid2009-sudo/Portfolio.git
cd Portfolio

# 2. Serve it locally (pick one)
python -m http.server 8000
# or
npx serve .

# 3. Open http://localhost:8000
```

<!-- CONFIRM: if the project uses npm scripts or a build step, replace the block above. -->

<br>

## 🚀 Deployment

The same repository deploys to two places:

- **Vercel:** import the repo, leave the build command empty for a static site, and deploy. Every push to the main branch redeploys.
- **GitHub Pages:** *Settings → Pages → Deploy from a branch → `main` / root*. The site is then served at `muhammadzaid2009-sudo.github.io/Portfolio/`.

<br>

## ✏️ Updating the content

1. Edit the text, links, and project details in the page source. <!-- CONFIRM: mention content files if the data lives in JSON -->
2. Replace certification and badge images in `assets/`.
3. Commit and push. Vercel redeploys automatically.

<br>

## 🔒 Privacy and ethics

- No client names, internal systems, or real employer telemetry appear anywhere on the site. The hero alert is synthetic sample data.
- All offensive-security content refers to authorized labs and intentionally vulnerable systems only.
- No credentials, tokens, or private data are stored in this repository.

<br>

## 🤝 Connect

<div align="center">

<a href="https://www.linkedin.com/in/muhammad-zaid2009/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
<a href="https://tryhackme.com/p/muhammadzaid2009"><img src="https://img.shields.io/badge/TryHackMe-212C42?style=for-the-badge&logo=tryhackme&logoColor=white" alt="TryHackMe"></a>
<a href="https://github.com/muhammadzaid2009-sudo"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a>
<a href="https://muhammad-zaid.gitbook.io/muhammad-zaid-ctf-docs/"><img src="https://img.shields.io/badge/GitBook-3884FF?style=for-the-badge&logo=gitbook&logoColor=white" alt="GitBook"></a>
<a href="https://medium.com/@muhammadzaid2009"><img src="https://img.shields.io/badge/Medium-000000?style=for-the-badge&logo=medium&logoColor=white" alt="Medium"></a>
<a href="mailto:muhammadzaid2009@outlook.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"></a>

<br><br>

**Built while learning. Updated as I learn more.**

<sub>© Muhammad Zaid. <!-- TODO: choose a license (e.g. MIT for code, all rights reserved for personal content) --></sub>

</div>
