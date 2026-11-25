import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Ember & Ice — Fire-led food. Ice-cold drinks.',description:'A restaurant concept for slow evenings, open-fire cooking and beautifully made drinks.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
