import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import GitHub from './components/GitHub'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useLenis } from './hooks/useLenis'

export default function App() {
  useLenis()
  const [theme,setTheme] = useState(()=>localStorage.getItem('rr-theme') || 'dark')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress,{stiffness:100,damping:30,restDelta:.001})
  useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem('rr-theme',theme)},[theme])
  return <>
    <Preloader/>
    <motion.div className="scroll-progress" style={{scaleX}}/>
    <Navbar theme={theme} toggleTheme={()=>setTheme(t=>t==='dark'?'light':'dark')}/>
    <main><Hero/><About/><Skills/><Services/><Projects/><Education/><Certifications/><Experience/><GitHub/><Contact/></main>
    <Footer/>
  </>
}
