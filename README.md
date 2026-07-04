# Portfolio — Fidel Cedric Odoyo

Personal portfolio website showcasing projects, skills, experience, and education — built with Next.js, Tailwind CSS, and Framer Motion.

**Live:** https://Polymerthcedric.github.io/portfolio  
**Source:** https://github.com/Polymerthcedric/portfolio

---

## Features

- **Hero Section** — Animated intro with role, location, and call-to-action links
- **About Section** — Bio and background rendered from markdown with syntax-highlighted code blocks
- **Skills Section** — Categorized tech stack (Frontend, Backend, Mobile, Database, Tools, AI/LM, Payments, Linux)
- **Projects Section** — Curated project cards with problem/approach/result narratives, live demos, and source links
- **Experience Section** — Professional timeline with role descriptions from markdown content
- **Contact Section** — Social links, email, and call-to-action
- **Responsive Design** — Mobile-first layout with smooth Framer Motion page transitions
- **GitHub Actions CI/CD** — Auto-builds and deploys to GitHub Pages on every push to `main`

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14 (static export) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |
| **Content** | Markdown via `react-markdown` + `gray-matter` + `remark-gfm` |
| **Icons** | Lucide React |
| **Code highlighting** | `react-syntax-highlighter` |
| **Deployment** | GitHub Pages via `peaceiris/actions-gh-pages` |

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles and CSS variables
│   ├── layout.tsx        # Root layout with font loading
│   └── page.tsx          # Main single-page layout
├── components/
│   ├── Navbar.tsx            # Sticky navigation
│   ├── HeroSection.tsx       # Animated hero + CTA
│   ├── AboutSection.tsx      # About me from markdown
│   ├── SkillsSection.tsx     # Tech stack grid
│   ├── ProjectsSection.tsx   # Project cards from JSON
│   ├── ExperienceSection.tsx # Work timeline from markdown
│   ├── ContactSection.tsx    # Contact links + social
│   └── MarkdownContent.tsx   # Reusable markdown renderer
├── content/
│   ├── Abstract.md           # About bio (markdown)
│   ├── Certificates.md       # Certifications list
│   ├── Education.md          # Education history
│   ├── Experience.md         # Work experience entries
│   ├── projects.json         # Project data with narratives
│   └── tags.json             # Skill categorization
└── utils/
    └── markdown.ts        # Markdown parsing utilities
```

## Development

```bash
npm install
npm run dev      # → http://localhost:3000
npm run build    # static export to /out
```

## Content Management

All portfolio content is data-driven — no hardcoded JSX:

- **Projects** — Edit `src/content/projects.json` to add/update project entries with title, description, approach, result, metrics, tags, and links
- **About / Experience / Education / Certificates** — Edit the corresponding `.md` files in `src/content/`
- **Skills** — Categories and tags in `src/content/tags.json`
- **Social links** — Configured in `src/components/ContactSection.tsx`

## Deploy

Push to `main` — a GitHub Action automatically builds the static export and deploys to GitHub Pages.
