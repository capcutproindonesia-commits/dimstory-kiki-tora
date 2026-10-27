'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getApiConfig, getUser } from '@/lib/storage';
import Link from 'next/link';
const QUICK=["Si Kelinci yang Sombong dan Kura-kura - Versi Balap Kampung","Kelinci Tidur di Bawah Pokok Mangga","Kura-kura Menang Lomba","Versi Modern: Kelinci Pakai Sepatu Roda"];
export default function CreatePage(){
  const [prompt,setPrompt]=useState('Si Kelinci yang Sombong dan Kura-kura');
  const [apiConnected,setApiConnected]=useState(false);
  const router=useRouter();
  useEffect(()=>{const cfg=getApiConfig();setApiConnected(!!cfg?.connected);if(!getUser()) router.push('/welcome');},[router]);
  const handleGenerate=()=>{ if(!prompt.trim()) return; localStorage.setItem('dimstory_last_prompt',prompt); router.push(`/loading?prompt=${encodeURIComponent(prompt)}`); };
  return(
    <div className="min-h-screen bg-white flex flex-col">
      <header className="h-16 border-b border-slate-200 flex items-center px-6 justify-between bg-white/80 backdrop-blur sticky top-0"><Link href="/app" className="soft-btn px-3 py-1.5 rounded-xl bg-white border text-sm">← Daftar</Link><div className="font-black">DIMSTORY - Kiki & Tora</div><Link href="/app/settings" className="soft-btn px-3 py-1.5 rounded-xl bg-white border text-sm">⚙️ API</Link></header>
      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-12">
        <h1 className="text-[48px] font-black tracking-tight leading-[0.9] text-center">MAU BUAT<br/>CERITA APA?</h1>
        <p className="text-center text-slate-500 mt-4 text-[18px]">Fabel Kelinci Sombong & Kura-kura • 9:16 portrait • Bahasa Indonesia • Guest Mode</p>
        {!apiConnected&&<div className="mt-8 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-2xl p-4 text-sm flex gap-3"><span>⚠️</span><div>API belum terhubung. Atur di <Link href="/app/settings" className="underline font-bold">Pengaturan API</Link> dulu. Atau pakai demo Kiki & Tora tanpa API di <Link href="/app/story/demo" className="underline">Lihat Demo</Link>.</div></div>}
        <div className="mt-8"><textarea value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="Contoh: Si Kelinci yang Sombong dan Kura-kura versi hutan bambu..." className="w-full min-h-[160px] rounded-[16px] border-2 border-slate-200 bg-white p-5 text-[16px] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none" maxLength={500}/><div className="text-right text-xs text-slate-400 mt-2">{prompt.length}/500</div>
          <div className="mt-4 flex flex-wrap gap-2">{QUICK.map(q=><button key={q} onClick={()=>setPrompt(q)} className="soft-btn px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs hover:border-blue-300 hover:bg-blue-50">{q}</button>)}</div>
          <div className="mt-8 grid grid-cols-3 gap-3"><div className="rounded-xl border p-3 bg-slate-50"><div className="text-[11px] text-slate-500">Gaya</div><div className="font-semibold text-sm">Pixar 3D Chibi</div></div><div className="rounded-xl border border-blue-200 p-3 bg-blue-50"><div className="text-[11px] text-blue-600">Rasio</div><div className="font-bold text-sm text-blue-700">9:16 Portrait</div></div><div className="rounded-xl border p-3 bg-slate-50"><div className="text-[11px] text-slate-500">Cerita</div><div className="font-semibold text-sm">Kiki & Tora</div></div></div>
          <button onClick={handleGenerate} disabled={!prompt.trim()} className="mt-8 w-full h-14 rounded-2xl bg-blue-600 text-white font-bold text-[18px] shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all disabled:bg-slate-300 disabled:shadow-none relative overflow-hidden group"><span className="relative z-10">✨ Generate DIMSTORY - Kiki & Tora</span><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div></button>
        </div>
      </main>
    </div>
  );
}
