# Ilyas Shaikh — Cloud Data Engineer Portfolio

A stunning, animated portfolio website built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Animated Hero** with particle network background and typing effect
- **Dark/Light Mode** with smooth theme toggle
- **Smooth Scroll Navigation** with active section tracking
- **Responsive Design** — works on all devices
- **Static Export** — ultra-fast loading (~1.4MB total)
- **Framer Motion Animations** — scroll-triggered reveals, hover effects, transitions
- **Certificate Modal** with interactive navigation
- **Expandable Project Highlights**
- **SEO Optimized** with Open Graph and Twitter meta tags

## Sections

1. **Hero** — Name, title, animated typing, social links
2. **About** — Summary with key stats (1.5+ years, 99.9% uptime, 80% work reduced)
3. **Skills** — Categorized by Data Engineering, Cloud & DevOps, Programming, Databases, Security
4. **Experience** — Timeline with Drona Pay, Extion Infotech, Edunet, Analystt.AI, Internshala
5. **Projects** — Airflow Orchestration, AI Architect, Store Analytica
6. **Certifications** — Airflow 3 Fundamentals, Data Analytics, Cybersecurity, Angular
7. **Education** — MCA, BSc, HSC + Publication
8. **Contact** — Email, LinkedIn, GitHub, Location

---

## Deploy to GitHub Pages (Step-by-Step)

### Prerequisites
- A GitHub account
- Git installed on your machine
- Node.js 18+ and Bun (or npm) installed

### Step 1: Create a New GitHub Repository

1. Go to https://github.com/new
2. Name it `ilyas829.github.io` (for username.github.io domain) OR any name like `portfolio`
3. Make it **Public**
4. Do NOT initialize with README
5. Click **Create repository**

### Step 2: Push the Code

```bash
# Navigate to the project directory
cd /path/to/portfolio

# Initialize git
git init
git add .
git commit -m "Initial portfolio commit"

# Add remote (use your repo URL)
git remote add origin https://github.com/ilyas829/portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** in the left sidebar
4. Under **Build and deployment** > **Source**, select **GitHub Actions**
5. This allows the workflow to deploy automatically

### Step 4: GitHub Actions Auto-Deploy

The `.github/workflows/deploy.yml` file is already included. It will:

1. Build the Next.js static site on every push to `main`
2. Export to static HTML/CSS/JS
3. Deploy to GitHub Pages automatically

**Your site will be live at:**
- `https://ilyas829.github.io/portfolio/` (if repo named "portfolio")
- `https://ilyas829.github.io/` (if repo named "ilyas829.github.io")

### Step 5: Custom Domain (Optional)

1. In GitHub repo > **Settings** > **Pages** > **Custom domain**
2. Enter your domain (e.g., `ilyasshaikh.dev`)
3. Add a CNAME file in the repo:
   ```bash
   echo "ilyasshaikh.dev" > public/CNAME
   ```
4. Configure DNS with your domain provider:
   - Add a CNAME record pointing to `ilyas829.github.io`

### Step 6: Update Content

To update your portfolio:

1. Edit `src/lib/portfolio-data.ts` — all your data is in one file
2. Push changes to `main` branch
3. GitHub Actions will rebuild and redeploy automatically

---

## Local Development

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# The static output will be in the `out/` directory
```

---

## Performance Optimizations

- **Static Export** — No server-side rendering, pure HTML/CSS/JS
- **Tree-shaking** — Only used code is bundled
- **Font Optimization** — Next.js automatic font optimization
- **Minimal Dependencies** — Only framer-motion + essential packages
- **CSS-in-Tailwind** — No runtime CSS, all purged at build time
- **Lazy Particle Animation** — Canvas-based, minimal GPU impact
- **No External Images** — All visual elements are CSS/code-based

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 16 | Framework |
| TypeScript | Type Safety |
| Tailwind CSS 4 | Styling |
| Framer Motion | Animations |
| shadcn/ui | UI Components |
| Lucide Icons | Icon Library |
| next-themes | Dark/Light Mode |

---

## License

MIT
