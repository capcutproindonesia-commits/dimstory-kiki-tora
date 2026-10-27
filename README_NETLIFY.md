# DIMSTORY - Kelinci Sombong & Kura-kura - Netlify Deploy

## Full File Siap Deploy

### Isi Cerita: Si Kelinci yang Sombong dan Kura-kura (Kiki & Tora)
- 12 scene 9:16 portrait
- Character sheet Kiki (kelinci putih rompi merah) & Tora (kura-kura hijau kacamata)
- Prompt full per scene (adegan + dialog Bahasa Indonesia + rasio 9:16)
- Export PNG/JPG HD
- Guest Mode (Tanpa Gmail, langsung sebagai Pengunjung)

### Deploy ke Netlify

#### Option 1: GitHub Connect (Recommended)
1. Extract zip
2. Push ke GitHub repo baru
3. https://app.netlify.com/start -> Connect GitHub
4. Build command: npm run build
5. Publish directory: .next
6. Node version 18 (sudah di netlify.toml)
7. Deploy!

#### Option 2: Netlify CLI
npm install -g netlify-cli
netlify login
npm install
netlify init
# Build: npm run build, Publish: .next
netlify deploy --prod

#### Option 3: Manual
npm install
npm run build
# Drag .next folder ke https://app.netlify.com/drop

### Routes
/ -> Landing page Kelinci Kura-kura putih-biru
/welcome -> Pilih Guest atau Gmail (opsional)
/app -> Daftar cerita (Library)
/app/create -> MAU BUAT CERITA APA (default Kiki & Tora)
/app/settings -> API Gemini 3.8 Flash / OpenAI Compatible + Test Koneksi hijau/merah
/app/story/demo -> Demo storyboard Kiki & Tora 12 scene 9:16 + character sheet download
/loading -> Animasi buku terbuka

### Fitur
- Rasio 9:16 native 1080x1920
- Prompt full per scene
- Character sheet download
- Export HD
- BYO API Key aman di localStorage
- UI putih-biru soft animasi hover:scale-[1.02] shadow-blue-500/20
- Guest mode no login

### Local Dev
npm install
npm run dev
# http://localhost:3000 -> landing
# http://localhost:3000/app -> app
