'use client';
import { useState, useEffect } from 'react';
import { ApiConfig } from '@/lib/types';
import { saveApiConfig, getApiConfig } from '@/lib/storage';
import { testConnection } from '@/lib/api';
import Link from 'next/link';
export default function SettingsPage(){
  const [config,setConfig]=useState<ApiConfig>({provider:'gemini',apiKey:'',model:'gemini-3.8-flash',baseUrl:'https://generativelanguage.googleapis.com/v1beta/openai/'});
  const [status,setStatus]=useState<{ok?:boolean,msg?:string,latency?:number}>({});
  const [testing,setTesting]=useState(false);
  useEffect(()=>{const s=getApiConfig();if(s)setConfig(s);},[]);
  const handleTest=async()=>{
    if(!config.apiKey){setStatus({ok:false,msg:'Gagal: API Key kosong'});return;}
    setTesting(true);
    const res=await testConnection(config);
    setTesting(false);
    if(res.ok){setStatus({ok:true,msg:`✅ Terhubung - ${config.provider==='gemini'?'Gemini 3.8 Flash':'OpenAI Compatible'} - Latensi ${res.latency}ms`,latency:res.latency});}
    else setStatus({ok:false,msg:`Gagal: ${res.error}`});
  };
  const handleSave=()=>{saveApiConfig({...config,connected:status.ok,latency:status.latency,lastTestedAt:new Date().toISOString()});alert('Konfigurasi disimpan!');};
  return(
    <div className="min-h-screen bg-white">
      <header className="h-16 border-b flex items-center px-6 justify-between"><Link href="/app" className="soft-btn px-3 py-1.5 rounded-xl border text-sm">← Daftar</Link><div className="font-black">Pengaturan API - Kiki & Tora • Guest Mode</div><div className="w-20"></div></header>
      <main className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-black">Pengaturan API</h1>
        <p className="text-sm text-slate-500 mt-1">Hubungkan DIMSTORY dengan Gemini 3.8 Flash / OpenAI Compatible. Key disimpan lokal di browser, aman.</p>
        <div className="mt-8 bg-white border rounded-[24px] p-6 shadow-sm">
          <label className="text-sm font-semibold">Provider</label>
          <select value={config.provider} onChange={e=>setConfig({...config,provider:e.target.value as any,model:e.target.value==='gemini'?'gemini-3.8-flash':'gpt-4o-mini'})} className="mt-2 w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none"><option value="gemini">Gemini 3.8 Flash (Rekomendasi)</option><option value="openai-compatible">OpenAI Compatible (Groq, Ollama)</option></select>
          {config.provider==='gemini'&&<div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-800">Endpoint: <code>https://generativelanguage.googleapis.com/v1beta/openai/</code><br/>Model: <code>gemini-3.8-flash</code> - Dapatkan gratis di aistudio.google.com/app/apikey</div>}
          <div className="mt-6"><label className="text-sm font-semibold">API Key</label><input type="password" value={config.apiKey} onChange={e=>setConfig({...config,apiKey:e.target.value})} placeholder="sk-... atau AIza..." className="mt-2 w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none"/></div>
          <div className="mt-4"><label className="text-sm font-semibold">Model</label><input value={config.model} onChange={e=>setConfig({...config,model:e.target.value})} className="mt-2 w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 outline-none"/></div>
          {config.provider==='openai-compatible'&&<div className="mt-4"><label className="text-sm font-semibold">Base URL</label><input value={config.baseUrl} onChange={e=>setConfig({...config,baseUrl:e.target.value})} placeholder="https://api.openai.com/v1" className="mt-2 w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 outline-none"/></div>}
          <div className="mt-6 flex gap-3"><button onClick={handleTest} disabled={testing} className="soft-btn flex-1 py-2.5 rounded-xl bg-white border text-sm font-semibold hover:border-blue-300 hover:bg-blue-50">{testing?'Mengecek...':'Test Koneksi'}</button><button onClick={handleSave} className="soft-btn flex-1 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-lg">Simpan</button></div>
          {status.msg&&<div className={`mt-4 rounded-xl p-3 text-sm border ${status.ok?'bg-green-50 border-green-200 text-green-800':'bg-red-50 border-red-200 text-red-800'}`}><div className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${status.ok?'bg-green-500':'bg-red-500'}`}></span>{status.msg}</div></div>}
        </div>
        <div className="mt-6 bg-slate-50 border rounded-xl p-4 text-xs text-slate-600"><div className="font-bold">Mode Pengunjung:</div><div>Tanpa API Key pun bisa lihat demo Kiki & Tora 12 scene di /app/story/demo. Untuk generate cerita baru butuh API Key Gemini 3.8 Flash.</div></div>
      </main>
    </div>
  );
}
