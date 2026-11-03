import { ArrowUpRight, BarChart3, Code2, Database, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { services } from '../data/portfolio'

const icons = [BarChart3, Database, Code2, Sparkles]

export default function Services() {
  return <section id="services" className="section-pad section-block services-section">
    <div className="container">
      <SectionHeading index="05" eyebrow="HOW I CAN HELP" title={<>Practical skills. <span className="gradient-text">Useful outcomes.</span></>} subtitle="A focused set of services based on the tools I use in my projects. Scope and deliverables are agreed before work begins."/>
      <div className="services-grid">
        {services.map((service, i) => {
          const Icon = icons[i]
          return <Reveal key={service.title} delay={i*.08} className="service-card">
            <div className="service-icon"><Icon size={21}/></div>
            <span className="service-number">0{i+1} / SERVICE</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-subtitle">POSSIBLE DELIVERABLES</div>
            <ul>{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul>
            <div className="tag-row">{service.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
          </Reveal>
        })}
      </div>
      <p className="services-note">New to independent client work — availability is for small, clearly scoped projects. I discuss requirements and timelines before confirming any engagement.</p>
    </div>
  </section>
}
