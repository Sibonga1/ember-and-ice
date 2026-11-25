import {z} from 'zod';
export const reservationSchema=z.object({
 requestId:z.string().uuid(), name:z.string().trim().min(2,'Please enter your name.').max(100),
 email:z.string().trim().email('Please enter a valid email address.').max(200),
 phone:z.string().trim().min(7,'Please enter a contact number.').max(30).regex(/^[+\d\s()\-]+$/,'Please check your phone number.'),
 date:z.string().regex(/^\d{4}-\d{2}-\d{2}$/),time:z.enum(['17:00','17:30','18:00','18:30','19:00','19:30','20:00']),
 guests:z.coerce.number().int().min(1).max(8),notes:z.string().trim().max(600).default(''),consent:z.literal(true),website:z.string().max(0).default(''),
}).superRefine((v,ctx)=>{const when=new Date(v.date+'T'+v.time+':00+02:00');const now=Date.now();if(!Number.isFinite(when.getTime())||when.toISOString().slice(0,10)!==v.date||when.getTime()<=now||when.getTime()>now+180*86400000)ctx.addIssue({code:z.ZodIssueCode.custom,path:['date'],message:'Choose a future date within the next six months.'})});
