"use client";
import Link from 'next/link';
import { useState } from 'react';
export default function Landing(){
  const [menu,setMenu]=useState(false);
  return(
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2"><div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">D</div><span className="font-black text-xl">DIMSTORY</span><span className="hidden md:inline ml-3 text-[11px] px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold">Kiki & Tora</span></div>
          <nav className="hidden md:flex gap-8 text-sm text-slate-600"><a href="#fitur" className="hover:text-slate-900">Fitur</a><a href="#cara" className="hover:text-slate-900">Cara Kerja</a><a href="#showcase" className="hover:text-slate-900">Showcase</a><a href="#faq" className="hover:text-slate-900">FAQ</a></nav>
          <div className="flex items-center gap-3"><span className="hidden md:flex items-center gap-2 text-xs"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span><span className="text-slate-500">Guest Mode</span></span><Link href="/welcome" className="soft-btn px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-semibold hover:border-blue-300 hover:bg-blue-50">Masuk sebagai Pengunjung</Link><Link href="/app/create" className="soft-btn px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700">Coba Gratis</Link><button onClick={()=>setMenu(!menu)} className="md:hidden w-9 h-9 rounded-xl border">☰</button></div>
        </div>
        {menu&&<div className="md:hidden border-t bg-white px-6 py-4 flex flex-col gap-3 text-sm"><a href="#fitur">Fitur</a><a href="#cara">Cara Kerja</a><a href="#showcase">Showcase</a><a href="#faq">FAQ</a></div>}
      </header>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white"></div>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100 rounded-full blur-[120px] opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">
          <div className="inline-flex gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700"><span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>Cerita Baru: Si Kelinci yang Sombong dan Kura-kura - Fabel Klasik</div>
          <h1 className="mt-8 text-[42px] md:text-[64px] font-black leading-[0.9]">Si Kelinci Sombong<br/>dan Kura-kura<br/><span className="text-blue-600">9:16</span> Siap Upload</h1>
          <p className="mt-6 max-w-2xl mx-auto text-[18px] leading-7 text-slate-600">DIMSTORY ubah fabel klasik Kiki si Kelinci sombong vs Tora si Kura-kura bijak jadi storyboard <b>3 PART x 12 SCENE</b> portrait, lengkap dialog Indonesia, prompt full, character sheet download. Tanpa Gmail, mode Pengunjung langsung pakai.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/welcome" className="group relative px-8 h-14 rounded-2xl bg-blue-600 text-white font-bold flex items-center justify-center shadow-xl shadow-blue-500/25 hover:scale-[1.02] transition-all overflow-hidden"><span className="relative z-10">✨ Buat Versi Kelinci Kura-kura Gratis</span><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div></Link>
            <Link href="#showcase" className="px-8 h-14 rounded-2xl bg-white border border-slate-200 font-semibold flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 hover:scale-[1.02] transition-all">▶️ Lihat Demo 12 Scene</Link>
          </div>
          <div className="mt-4 text-xs text-slate-500">No credit card • Mode Pengunjung • Bahasa Indonesia • Export PNG/JPG HD</div>
          <div className="mt-16 flex justify-center gap-4 md:gap-8">
            <div className="w-[160px] md:w-[220px] aspect-[9/16] rounded-[28px] bg-white border-[8px] border-slate-900 shadow-2xl rotate-[-6deg] overflow-hidden"><div className="w-full h-full bg-gradient-to-br from-orange-100 to-red-100 flex flex-col items-center justify-center p-3"><div className="text-4xl">🐰</div><div className="mt-2 text-[10px] font-bold bg-black/70 text-white px-2 py-1 rounded-full">Kiki Sombong</div><div className="mt-1 text-[9px]">Ejek Tora</div></div></div>
            <div className="w-[180px] md:w-[240px] aspect-[9/16] rounded-[28px] bg-white border-[8px] border-slate-900 shadow-2xl z-10 -mt-4 overflow-hidden"><div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex flex-col items-center justify-center p-4"><div className="text-xs font-bold bg-blue-600 text-white px-2 py-1 rounded-full">PROMPT FULL</div><div className="mt-2 text-[10px] font-mono bg-slate-900 text-green-300 p-2 rounded w-full">Visual: Kiki sleeping under tree...<br/>Dialog: Zzz...<br/>Rasio: 9:16</div></div></div>
            <div className="w-[160px] md:w-[220px] aspect-[9/16] rounded-[28px] bg-white border-[8px] border-slate-900 shadow-2xl rotate-[6deg] overflow-hidden"><div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex flex-col items-center justify-center p-3"><div className="text-4xl">🐢</div><div className="mt-2 text-[10px] font-bold bg-white px-2 py-1 rounded-full border">Tora Menang!</div><div className="mt-1 text-[9px]">Finish Line</div></div></div>
          </div>
        </div>
      </section>
      <section id="fitur" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {t:"Rasio 9:16 Native",d:"Portrait 1080x1920 siap TikTok/Reels/Shorts tanpa crop.",i:"📱"},
            {t:"Prompt Full per Scene",d:"Adegan + dialog + negative + rasio. Copy ke Veo 3 / Luma.",i:"📝"},
            {t:"Character Kiki & Tora",d:"Front/side/back + prompt konsistensi. Download PNG.",i:"🎨"},
            {t:"Guest Mode No Gmail",d:"Masuk sebagai Pengunjung, data di browser, tanpa login.",i:"👤"},
            {t:"BYO API Gemini 3.8 Flash",d:"Hubungkan Gemini 3.8 Flash / OpenAI Compatible. Test hijau/merah.",i:"🔌"},
            {t:"Export HD",d:"Export PNG/JPG HD 2x, nama file auto.",i:"💾"},
          ].map(f=><div key={f.t} className="card-hover bg-white border border-slate-200 rounded-[20px] p-6"><div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">{f.i}</div><div className="mt-4 font-bold">{f.t}</div><div className="mt-2 text-sm text-slate-600 leading-6">{f.d}</div></div>)}
        </div>
      </section>
      <section id="cara" className="bg-slate-50 border-y border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-6"><h2 className="text-3xl font-black text-center">Cara Kerja - 3 Langkah</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border rounded-[20px] p-6 text-center"><div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-black mx-auto">1</div><div className="mt-4 font-bold">MAU BUAT CERITA APA?</div><div className="text-sm text-slate-600 mt-2">Tulis judul: Si Kelinci Sombong dan Kura-kura. Pilih gaya Pixar Chibi.</div></div>
            <div className="bg-white border rounded-[20px] p-6 text-center"><div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-black mx-auto">2</div><div className="mt-4 font-bold">Loading Buku Terbuka</div><div className="text-sm text-slate-600 mt-2">AI meracik fabel Kiki & Tora, melukis 12 scene 9:16.</div></div>
            <div className="bg-white border rounded-[20px] p-6 text-center"><div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-black mx-auto">3</div><div className="mt-4 font-bold">Hasil 9:16 Siap Export</div><div className="text-sm text-slate-600 mt-2">Dapat 3 PART + 12 gambar portrait + prompt full + character sheet + export PNG.</div></div>
          </div>
        </div>
      </section>
      <section id="showcase" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-center">Showcase: Kelinci Sombong & Kura-kura - 12 Scene 9:16</h2>
        <p className="text-center text-slate-600 mt-2">PART 1 Biru - Ejekan, PART 2 Hijau - Perlombaan, PART 3 Ungu - Kemenangan & Hikmah</p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({length:12}).map((_,i)=><div key={i} className="aspect-[9/16] rounded-2xl bg-white border border-slate-200 shadow-sm p-3 flex flex-col"><div className="flex justify-between text-[10px]"><span className="bg-slate-100 px-2 py-1 rounded-full">2.5s</span><span className="bg-blue-600 text-white px-2 py-1 rounded-full font-bold">SCENE {i+1}</span></div><div className="flex-1 mt-3 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl flex items-center justify-center text-2xl">{i%2===0?'🐰':'🐢'}</div><div className="mt-2 text-[11px] font-bold">Scene {i+1} - Kiki & Tora</div><div className="text-[10px] text-slate-500">{["Ejek di jalan","Tora tantang","Warga kumpul","Garis start","Kiki melesat","Kiki sombong istirahat","Kiki tidur","Tora konsisten","Tora lewat Kiki tidur","Kiki panik bangun","Tora menang","Jabat tangan hikmah"][i]}</div></div>)}
        </div>
        <div className="mt-8 text-center"><Link href="/welcome" className="soft-btn inline-flex px-6 py-3 rounded-xl bg-blue-600 text-white font-bold shadow-lg">Lihat Storyboard Lengkap + Character Sheet →</Link></div>
      </section>
      <section id="faq" className="bg-slate-50 border-y border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div><div className="text-blue-600 font-bold text-sm">FAQ</div><h2 className="text-3xl font-black mt-2">Pertanyaan yang sering ditanya tentang Kiki & Tora.</h2><p className="text-slate-600 mt-3 text-sm">Semua jawaban pakai Bahasa Indonesia santai, seperti ngobrol sama creator.</p></div>
          <div className="space-y-4">
            <details className="group bg-white border border-slate-200 rounded-2xl p-4 open:bg-blue-50/50"><summary className="flex justify-between items-center font-semibold list-none cursor-pointer">Apa itu mode pengunjung? Perlu Gmail?<span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-open:rotate-45 transition">+</span></summary><div className="mt-3 text-sm text-slate-600">Tidak perlu Gmail! Pilih Masuk sebagai Pengunjung, data cerita disimpan di browser kamu (IndexedDB). Aman, gratis, langsung pakai. Opsi Gmail cuma opsional.</div></details>
            <details className="group bg-white border border-slate-200 rounded-2xl p-4"><summary className="flex justify-between items-center font-semibold list-none cursor-pointer">Siapa itu Kiki & Tora?<span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-open:rotate-45 transition">+</span></summary><div className="mt-3 text-sm text-slate-600">Kiki = kelinci putih sombong rompi merah gold, cepat tapi sombong. Tora = kura-kura hijau bijak kacamata bulat ransel coklat, lambat tapi konsisten & rendah hati. Fabel klasik tentang kerja keras.</div></details>
            <details className="group bg-white border border-slate-200 rounded-2xl p-4"><summary className="flex justify-between items-center font-semibold list-none cursor-pointer">Rasio 9:16 itu gimana maksudnya?<span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-open:rotate-45 transition">+</span></summary><div className="mt-3 text-sm text-slate-600">Portrait 1080x1920, vertikal, pas buat TikTok, Reels, Shorts. Gak perlu crop, langsung upload HD.</div></details>
            <details className="group bg-white border border-slate-200 rounded-2xl p-4"><summary className="flex justify-between items-center font-semibold list-none cursor-pointer">Apakah perlu API Key?<span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-open:rotate-45 transition">+</span></summary><div className="mt-3 text-sm text-slate-600">Untuk lihat demo Kiki & Tora 12 scene tidak perlu API. Untuk generate cerita baru, butuh API Key Gemini 3.8 Flash (gratis di aistudio.google.com) atau OpenAI Compatible. Key aman di browser, tidak dikirim ke server kami.</div></details>
            <details className="group bg-white border border-slate-200 rounded-2xl p-4"><summary className="flex justify-between items-center font-semibold list-none cursor-pointer">Bisa ganti cerita lain selain Kelinci & Kura-kura?<span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-open:rotate-45 transition">+</span></summary><div className="mt-3 text-sm text-slate-600">Bisa! Tulis judul bebas di MAU BUAT CERITA APA, misal Misi Selamatkan Layang-layang, Petualangan di Hutan Bambu, dll. Sistem akan buat 12 scene baru.</div></details>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-[32px] bg-gradient-to-br from-blue-600 to-blue-700 p-10 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px]"></div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div><h2 className="text-3xl md:text-4xl font-black leading-tight">Siap buat versi<br/>Kelinci Kura-kuramu?</h2><p className="mt-3 text-blue-100">Gratis, Guest mode, putih-biru clean, 9:16 portrait.</p></div>
            <Link href="/welcome" className="px-8 h-14 rounded-2xl bg-white text-blue-700 font-bold flex items-center justify-center hover:scale-[1.02] transition-all">Mulai Gratis Sebagai Pengunjung →</Link>
          </div>
        </div>
      </section>
      <footer className="border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 text-sm text-slate-500">
          <div><div className="font-black text-slate-900">DIMSTORY © 2026</div><div className="mt-1">Fabel Engine • Si Kelinci Sombong dan Kura-kura • White-blue clean theme</div></div>
          <div className="flex gap-6"><span>Mode Pengunjung • No Gmail</span><span>•</span><span>12 Scene • 9:16 • Bahasa Indonesia</span><span>•</span><span>Export PNG/JPG HD</span></div>
        </div>
      </footer>
    </div>
  );
}
