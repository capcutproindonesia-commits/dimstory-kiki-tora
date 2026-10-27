"use client";
import { useRouter } from 'next/navigation';
import { saveUser } from '@/lib/storage';
export default function Welcome(){
  const router=useRouter();
  const guest=()=>{saveUser({name:'Pengunjung',type:'guest',id:'guest-'+Date.now()});router.push('/app');};
  const gmail=()=>{saveUser({name:'User Gmail',type:'gmail',id:'gmail-'+Date.now()});router.push('/app');};
  return(
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-[24px] border border-slate-200 shadow-xl p-8">
        <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-xl mx-auto">D</div>
        <h1 className="mt-6 text-2xl font-black text-center">Selamat Datang di DIMSTORY</h1>
        <p className="mt-2 text-sm text-slate-600 text-center">Pilih cara masuk - Bisa pakai akun pengunjung tanpa Gmail. Cerita Kiki & Tora siap!</p>
        <div className="mt-8 space-y-3">
          <button onClick={guest} className="w-full h-14 rounded-2xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"><span>👤</span> Masuk sebagai Pengunjung (Guest)</button>
          <button onClick={gmail} className="w-full h-14 rounded-2xl bg-white border-2 border-slate-200 font-semibold hover:border-blue-300 hover:bg-blue-50 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"><span>📧</span> Login dengan Gmail (Opsional)</button>
        </div>
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-3 text-xs text-blue-800">
          <div className="font-bold">Mode Pengunjung:</div>
          <div className="mt-1">• Tanpa password, tanpa Gmail wajib<br/>• Data cerita disimpan di browser (IndexedDB)<br/>• Aman, gratis, langsung pakai<br/>• Cerita default: Si Kelinci Sombong & Kura-kura 9:16</div>
        </div>
        <div className="mt-4 text-center text-[11px] text-slate-400">© 2026 DIMSTORY • Fabel Klasik • Putih Biru • Kiki & Tora</div>
      </div>
    </div>
  );
}
