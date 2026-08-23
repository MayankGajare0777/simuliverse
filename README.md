# SIMULIVERSE

Cyberpunk landing page for Simuliverse — AI simulation platform.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Cloudflare Pages

### Option A: Drag & Drop (Easiest)

1. Run `npm run build`
2. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → Pages
3. Click "Create a project" → "Upload assets"
4. Drag the `dist/` folder onto the upload area
5. Click "Deploy site"
6. Add custom domain: `simuliverse.com`

### Option B: Git Integration (Auto-deploy)

1. Push this repo to GitHub
2. In Cloudflare Pages → "Connect to Git"
3. Select your repo
4. Build command: `npm run build`
5. Build output directory: `dist`
6. Click "Save and Deploy"
7. Every push to main auto-deploys

### Custom Domain

After deployment:
1. Go to Pages project → Custom domains
2. Enter `simuliverse.com`
3. Cloudflare will give you DNS records
4. Add them in BigRock (or wherever you bought the domain)
5. SSL certificate auto-provisions in minutes

## Tech Stack

- Vite + React 18
- Lenis (smooth scroll)
- GSAP + ScrollTrigger (animations)
- Vanta.js (WebGL background)
- Three.js (Vanta dependency)
