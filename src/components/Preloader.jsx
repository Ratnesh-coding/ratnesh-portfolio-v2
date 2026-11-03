import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Preloader() {
  const [show, setShow] = useState(true)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setShow(false); return }
    let value = 0
    const id = setInterval(() => {
      value = Math.min(100, value + Math.ceil(Math.random() * 17))
      setProgress(value)
      if (value >= 100) { clearInterval(id); setTimeout(() => setShow(false), 180) }
    }, 55)
    return () => clearInterval(id)
  }, [])
  return <AnimatePresence>
    {show && <motion.div className="preloader" initial={{ opacity: 1 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .55 }}>
      <div className="preloader-mark">RR<span>.</span></div>
      <div className="loader-track"><motion.div className="loader-fill" animate={{ width: `${progress}%` }} /></div>
      <div className="loader-meta"><span>INITIALIZING PORTFOLIO</span><span>{progress}%</span></div>
    </motion.div>}
  </AnimatePresence>
}
