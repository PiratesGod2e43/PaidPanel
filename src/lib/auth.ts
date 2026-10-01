import { cookies } from 'next/headers';
import { SignJWT,jwtVerify } from 'jose';
const raw=process.env.SESSION_SECRET;
if(!raw || raw.length<32) console.warn('SESSION_SECRET must be set to a random 32+ character secret');
const key=new TextEncoder().encode(raw||'development-only-secret-change-me-32chars');
export async function setSession(userId:string,role:string){const token=await new SignJWT({role}).setProtectedHeader({alg:'HS256'}).setSubject(userId).setIssuedAt().setExpirationTime('7d').sign(key);(await cookies()).set('pn_session',token,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',path:'/',maxAge:604800});}
export async function getSession(){const token=(await cookies()).get('pn_session')?.value;if(!token)return null;try{const {payload}=await jwtVerify(token,key);if(!payload.sub)return null;return {id:payload.sub,role:String(payload.role||'CUSTOMER')};}catch{return null;}}
export async function requireRoles(roles:string[]){const s=await getSession();return s&&roles.includes(s.role)?s:null;}
