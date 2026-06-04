import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import Education from './components/Educations.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {

  useEffect(() => {
    const cursor = document.querySelector('.cursor')
    const cursorRing = document.querySelector('.cursor-ring')

    function onMouseMove(e) {
      if (cursor) {
        cursor.style.left = e.clientX + 'px'
        cursor.style.top = e.clientY + 'px'
      }
      if (cursorRing) {
        cursorRing.style.left = e.clientX + 'px'
        cursorRing.style.top = e.clientY + 'px'
      }
    }
    document.addEventListener('mousemove', onMouseMove)

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.15 })

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))

    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target'))
          if (!target) return
          let current = 0
          const increment = Math.ceil(target / 40)
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              current = target
              clearInterval(timer)
            }
            entry.target.textContent = current
          }, 40)
          statObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })

    document.querySelectorAll('.stat-num[data-target]').forEach(el => statObserver.observe(el))

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      revealObserver.disconnect()
      statObserver.disconnect()
    }
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
