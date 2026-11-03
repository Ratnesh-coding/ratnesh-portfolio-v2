import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink, X, ChevronRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolio'

function ProjectVisual({ type }) {
  return <div className={`project-visual visual-${type}`}>
    <div className="visual-top"><span>PROJECT / PREVIEW</span><span className="visual-dots">•••</span></div>
    {type==='phishing' && <div className="phish-ui"><div className="scan-orbit"><div className="scan-center">URL<br/>SCAN</div></div><div className="scan-lines"><i/><i/><i/><i/></div><span className="visual-caption">THREAT ANALYSIS</span></div>}
    {type==='finance' && <div className="finance-ui"><div className="finance-total"><small>MONTHLY OVERVIEW</small><b>₹ — — —</b><span>Expense insights</span></div><div className="finance-bars">{[36,62,48,83,56,72,44].map((v,i)=><i key={i} style={{height:`${v}%`}}/>)}</div><div className="finance-legend"><i/> TRANSACTIONS <i/> CATEGORIES</div></div>}
    {type==='farming' && <div className="farm-ui"><div className="farm-sun"/><div className="farm-hill hill-one"/><div className="farm-hill hill-two"/><div className="farm-card"><span>FIELD NOTES</span><b>Knowledge for<br/>better decisions.</b><small>ADVISORY PLATFORM</small></div></div>}
  </div>
}
export default function Projects() {
  const [active, setActive] = useState(null)
  return <section id="projects" className="section-pad section-block">
    <div className="container">
      <SectionHeading index="04" eyebrow="SELECTED WORK" title={<>Things I've <span className="gradient-text">built.</span></>} subtitle="A selection of practical projects where I explore problems, experiment with technology, and turn concepts into working solutions."/>
      <div className="project-grid">{projects.map((p,i)=><Reveal key={p.id} delay={i*.1} className={`project-card project-${i+1}`}><button className="project-open" onClick={()=>setActive(p)} aria-label={`View details for ${p.title}`}><ProjectVisual type={p.visual}/><div className="project-info"><div className="project-meta"><span>{p.number} / {p.category}</span><ArrowUpRight size={18}/></div><h3>{p.title}</h3><p>{p.description}</p><div className="tag-row">{p.stack.map(t=><span key={t}>{t}</span>)}</div><div className="project-view">VIEW PROJECT DETAILS <ChevronRight size={14}/></div></div></button></Reveal>)}</div>
      <p className="project-note">Project previews are custom visual representations. Add your own screenshots and verified repository/demo URLs in <code>src/data/portfolio.js</code>.</p>
    </div>
    <AnimatePresence>{active && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setActive(null)}><motion.div className="project-modal" initial={{opacity:0,y:22,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:12}} onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setActive(null)} aria-label="Close details"><X/></button><span className="section-eyebrow">{active.number} / {active.category}</span><h3>{active.title}</h3><p>{active.details}</p><div className="tag-row">{active.stack.map(t=><span key={t}>{t}</span>)}</div><div className="modal-links">{active.github && <a href={active.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>}{active.demo && <a href={active.demo} target="_blank" rel="noreferrer"><ExternalLink size={16}/> Live demo</a>}{!active.github&&!active.demo&&<span className="muted-link">Repository and demo links will appear here when added.</span>}</div></motion.div></motion.div>}</AnimatePresence>
  </section>
}
