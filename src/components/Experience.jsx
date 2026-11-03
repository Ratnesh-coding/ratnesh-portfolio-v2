import { ArrowUpRight, Compass } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { activities } from '../data/portfolio'
export default function Experience() {
  return <section id="experience" className="section-pad section-block alt-section"><div className="container">
    <SectionHeading index="07" eyebrow="EXPERIENCE & ACTIVITIES" title={<>Beyond the <span className="gradient-text">projects.</span></>} subtitle="Professional experience, community involvement, and practical learning beyond the classroom."/>
    {activities.length ? <div className="activity-list">{activities.map((a,i)=><Reveal key={i}><article className="activity-card"><span>{a.type}</span><h3>{a.title}</h3><p>{a.organization} · {a.period}</p><small>{a.description}</small></article></Reveal>)}</div> :
      <Reveal><div className="experience-empty"><span className="empty-icon"><Compass size={22}/></span><div><span className="panel-label">THE NEXT CHAPTER</span><h3>Every experience starts somewhere.</h3><p>Internships, workshops, competitions, and community activities will be added here as they are completed and verified.</p></div><span className="empty-arrow"><ArrowUpRight size={20}/></span></div></Reveal>}
  </div></section>
}
