import { useEffect, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, MapPin, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'

const roles = ['Data Analyst', 'Python Developer', 'Aspiring Data Scientist', 'SQL & Data Enthusiast']

export default function Hero() {
  const [role, setRole] = useState(0)
  const [pointer, setPointer] = useState({ x: 50, y: 50 })
  useEffect(() => {
    const id = setInterval(() => setRole(v => (v + 1) % roles.length), 2500)
    return () => clearInterval(id)
  }, [])
  const move = e => {
    const r = e.currentTarget.getBoundingClientRect()
    setPointer({ x: ((e.clientX-r.left)/r.width)*100, y: ((e.clientY-r.top)/r.height)*100 })
  }
  const scroll = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return <section id="home" className="hero section-pad" onMouseMove={move} style={{'--mx':`${pointer.x}%`,'--my':`${pointer.y}%`}}>
    <div className="hero-grid-bg"/>
    <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
    <div className="hero-layout">
      <div className="hero-copy">
        <motion.div className="eyebrow" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.2}}><span className="status-dot"/>{profile.availability}</motion.div>
        <motion.p className="hero-kicker" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.3}}>HELLO, I'M {profile.name.toUpperCase()}</motion.p>
        <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.35}}>Turning data<br/>into <span className="gradient-text">useful</span><br/>solutions<span className="period">.</span></motion.h1>
        <motion.div className="role-line" key={role} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.35}}><span className="role-dash"/> {roles[role]}</motion.div>
        <motion.p className="hero-description" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.6}}>{profile.introduction}</motion.p>
        <motion.div className="hero-buttons" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.7}}>
          <button className="btn btn-primary" onClick={() => scroll('projects')}>View projects <ArrowRight size={17}/></button>
          <button className="btn btn-ghost" onClick={() => scroll('services')}>Explore services <ArrowUpRight size={17}/></button>
          <button className="btn btn-ghost" onClick={() => scroll('contact')}>Contact me <ArrowUpRight size={17}/></button>
          {profile.resumeUrl && <a className="btn btn-ghost" href={profile.resumeUrl} download>Download resume <ArrowDown size={16}/></a>}
        </motion.div>
        <div className="hero-meta"><span><MapPin size={14}/>{profile.location}</span><span><Sparkles size={14}/>Open to internships & scoped freelance work</span></div>
      </div>
      <motion.div className="hero-art" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.45}}>
        <div className="art-ring ring-a"/><div className="art-ring ring-b"/>
        <div className="art-core"><div className="core-grid"/><span className="core-monogram">R<span>.</span></span><span className="core-caption">DATA × TECHNOLOGY</span></div>
        <div className="float-chip chip-python"><span className="chip-icon">Py</span><div><b>Python</b><small>Build · Explore · Solve</small></div></div>
        <div className="float-chip chip-sql"><span className="chip-icon chip-violet">SQL</span><div><b>SQL</b><small>Query with purpose</small></div></div>
        <div className="float-chip chip-ml"><span className="chip-spark">✳</span><div><b>Machine learning</b><small>Patterns into insight</small></div></div>
        <div className="orbit-point point-a"/><div className="orbit-point point-b"/>
      </motion.div>
    </div>
    <button className="scroll-cue" onClick={() => scroll('about')}><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></button>
    <div className="hero-index">01 / 12</div>
  </section>
}
