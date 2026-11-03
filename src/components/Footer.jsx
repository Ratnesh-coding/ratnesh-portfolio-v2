import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio'
export default function Footer() {
  const links=[['About','about'],['Skills','skills'],['Projects','projects'],['Contact','contact']]
  return <footer className="footer"><div className="container"><div className="footer-top"><button className="brand footer-brand" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}><span>RR</span><i>.</i></button><p>Building with curiosity.<br/>Growing with every iteration.</p><button className="back-top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>BACK TO TOP <ArrowUp size={15}/></button></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span><div>{links.map(([t,id])=><button key={id} onClick={()=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'})}>{t}</button>)}</div><span className="footer-made">DESIGNED TO KEEP EVOLVING <ArrowUpRight size={13}/></span></div></div></footer>
}
