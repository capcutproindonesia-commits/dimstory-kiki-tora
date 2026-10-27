"use client";
import { useEffect, useState } from 'react';
import { getAllStories, getApiConfig, deleteStory, getUser, logout } from '@/lib/storage';
import { Story, ApiConfig, User } from '@/lib/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Library(){
  const [stories,setStories]=useState<Story[]>([]);
  const [api,setApi]=useState<ApiConfig|null>(null);
  const [user,setUser]=useState<User|null>(null);
  const [search,setSearch]=useState('');
  const router=useRouter();
  useEffect(()=>{
    getAllStories().then(setStories);
    setApi(getApiConfig());
    const u=getUser();
    if(!u){router.push('/welcome'); return;}
    setUser(u);
  },[router]);
  const filtered=stories.filter(s=>s.title.toLowerCase().includes(search.toLowerCase()));
  if(!user) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  return(
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3"><div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">D</div><div><div className="font-black text-xl">DIMSTORY</div><div className="text-[11px] text-slate-500 -mt-1">Kelinci Sombong & Kura-kura</div></div></div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs"><span className="w-7 h-7 rounded-full bg-blue-50 border flex items-center justify-center">👤</span><span className="hidden md:inline font-semibold">{user.name}</span><span className="text-[10px] px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">Guest</span></div>
            <div className="flex items-center gap-2 text-xs"><span className={`w-2 h-2 rounded-full ${api?.connected?'bg-green-500':'bg-red-500'}`}></span><span className={api?.connected?'text-green-700':'text-slate-500'}>{api?.connected?`Terhubung ${api.latency}ms`:'Belum Terhubung'}</span></div>
            <Link href="/app/settings" className="soft-btn px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm">⚙️ API</Link>
            <Link href="/app/create" className="soft-btn px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow-lg shadow-blue-500/20">+ Buat Cerita Baru</Link>
            <button onClick={()=>{logout();router.push('/welcome');}} className="px-3 py-2 rounded-xl bg-white border text-xs">Keluar</button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8"><h1 className="text-3xl font-black">Daftar Cerita</h1><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Cari cerita..." className="w-72 px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"/></div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Link href="/app/create" className="group border-2 border-dashed border-blue-300 bg-blue-50/50 rounded-[20px] p-8 flex flex-col items-center justify-center min-h-[320px] hover:bg-blue-50 hover:border-blue-400 hover:scale-[1.01] transition-all"><div className="w-14 h-14 rounded-2xl bg-white border border-blue-200 flex items-center justify-center text-2xl group-hover:scale-110 transition">+</div><div className="mt-4 font-bold text-blue-700">Buat Cerita Baru</div><div className="text-xs text-slate-500 mt-1">Kiki & Tora • 9:16</div></Link>
          {filtered.length===0 && (
            <div className="bg-white border border-slate-200 rounded-[20px] overflow-hidden card-hover">
              <div className="aspect-[9/16] bg-gradient-to-br from-orange-50 to-green-50 flex flex-col items-center justify-center p-6"><div className="text-5xl">🐰🐢</div><div className="mt-3 text-xs font-bold bg-black/70 text-white px-2 py-1 rounded-full">9:16 • 12 Scene</div><div className="mt-2 text-[11px] text-center">Si Kelinci yang Sombong dan Kura-kura</div></div>
              <div className="p-4"><div className="font-bold">Si Kelinci yang Sombong dan Kura-kura</div><div className="text-xs text-slate-500 mt-1">28 Okt 2026 • Fabel Klasik</div><div className="flex gap-2 mt-3"><Link href="/app/story/demo" className="flex-1 soft-btn text-center py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold">Lihat Demo</Link><Link href="/app/create" className="soft-btn px-3 py-2 rounded-xl bg-white border border-slate-200 text-sm">Buat Baru</Link></div></div>
            </div>
          )}
          {filtered.map(s=>(
            <div key={s.id} className="card-hover bg-white border border-slate-200 rounded-[20px] overflow-hidden">
              <div className="aspect-[9/16] bg-slate-100 relative overflow-hidden"><div className="w-full h-full flex items-center justify-center text-3xl">📖</div><div className="absolute top-3 left-3 bg-black/70 text-white text-[11px] px-2 py-1 rounded-full">9:16 • 12 Scene</div></div>
              <div className="p-4"><div className="font-bold line-clamp-2">{s.title}</div><div className="text-xs text-slate-500 mt-1">{new Date(s.createdAt).toLocaleDateString('id-ID')}</div><div className="flex gap-2 mt-3"><Link href={`/app/story/${s.id}`} className="flex-1 soft-btn text-center py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold">Lihat</Link><button onClick={async()=>{await deleteStory(s.id);setStories(await getAllStories());}} className="soft-btn px-3 py-2 rounded-xl bg-white border text-sm">Hapus</button></div></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
