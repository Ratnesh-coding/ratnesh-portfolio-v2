import { GraduationCap, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { education } from '../data/portfolio'
export default function Education() {
  return <section id="education" className="section-pad section-block alt-section"><div className="container">
    <SectionHeading index="05" eyebrow="FOUNDATIONS & GROWTH" title={<>My learning <span className="gradient-text">journey.</span></>} subtitle="The academic foundation behind my growing interest in software, data, and technology."/>
    <div className="timeline">{education.map((e,i)=><Reveal key={e.degree} delay={i*.12}><div className="timeline-item"><div className="timeline-marker"><GraduationCap size={18}/></div><div className="timeline-card"><div className="timeline-top"><span>{e.period}</span><span className="timeline-status">IN PROGRESS</span></div><h3>{e.degree}</h3><p>{e.institution}</p><div className="timeline-location"><MapPin size={14}/>{e.location}</div><small>{e.detail}</small></div></div></Reveal>)}</div>
  </div></section>
}
