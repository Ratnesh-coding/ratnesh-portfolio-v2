import { useState } from 'react'
import { ArrowUpRight, Braces, Database, LineChart, Globe2, Wrench } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/portfolio'

const icons = [Braces, LineChart, Globe2, Database, Wrench]
export default function Skills() {
  const [selected, setSelected] = useState(0)
  return <section id="skills" className="section-pad section-block alt-section">
    <div className="container">
      <SectionHeading index="03" eyebrow="TOOLS OF THE TRADE" title={<>My technical <span className="gradient-text">arsenal.</span></>} subtitle="A growing toolkit shaped by coursework, projects, and consistent hands-on learning."/>
      <div className="skills-layout">
        <div className="skill-tabs">{skillGroups.map((g,i) => <button key={g.name} className={`skill-tab ${selected===i?'selected':''}`} onClick={()=>setSelected(i)}><span>0{i+1}</span>{g.name}<ArrowUpRight size={15}/></button>)}</div>
        <Reveal className="skill-panel" key={selected}>
          <div className="skill-panel-top"><div><span className="panel-label">CATEGORY / 0{selected+1}</span><h3>{skillGroups[selected].name}</h3><p>{skillGroups[selected].note}</p></div><div className="skill-symbol">{(() => { const I=icons[selected]; return <I size={27}/> })()}</div></div>
          <div className="skill-pills">{skillGroups[selected].skills.map((s,i)=><div className="skill-pill" key={s} style={{'--i':i}}><span className="skill-bullet"/>{s}</div>)}</div>
          <div className="skill-foot"><span>TOOLS I WORK WITH</span><span>{skillGroups[selected].skills.length.toString().padStart(2,'0')} TECHNOLOGIES</span></div>
        </Reveal>
      </div>
    </div>
  </section>
}
