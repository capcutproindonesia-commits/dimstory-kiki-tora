"use client";
import { useEffect, useState } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { getStory, saveStory, getApiConfig } from '@/lib/storage';
import { Story } from '@/lib/types';
import { buildImageUrl } from '@/lib/api';
import { DEFAULT_STORY_DATA } from '@/lib/prompts';
import { exportAsPng, exportAsJpg } from '@/lib/export';
import Link from 'next/link';
export default function StoryPage(){
  const params=useParams();
  const searchParams=useSearchParams();
  const router=useRouter();
  const [story,setStory]=useState<Story|null>(null);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    (async()=>{
      const id=params.id as string;
      if(id==='demo' || id==='new'){
        const prompt=searchParams.get('prompt') || 'Si Kelinci yang Sombong dan Kura-kura';
        let data:any=DEFAULT_STORY_DATA;
        const full:Story={
          id: Date.now().toString(),
          title: data.title || prompt,
          prompt,
          logline: data.logline||'',
          createdAt: new Date().toISOString(),
          ratio: '9:16',
          totalDuration: '30s',
          characters: data.characters,
          parts: data.parts.map((p:any)=>({...p, scenes: p.scenes.map((s:any)=>({...s, imageUrl: buildImageUrl(s.image_prompt)}))})),
          status: 'completed'
        };
        if(id==='new'){ await saveStory(full); }
        setStory(full);
      } else {
        const s=await getStory(id);
        if(s) setStory(s);
      }
      setLoading(false);
    })();
  },[params.id, searchParams]);
  if(loading) return <div className="min-h-screen flex items-center justify-center">Loading fabel Kiki & Tora...</div>;
  if(!story) return <div className="min-h-screen flex items-center justify-center">Cerita tidak ditemukan</div>;
  return(
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200 h-16 flex items-center px-6 justify-between">
        <Link href="/app" className="soft-btn px-3 py-1.5 rounded-xl border border-slate-200 text-sm">← Daftar</Link>
        <div className="font-bold truncate max-w-md text-sm md:text-base">{story.title}</div>
        <div className="flex gap-2">
          <button onClick={()=>exportAsJpg('dimstory-export-area', `DIMSTORY_${story.title.replace(/\s+/g,'-')}.jpg`)} className="soft-btn px-4 py-2 rounded-xl bg-white border text-sm">JPG</button>
          <button onClick={()=>exportAsPng('dimstory-export-area', `DIMSTORY_${story.title.replace(/\s+/g,'-')}.png`)} className="soft-btn px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold shadow">PNG</button>
          <Link href="/app/create" className="soft-btn px-4 py-2 rounded-xl bg-white border text-sm">Awal</Link>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div id="dimstory-export-area" className="bg-white rounded-[24px] border border-slate-200 shadow-sm p-8">
          <div className="flex gap-2 mb-6 flex-wrap"><span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">9:16 Portrait</span><span className="px-3 py-1 rounded-full bg-slate-100 text-xs">12 Scene</span><span className="px-3 py-1 rounded-full bg-slate-100 text-xs">30s</span><span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs border border-green-200">Fabel Klasik</span><span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs border">🐰 Kiki & 🐢 Tora • Guest Mode</span></div>
          {story.parts.map(part=>(
            <div key={part.part_number} className="mb-10">
              <div className="rounded-t-2xl p-4 flex justify-between items-center text-white shadow-md" style={{background:part.color}}><div className="font-black">PART {part.part_number} - {part.title}</div><div className="text-xs text-white/80 hidden md:block">{part.summary}</div></div>
              <div className="border-x border-b border-slate-200 rounded-b-2xl p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white">
                {part.scenes.map(scene=>(
                  <div key={scene.scene_number} className="card-hover bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col">
                    <div className="flex justify-between p-3 bg-slate-50 border-b"><span className="text-[11px] px-2 py-1 rounded-full bg-slate-200">2.5s</span><span className="text-[11px] px-2 py-1 rounded-full bg-blue-600 text-white font-bold">SCENE {scene.scene_number}</span></div>
                    <div className="aspect-[9/16] bg-slate-100 m-3 rounded-xl overflow-hidden"><img src={scene.imageUrl} alt={scene.visual_description_id} className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"/></div>
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="text-[13px] text-slate-700">{scene.visual_description_id}</div>
                      <div className="mt-3 bg-blue-50 border border-blue-100 rounded-xl p-3 text-sm text-blue-900"><span className="font-bold">Dialog:</span> {scene.dialog}</div>
                      <div className="mt-3 bg-slate-900 rounded-xl p-3 relative">
                        <div className="flex justify-between items-center mb-2"><span className="text-[11px] text-green-400 font-mono font-bold">PROMPT FULL {scene.scene_number}</span><button onClick={()=>{navigator.clipboard.writeText(scene.full_prompt); alert('Disalin!');}} className="text-[11px] px-2 py-1 rounded bg-white/10 text-white hover:bg-white/20">Salin</button></div>
                        <pre className="whitespace-pre-wrap font-mono text-[11px] text-green-300 leading-relaxed">{scene.full_prompt}</pre>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-12">
            <h2 className="text-2xl font-black">CHARACTER SHEET - Kiki & Tora - Konsistensi 9:16</h2>
            <p className="text-sm text-slate-500">Download untuk konsistensi di Veo 3 / Luma / Midjourney - Guest Mode</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {story.characters.map(char=>(
                <div key={char.name} className="bg-white border border-slate-200 rounded-2xl p-6 card-hover">
                  <div className="aspect-[9/16] bg-white border border-slate-100 rounded-xl overflow-hidden mb-4 flex items-center justify-center text-6xl">{char.name==='Kiki'?'🐰':'🐢'}</div>
                  <div className="font-black text-lg">{char.name} {char.name==='Kiki'?'- Kelinci Sombong':'- Kura-kura Bijak'}</div>
                  <div className="mt-2 text-[13px] space-y-1 text-slate-700"><div><span className="font-bold">Fisik:</span> {char.physical}</div><div><span className="font-bold">Pakaian:</span> {char.clothing}</div><div><span className="font-bold">Sifat:</span> {char.personality}</div></div>
                  <div className="mt-3 bg-slate-50 border rounded-xl p-3"><div className="text-[11px] font-bold text-slate-500">PROMPT KONSISTENSI</div><div className="font-mono text-[11px] text-slate-700 mt-1">{char.consistency_prompt}</div></div>
                  <div className="flex gap-2 mt-4"><button onClick={()=>{navigator.clipboard.writeText(char.consistency_prompt); alert('Prompt disalin!');}} className="flex-1 soft-btn py-2 rounded-xl bg-white border text-sm">Copy Prompt</button><button onClick={()=>alert('Download gambar: pakai gambar asli 9:16 di folder public/images/kelinci')} className="flex-1 soft-btn py-2 rounded-xl bg-blue-600 text-white text-sm font-bold">Download Gambar</button></div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 bg-gradient-to-br from-blue-50 to-green-50 border border-blue-100 rounded-2xl p-6 text-center">
            <div className="text-2xl">🌟</div><div className="mt-2 font-black">Moral Cerita Kiki & Tora</div><div className="mt-1 text-slate-700">Pelan-pelan asal konsisten, kesombongan membawa kekalahan. Kerja keras & rendah hati kunci kemenangan.</div>
          </div>
        </div>
      </main>
    </div>
  );
}
