import {env} from 'cloudflare:workers';
import {reservationSchema} from '../../../lib/reservation-validation';
export async function POST(request:Request){
 const origin=request.headers.get('origin');if(origin&&origin!==new URL(request.url).origin)return Response.json({error:'Please submit from this website.'},{status:403});
 if(Number(request.headers.get('content-length')||0)>10000)return Response.json({error:'Request is too large.'},{status:413});
 let raw:unknown;try{const body=await request.text();if(body.length>10000)return Response.json({error:'Request is too large.'},{status:413});raw=JSON.parse(body)}catch{return Response.json({error:'Please check your form.'},{status:400})}
 const parsed=reservationSchema.safeParse(raw);if(!parsed.success)return Response.json({error:parsed.error.issues[0].message},{status:400});
 if(!env.DB)return Response.json({error:'Reservations are temporarily unavailable. Please try again later.'},{status:503});
 const v=parsed.data;const email=v.email.toLowerCase();
 try{
  const existing=await env.DB.prepare('SELECT id,email FROM reservations WHERE id = ?').bind(v.requestId).first<{id:string;email:string}>();
  if(existing){if(existing.email!==email)return Response.json({error:'Please start a new reservation request.'},{status:409});return Response.json({reference:existing.id,status:'requested'})}
  const count=await env.DB.prepare('SELECT count(*) AS total FROM reservations WHERE email = ? AND created_at > ?').bind(email,new Date(Date.now()-3600000).toISOString()).first<{total:number}>();
  if((count?.total||0)>=5)return Response.json({error:'You have submitted several requests. Please try again in an hour.'},{status:429});
  await env.DB.prepare('INSERT INTO reservations (id,name,email,phone,date,time,guests,notes,status,created_at) VALUES (?,?,?,?,?,?,?,?,?,?)').bind(v.requestId,v.name,email,v.phone,v.date,v.time,v.guests,v.notes,'requested',new Date().toISOString()).run();
  return Response.json({reference:v.requestId,status:'requested'},{status:201,headers:{'Cache-Control':'no-store'}});
 }catch{return Response.json({error:'Your request could not be saved. Please try again.'},{status:503})}
}
