# Muhammad Bin Asim — Portfolio

A modern, production-ready portfolio website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — instant dev server, optimized builds
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — premium animations
- **Lucide React** — clean icons

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173).

## Customizing Your Content

All portfolio content lives in one file:

**`src/data/portfolio.ts`**

Edit it to update:
- Personal info (name, email, phone, social links)
- Projects (name, description, tech stack, links)
- Experience (roles, companies, achievements)
- Skills
- About section

## Adding Your CV

Drop your CV PDF into the `public/` folder:

```
public/Muhammad_Bin_Asim_CV.pdf
```

The download button in the navbar and hero will point to it automatically via the `cvUrl` field in `src/data/portfolio.ts`.

## Deploying to Vercel

1. Push to a GitHub repository
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite — just click **Deploy**

No environment variables needed.

### Custom Domain

In your Vercel project settings → Domains → add your domain.

## Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, About, Projects, Experience, Skills, Specialization, Contact
│   └── ui/              # AnimatedSection, SectionHeader, SpotlightCursor
├── data/
│   └── portfolio.ts     # ← Edit this file to update content
├── lib/
│   └── utils.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Sections

| Section | Description |
|---|---|
| Hero | Animated entrance with name, tagline, CTA buttons |
| About | Bio, stats, engineering pillars |
| Projects | Interactive cards with hover highlights, tech badges |
| Specialization | AI Systems + Full-Stack deep-dive panels |
| Experience | Timeline with roles, achievements, tech |
| Skills | Categorized skill grid + marquee |
| Contact | Email copy, social links, contact form |

## Performance

- Code-split vendor and animation bundles
- Scroll-triggered animations (no layout shift)
- `once: true` on all IntersectionObserver hooks
- Images lazy-loaded via native browser behavior
- Google Fonts preconnected in `index.html`
