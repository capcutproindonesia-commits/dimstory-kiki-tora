"use client";
import Link from 'next/link';
import { useState } from 'react';

const scenes = [
  { id: 1, title: "Ejek di jalan", char: "Kiki Sombong", img: "/images/kelinci/scene-01.webp", color: "from-orange-100 to-red-100" },
  { id: 2, title: "Tora tantang", char: "Tora Tantang", img: "/images/kelinci/scene-02.webp", color: "from-green-100 to-emerald-100" },
  { id: 3, title: "Warga kumpul", char: "Penonton", img: "/images/kelinci/scene-03.webp", color: "from-yellow-100 to-orange-100" },
  { id: 4, title: "Garis start", char: "Start", img: "/images/kelinci/scene-04.webp", color: "from-blue-100 to-indigo-100" },
  { id: 5, title: "Kiki melesat", char: "Melesat Cepat", img: "/images/kelinci/scene-05.webp", color: "from-red-100 to-pink-100" },
  { id: 6, title: "Kiki sombong istirahat", char: "Sombong", img: "/images/kelinci/scene-06.webp", color: "from-orange-100 to-amber-100" },
  { id: 7, title: "Kiki tidur", char: "Tidur Mangga", img: "/images/kelinci/scene-07.webp", color: "from-green-100 to-lime-100" },
  { id: 8, title: "Tora konsisten", char: "Konsisten", img: "/images/kelinci/scene-08.webp", color: "from-emerald-100 to-teal-100" },
  { id: 9, title: "Tora lewat Kiki tidur", char: "Lewat Diam", img: "/images/kelinci/scene-09.webp", color: "from-teal-100 to-cyan-100" },
  { id: 10, title: "Kiki panik bangun", char: "Panik!", img: "/images/kelinci/scene-10.webp", color: "from-red-100 to-rose-100" },
  { id: 11, title: "Tora menang", char: "Juara!", img: "/images/kelinci/scene-11.webp", color: "from-purple-100 to-violet-100" },
  { id: 12, title: "Jabat tangan hikmah", char: "Hikmah", img: "/images/kelinci/scene-12.webp", color: "from-indigo-100 to-blue-100" },
];

export default function Landing(){
  const [menu,setMenu]=useState(false);
  return(
    <div className="min-h-screen bg-white text-slate-900">
      <style>{`
        .soft-btn{transition: all .2s ease}
        .card-hover{transition: all .25s ease}
        .card-hover:hover{transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,.08); border-color: #93c5fd}
        .phone-shadow{box-shadow: 0 25px 60px rgba(0,0,0,.25), 0 0 0 1px rgba(0,0,0,.1)}
      `}</style>
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2"><div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">D</div><span className="font-black text-xl tracking-tight">DIMSTORY</span><span className="hidden md:inline ml-3 text-[11px] px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold">Kiki & Tora • Full HD</span></div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600"><a href="#fitur" className="hover:text-slate-900">Fitur</a><a href="#cara" className="hover:text-slate-900">Cara Kerja</a><a href="#showcase" className="hover:text-slate-900">Showcase 12 Scene</a><a href="#faq" className="hover:text-slate-900">FAQ</a></nav>
          <div className="flex items-center gap-3"><span className="hidden md:flex items-center gap-2 text-xs"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span><span className="text-slate-500 font-medium">Guest Mode ON</span></span><Link href="/welcome" className="soft-btn px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-semibold hover:border-blue-300 hover:bg-blue-50">Masuk sebagai Pengunjung</Link><Link href="/app/create" className="soft-btn px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-500/25 hover:bg-blue-700">Coba Gratis</Link><button onClick={()=>setMenu(!menu)} className="md:hidden w-9 h-9 rounded-xl border border-slate-200">☰</button></div>
        </div>
        {menu&&<div className="md:hidden border-t bg-white px-6 py-4 flex flex-col gap-3 text-sm font-medium"><a href="#fitur">Fitur</a><a href="#cara">Cara Kerja</a><a href="#showcase">Showcase</a><a href="#faq">FAQ</a></div>}
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/90 via-indigo-50/40 to-white"></div>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-200 rounded-full blur-[140px] opacity-40"></div>
        <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-purple-200 rounded-full blur-[100px] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10 md:pt-24 md:pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 shadow-sm text-xs font-bold text-blue-700"><span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>Cerita Baru: Si Kelinci yang Sombong dan Kura-kura - Fabel Klasik • Full 9:16 HD</div>
          <h1 className="mt-8 text-[38px] md:text-[62px] font-black leading-[0.9] tracking-tight">Si Kelinci Sombong<br/>dan Kura-kura<br/><span className="text-blue-600">9:16 Siap Upload</span></h1>
          <p className="mt-6 max-w-2xl mx-auto text-[17px] md:text-[18px] leading-7 text-slate-600">DIMSTORY ubah fabel klasik <b>Kiki si Kelinci sombong vs Tora si Kura-kura bijak</b> jadi storyboard <b>3 PART x 12 SCENE</b> portrait HD, lengkap dialog Indonesia, prompt full, character sheet download. Tanpa Gmail, mode Pengunjung langsung pakai.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/welcome" className="group relative px-8 h-[56px] rounded-2xl bg-blue-600 text-white font-bold flex items-center justify-center shadow-xl shadow-blue-500/30 hover:scale-[1.02] transition-all overflow-hidden"><span className="relative z-10">✨ Buat Versi Kelinci Kura-kura Gratis</span><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div></Link>
            <Link href="#showcase" className="px-8 h-[56px] rounded-2xl bg-white border border-slate-200 font-semibold flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 hover:scale-[1.02] transition-all shadow-sm">▶️ Lihat Demo 12 Scene HD</Link>
          </div>
          <div className="mt-4 text-xs text-slate-500">No credit card • Mode Pengunjung • Bahasa Indonesia • Export PNG/JPG HD • 12 Gambar Portrait Real</div>
          
          <div className="mt-16 md:mt-20 flex justify-center gap-3 md:gap-8 items-end">
            <div className="w-[130px] md:w-[220px] aspect-[9/16] rounded-[24px] md:rounded-[32px] bg-white border-[6px] md:border-[8px] border-slate-900 phone-shadow rotate-[-8deg] overflow-hidden group">
              <img src="/images/kelinci/scene-01.webp" alt="Kiki Sombong" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <div className="text-[10px] font-bold bg-black/60 text-white px-2 py-1 rounded-full inline-block backdrop-blur">Kiki Sombong</div>
              </div>
            </div>
            <div className="w-[150px] md:w-[260px] aspect-[9/16] rounded-[24px] md:rounded-[32px] bg-white border-[6px] md:border-[8px] border-slate-900 phone-shadow z-10 -mb-6 overflow-hidden relative group">
              <img src="/images/kelinci/scene-07.webp" alt="Kiki Tidur" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute top-3 left-3 right-3">
                <div className="text-[10px] font-bold bg-blue-600 text-white px-2.5 py-1 rounded-full inline-block">PROMPT FULL</div>
                <div className="mt-2 text-[9px] font-mono bg-slate-900/90 text-green-300 p-2.5 rounded-xl backdrop-blur">Visual: Kiki sleeping under mango tree...<br/>Dialog: Zzz...<br/>Rasio: 9:16 • HD</div>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-white font-bold text-xs">Kiki Tidur di Bawah Mangga</div>
                <div className="text-white/70 text-[10px]">Scene 7 • 2.5s • Pixar Chibi</div>
              </div>
            </div>
            <div className="w-[130px] md:w-[220px] aspect-[9/16] rounded-[24px] md:rounded-[32px] bg-white border-[6px] md:border-[8px] border-slate-900 phone-shadow rotate-[8deg] overflow-hidden group relative">
              <img src="/images/kelinci/scene-11.webp" alt="Tora Menang" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <div className="text-[10px] font-bold bg-white text-slate-900 px-2 py-1 rounded-full inline-block">Tora Menang! 🏆</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fitur" className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {t:"Rasio 9:16 Native HD",d:"Portrait 1080x1920 asli, bukan crop. Siap TikTok/Reels/Shorts.",i:"📱"},
            {t:"Prompt Full per Scene",d:"Adegan + dialog + negative + rasio. Copy ke Veo 3 / Luma / Pika.",i:"📝"},
            {t:"Character Kiki & Tora Real",d:"Kiki rompi merah, Tora kacamata. Front/side/back konsisten.",i:"🎨"},
            {t:"Guest Mode No Gmail",d:"Masuk sebagai Pengunjung, data di browser, tanpa login.",i:"👤"},
            {t:"BYO API Gemini 3.8 Flash",d:"Hubungkan Gemini / OpenAI Compatible. Test hijau/merah.",i:"🔌"},
            {t:"Export HD 2x",d:"Export PNG/JPG HD 2x, nama file auto scene-01-12.",i:"💾"},
          ].map(f=><div key={f.t} className="card-hover bg-white border border-slate-200 rounded-[20px] p-6"><div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-xl">{f.i}</div><div className="mt-4 font-bold text-[15px]">{f.t}</div><div className="mt-2 text-[13px] text-slate-600 leading-6">{f.d}</div></div>)}
        </div>
      </section>

      <section id="cara" className="bg-slate-50 border-y border-slate-200 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black text-center">Cara Kerja - 3 Langkah Jadi 12 Scene</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-[20px] p-7 text-center shadow-sm"><div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-black mx-auto text-lg">1</div><div className="mt-4 font-bold">MAU BUAT CERITA APA?</div><div className="text-sm text-slate-600 mt-2 leading-6">Tulis judul: Si Kelinci Sombong dan Kura-kura. Pilih gaya Pixar Chibi, rasio 9:16.</div></div>
            <div className="bg-white border border-slate-200 rounded-[20px] p-7 text-center shadow-sm"><div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-black mx-auto text-lg">2</div><div className="mt-4 font-bold">Loading Buku Terbuka</div><div className="text-sm text-slate-600 mt-2 leading-6">AI meracik fabel Kiki & Tora, melukis 12 scene 9:16 HD dengan dialog.</div></div>
            <div className="bg-white border border-slate-200 rounded-[20px] p-7 text-center shadow-sm"><div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-black mx-auto text-lg">3</div><div className="mt-4 font-bold">Hasil 9:16 Siap Export</div><div className="text-sm text-slate-600 mt-2 leading-6">Dapat 3 PART + 12 gambar portrait HD + prompt full + character sheet + export PNG.</div></div>
          </div>
        </div>
      </section>

      <section id="showcase" className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-[32px] font-black text-center tracking-tight">Showcase: Kelinci Sombong & Kura-kura - 12 Scene 9:16 HD</h2>
        <p className="text-center text-slate-600 mt-3 text-sm md:text-[15px]">PART 1 Biru - Ejekan, PART 2 Hijau - Perlombaan, PART 3 Ungu - Kemenangan & Hikmah • Gambar Real Pixar Chibi</p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {scenes.map((s)=>(
            <div key={s.id} className="group bg-white border border-slate-200 rounded-[20px] shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden flex flex-col">
              <div className="flex justify-between items-center p-3 text-[10px]">
                <span className="bg-slate-100 px-2.5 py-1 rounded-full font-medium">2.5s • 9:16</span>
                <span className="bg-blue-600 text-white px-2.5 py-1 rounded-full font-bold">SCENE {s.id}</span>
              </div>
              <div className="relative aspect-[9/16] mx-3 rounded-[16px] overflow-hidden bg-slate-100">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-bold inline-block">{s.char}</div>
                </div>
              </div>
              <div className="p-3.5">
                <div className="text-[12px] font-bold leading-tight">Scene {s.id} - Kiki & Tora</div>
                <div className="text-[11px] text-slate-500 mt-1 leading-4">{s.title}</div>
                <div className="mt-2 flex gap-1.5">
                  <span className="text-[9px] px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">Prompt Full</span>
                  <span className="text-[9px] px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-100">9:16 HD</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center"><Link href="/welcome" className="soft-btn inline-flex px-8 py-3.5 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:scale-[1.02] transition-all">Lihat Storyboard Lengkap + Character Sheet HD →</Link></div>
      </section>

      <section id="faq" className="bg-slate-50 border-y border-slate-200 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div><div className="text-blue-600 font-bold text-sm tracking-wide">FAQ • FULL HD</div><h2 className="text-3xl md:text-[32px] font-black mt-3 leading-tight">Pertanyaan yang sering ditanya tentang Kiki & Tora.</h2><p className="text-slate-600 mt-4 text-sm leading-6">Semua jawaban pakai Bahasa Indonesia santai, seperti ngobrol sama creator. Versi ini sudah full HD 12 gambar real, bukan icon.</p></div>
          <div className="space-y-3">
            <details className="group bg-white border border-slate-200 rounded-2xl p-4 open:bg-blue-50/50 open:border-blue-200"><summary className="flex justify-between items-center font-semibold list-none cursor-pointer text-sm">Apa itu mode pengunjung? Perlu Gmail?<span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-open:rotate-45 transition text-slate-600">+</span></summary><div className="mt-3 text-[13px] text-slate-600 leading-6">Tidak perlu Gmail! Pilih Masuk sebagai Pengunjung, data cerita disimpan di browser kamu (IndexedDB). Aman, gratis, langsung pakai. Opsi Gmail cuma opsional.</div></details>
            <details className="group bg-white border border-slate-200 rounded-2xl p-4 open:bg-blue-50/50"><summary className="flex justify-between items-center font-semibold list-none cursor-pointer text-sm">Siapa itu Kiki & Tora? Bedanya apa?<span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-open:rotate-45 transition">+</span></summary><div className="mt-3 text-[13px] text-slate-600 leading-6">Kiki = kelinci putih sombong rompi merah gold, cepat tapi sombong. Tora = kura-kura hijau bijak kacamata bulat ransel coklat, lambat tapi konsisten & rendah hati. Fabel klasik tentang kerja keras mengalahkan kesombongan.</div></details>
            <details className="group bg-white border border-slate-200 rounded-2xl p-4 open:bg-blue-50/50"><summary className="flex justify-between items-center font-semibold list-none cursor-pointer text-sm">Rasio 9:16 itu gimana maksudnya? HD gak?<span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-open:rotate-45 transition">+</span></summary><div className="mt-3 text-[13px] text-slate-600 leading-6">Portrait 1080x1920, vertikal HD, pas buat TikTok, Reels, Shorts. Gak perlu crop, langsung upload HD. Semua 12 scene sudah 9:16 asli, bukan icon kecil.</div></details>
            <details className="group bg-white border border-slate-200 rounded-2xl p-4 open:bg-blue-50/50"><summary className="flex justify-between items-center font-semibold list-none cursor-pointer text-sm">Kenapa tadi jelek cuma icon kelinci kecil?<span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-open:rotate-45 transition">+</span></summary><div className="mt-3 text-[13px] text-slate-600 leading-6">Itu versi LITE tanpa gambar. Sekarang sudah FULL FIX: 12 gambar HD real Pixar Chibi ada di public/images/kelinci, phone mockup pakai foto asli, bukan emoji.</div></details>
            <details className="group bg-white border border-slate-200 rounded-2xl p-4 open:bg-blue-50/50"><summary className="flex justify-between items-center font-semibold list-none cursor-pointer text-sm">Bisa ganti cerita lain selain Kelinci & Kura-kura?<span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-open:rotate-45 transition">+</span></summary><div className="mt-3 text-[13px] text-slate-600 leading-6">Bisa! Tulis judul bebas di MAU BUAT CERITA APA, misal Misi Selamatkan Layang-layang. Sistem akan buat 12 scene baru dengan gaya sama.</div></details>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="rounded-[28px] md:rounded-[32px] bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 p-8 md:p-14 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-300/20 rounded-full blur-[60px]"></div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div><h2 className="text-2xl md:text-[36px] font-black leading-[1.1] tracking-tight">Siap buat versi<br/>Kelinci Kura-kuramu Full HD?</h2><p className="mt-3 text-blue-100 text-sm md:text-[15px]">Gratis, Guest mode, putih-biru clean, 9:16 portrait HD, 12 gambar real.</p></div>
            <Link href="/welcome" className="shrink-0 px-8 h-14 rounded-2xl bg-white text-blue-700 font-bold flex items-center justify-center hover:scale-[1.03] transition-all shadow-xl">Mulai Gratis Sebagai Pengunjung →</Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 text-sm text-slate-500">
          <div><div className="font-black text-slate-900">DIMSTORY © 2026 • Full HD Fixed</div><div className="mt-1 text-xs">Fabel Engine • Si Kelinci Sombong dan Kura-kura • White-blue clean • 12 Scene 9:16 Real Images</div></div>
          <div className="flex flex-wrap gap-4 md:gap-6 text-xs"><span>Mode Pengunjung • No Gmail</span><span>•</span><span>12 Scene • 9:16 HD • Bahasa Indonesia</span><span>•</span><span>Export PNG/JPG HD</span></div>
        </div>
      </footer>
    </div>
  );
}
