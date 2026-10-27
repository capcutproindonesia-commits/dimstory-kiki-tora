# DEPLOY GUIDE - DIMSTORY Kiki & Tora

File ini untuk owner yang mau deploy ke Netlify. Jangan tampilkan di landing page untuk user biasa.

## Deploy ke Netlify

### Option 1: GitHub Connect (Recommended)
1. Push folder ini ke GitHub repo baru
2. Buka https://app.netlify.com/start -> Connect GitHub
3. Build command: npm run build
4. Publish directory: .next
5. Node version 18 (sudah di netlify.toml)
6. Deploy

### Option 2: CLI
npm install -g netlify-cli
netlify login
npm install
netlify init
# Build: npm run build, Publish: .next
netlify deploy --prod

### File Penting untuk Deploy
- netlify.toml (config)
- package.json (ada @netlify/plugin-nextjs)
- next.config.mjs

### ENV (Opsional)
Jika mau proxy aman, isi GEMINI_API_KEY di Netlify Dashboard -> Environment variables

### Catatan
Jangan sebut kata Netlify di landing page UI. Landing page harus bersih consumer SaaS.
