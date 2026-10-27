import { get, set, keys } from 'idb-keyval';
import { Story, ApiConfig, User } from './types';
const PREFIX='dimstory_story_';
const API_KEY='dimstory_api_config';
const USER_KEY='dimstory_user';
export async function saveStory(s:Story){await set(PREFIX+s.id,s);}
export async function getStory(id:string){return await get(PREFIX+id) as Story|undefined;}
export async function getAllStories(){const all=await keys();const sk=all.filter(k=>typeof k==='string'&&(k as string).startsWith(PREFIX)) as string[];const res:Story[]=[];for(const k of sk){const s=await get(k) as Story;if(s)res.push(s);}return res.sort((a,b)=>new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime());}
export async function deleteStory(id:string){const {del}=await import('idb-keyval');await del(PREFIX+id);}
export function saveApiConfig(c:ApiConfig){if(typeof window!=='undefined')localStorage.setItem(API_KEY,JSON.stringify(c));}
export function getApiConfig():ApiConfig|null{if(typeof window==='undefined')return null;const r=localStorage.getItem(API_KEY);if(!r)return null;try{return JSON.parse(r);}catch{return null;}}
export function saveUser(u:User){if(typeof window!=='undefined')localStorage.setItem(USER_KEY,JSON.stringify(u));}
export function getUser():User|null{if(typeof window==='undefined')return null;const r=localStorage.getItem(USER_KEY);if(!r)return null;try{return JSON.parse(r);}catch{return null;}}
export function logout(){if(typeof window!=='undefined'){localStorage.removeItem(USER_KEY);}}
