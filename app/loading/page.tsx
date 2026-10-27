"use client";
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
const TEXTS=["Menulis fabel Kelinci & Kura-kura...","Mendesain Kiki si Kelinci sombong rompi merah...","Mendesain Tora si Kura-kura bijak kacamata...","Melukis 12 scene portrait 9:16...","Menambahkan dialog Bahasa Indonesia...","Hampir jadi..."];
function Content(){
  const params=useSearchParams();
  const prompt=params.get('prompt')||'Si Kelinci yang Sombong dan Kura-kura';
  const router=useRouter();
  const [idx,setIdx]=useState(0);
  const [progress,setProgress]=useState(0);
  useEffect(()=>{
    const t1=setInterval(()=>setIdx(i=>(i+1)%TEXTS.length),1200);
    const t2=setInterval(()=>setProgress(p=>p>=100?100:p+100/60),100);
    const t3=setTimeout(()=>router.push(`/app/story/new?prompt=${encodeURIComponent(prompt)}`),6200);
    return()=>{clearInterval(t1);clearInterval(t2);clearTimeout(t3);};
  },[prompt,router]);
  return(
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <div className="relative"><div className="w-[200px] h-[140px] relative"><div className="absolute inset-0 bg-blue-600 rounded-r-2xl shadow-xl"></div><div className="absolute left-1 top-1 bottom-1 w-[96%] bg-white rounded-r-xl border flex"><div className="w-1/2 border-r animate-pulse bg-white"></div><div className="w-1/2 bg-slate-50"></div></div></div></div>
      <h1 className="mt-10 text-2xl font-black">DIMSTORY meracik fabel Kiki & Tora...</h1>
      <p className="mt-2 text-sm text-slate-500 h-5">{TEXTS[idx]}</p>
      <div className="mt-8 w-[320px] h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all" style={{width:`${progress}%`}}></div></div>
      <div className="mt-4 text-xs text-slate-400 italic max-w-md text-center">Ide: {prompt}</div>
    </div>
  );
}
export default function LoadingPage(){return <Suspense><Content/></Suspense>;}
