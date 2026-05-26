Tanisha Portfolio — static site

This project was converted into a static website using Vite.

How to preview locally:

```bash
# install deps (only if not already installed)
npm install

# run dev server
npm run dev -- --host

# build production bundle
npm run build

# preview production build
npm run preview
```

Deployment options:

- GitHub Pages: push the `dist` folder to the `gh-pages` branch or use GitHub Actions to deploy.
- Netlify / Vercel: point the deploy to the repository; set build command `npm run build` and publish directory `dist`.
- Serve statically: upload the `dist` folder to any static host or use a simple server like `npx serve dist`.

Files of interest:

- `dist/index.html` — the generated static HTML
- `dist/assets/*` — CSS/JS assets
- `public/resume.pdf` — resume file accessible at `/resume.pdf`

If you want a pure HTML/CSS version without React, say so and I'll export a single self-contained HTML file.
https://tanishaportfoli.netlify.app/
