# TrophyCase — Personal Portfolio

A minimalist, high-performance web resume built with **React + Vite + Tailwind CSS**.
Static-compiled and auto-deployed to **GitHub Pages** via GitHub Actions.

## Features

- Tabbed single-page layout: Welcome · Bio · Skills · Projects · Certifications
- Light/dark theme toggle (persists to `localStorage`, respects system preference, no flash on load)
- Responsive, accessible, reduced-motion friendly
- SEO + social-share meta tags
- One CI/CD push-to-deploy pipeline

## Make it yours

1. **Edit `src/App.jsx`** — the `CONFIG` object at the top is the single source of truth:
   ```js
   const CONFIG = {
     name: 'Dylan',
     role: 'Systems & Infrastructure',
     email: 'you@example.com',                              // ← your email
     github: 'https://github.com/your-username',            // ← your GitHub
     linkedin: 'https://www.linkedin.com/in/your-username', // ← your LinkedIn
     resume: 'resume.pdf',                                  // ← put resume.pdf in /public (or '' to hide)
   };
   ```
2. **Add your resume**: drop `resume.pdf` into `public/`. (Set `resume: ''` to hide the button.)
3. Tweak the `skillGroups`, projects, and certifications sections to taste.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint
```

## Deploy to GitHub Pages

1. Create a GitHub repo and push this project:
   ```bash
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin master
   ```
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Done. Every push to `master`/`main` runs `.github/workflows/deploy.yml`, which builds and
   publishes. The site goes live at `https://<you>.github.io/<repo>/`.

### Notes on the base path
- The workflow sets `VITE_BASE=/<repo>/` automatically, so assets resolve correctly on a project site.
- Using a **user/org site** (`<you>.github.io`) or a **custom domain**? Those serve from `/`, so set
  `VITE_BASE: /` in `.github/workflows/deploy.yml` instead.
