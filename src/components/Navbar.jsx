import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio'

const links = [['Home','home'],['About','about'],['Skills','skills'],['Services','services'],['Projects','projects'],['Experience','experience'],['Certifications','certifications'],['Contact','contact']]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      let current = 'home'
      links.forEach(([, id]) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * .42) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const go = id => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  return <header className={`nav-wrap ${scrolled ? 'nav-scrolled' : ''}`}>
    <nav className="nav-shell" aria-label="Main navigation">
      <button className="brand" onClick={() => go('home')} aria-label="Go to home"><span>RR</span><i>.</i></button>
      <div className={`nav-links ${open ? 'nav-open' : ''}`}>
        {links.map(([label,id]) => <button key={id} className={active === id ? 'nav-link active' : 'nav-link'} onClick={() => go(id)}>{label}</button>)}
      </div>
      <div className="nav-actions">
        <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}</button>
        <button className="nav-cta" onClick={() => go('contact')}>Let's talk <ArrowUpRight size={15}/></button>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X/> : <Menu/>}</button>
      </div>
    </nav>
  </header>
}
