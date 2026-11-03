import { ArrowUpRight, BookOpen, Code2, Database, Lightbulb } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolio'

const values = [
  { icon: Code2, title: 'Build with purpose', text: 'Turning ideas and problem statements into useful applications.' },
  { icon: Database, title: 'Think in data', text: 'Finding structure, patterns, and meaning in information.' },
  { icon: BookOpen, title: 'Stay curious', text: 'Learning continuously through practice and experimentation.' }
]
export default function About() {
  return <section id="about" className="section-pad section-block">
    <div className="container">
      <SectionHeading index="02" eyebrow="A LITTLE ABOUT ME" title={<>Beyond the <span className="gradient-text">code.</span></>} subtitle="A student, a curious problem-solver, and an aspiring professional finding the intersection of data and technology."/>
      <div className="about-grid">
        <Reveal className="about-main"><p className="about-lead">{profile.about}</p><p className="body-muted">My goal is to grow into a professional who can work across the data lifecycle — from asking the right questions and preparing information to building applications that make insights useful.</p><div className="about-location"><span className="location-icon"><Lightbulb size={18}/></span><div><b>Currently exploring</b><small>{profile.interests.join(' · ')}</small></div></div></Reveal>
        <div className="about-side">{values.map((item,i) => <Reveal key={item.title} delay={i*.1}><div className="value-row"><span className="value-icon"><item.icon size={19}/></span><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowUpRight className="value-arrow" size={17}/></div></Reveal>)}
          <Reveal delay={.3}><div className="profile-note"><span className="note-mark">RR</span><div><b>Currently pursuing</b><small>TY B.Sc. Information Technology</small></div><span className="note-year">2027</span></div></Reveal>
        </div>
      </div>
    </div>
  </section>
}
