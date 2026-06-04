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
    // ─── 1. CUSTOM CURSOR & HOVER SCALE ───
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

    // Cursor hover effects on interactive elements
    const hoverables = document.querySelectorAll('a, button, .btn, .stat-card, .skill-tag, .project-card, .edu-card, .contact-link, .hamburger')
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (cursor) cursor.style.transform = 'translate(-50%, -50%) scale(1.5)'
        if (cursorRing) {
          cursorRing.style.transform = 'translate(-50%, -50%) scale(1.5)'
          cursorRing.style.borderColor = 'var(--primary)'
        }
      })
      el.addEventListener('mouseleave', () => {
        if (cursor) cursor.style.transform = 'translate(-50%, -50%) scale(1)'
        if (cursorRing) {
          cursorRing.style.transform = 'translate(-50%, -50%) scale(1)'
          cursorRing.style.borderColor = 'var(--secondary)'
        }
      })
    })

    // ─── 2. SCROLL PROGRESS & NAVBAR SCROLLED ───
    const progressBar = document.querySelector('.scroll-progress')
    const nav = document.querySelector('nav')

    function onScroll() {
      // Page scroll percentage
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0
      if (progressBar) {
        progressBar.style.width = scrolled + '%'
      }

      // Nav scrolled class
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add('scrolled')
        } else {
          nav.classList.remove('scrolled')
        }
      }

      // Timeline scrolling progress tracking
      const timeline = document.querySelector('.timeline')
      const timelineProgress = document.querySelector('.timeline-scroll-progress')
      const timelineItems = document.querySelectorAll('.timeline-item')

      if (timeline && timelineProgress && timelineItems.length > 0) {
        const timelineRect = timeline.getBoundingClientRect()
        const winHeight = window.innerHeight

        // Calculate progress percentage of timeline through viewport
        const start = timelineRect.top - winHeight / 2
        const totalHeight = timelineRect.height
        let timelineScrolled = 0

        if (start < 0) {
          timelineScrolled = Math.min(Math.max(-start / totalHeight, 0), 1)
        }

        timelineProgress.style.height = (timelineScrolled * 100) + '%'

        // Add active state to visible items
        timelineItems.forEach(item => {
          const itemRect = item.getBoundingClientRect()
          if (itemRect.top < winHeight / 1.6) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })
      }
    }
    window.addEventListener('scroll', onScroll)
    // Run once on load
    onScroll()

    // ─── 3. INTERACTION CODES: REVEAL ELEMENTS ON SCROLL ───
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))

    // ─── 4. COUNTER ANIMATION FOR STATISTICS ───
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target'))
          if (!target) return
          let current = 0
          const increment = Math.ceil(target / 45)
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              current = target
              clearInterval(timer)
            }
            entry.target.textContent = current
          }, 35)
          statObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.4 })

    document.querySelectorAll('.stat-num[data-target]').forEach(el => statObserver.observe(el))

    // ─── 5. GLOBAL 3D CARD TILT PARALLAX ───
    const tiltCards = document.querySelectorAll('.skill-cat, .project-card, .profile-avatar-wrapper, .stat-card, .edu-card')
    
    function handleTilt(e) {
      const card = e.currentTarget
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left // Mouse position X relative to element
      const y = e.clientY - rect.top  // Mouse position Y relative to element
      
      const width = rect.width
      const height = rect.height
      
      // Calculate rotation (-10deg to 10deg)
      const rotateY = ((x / width) - 0.5) * 15
      const rotateX = (((y / height) - 0.5) * -15)
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
      card.style.transition = 'none'
    }

    function resetTilt(e) {
      const card = e.currentTarget
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
    }

    tiltCards.forEach(card => {
      card.addEventListener('mousemove', handleTilt)
      card.addEventListener('mouseleave', resetTilt)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
      revealObserver.disconnect()
      statObserver.disconnect()
      tiltCards.forEach(card => {
        card.removeEventListener('mousemove', handleTilt)
        card.removeEventListener('mouseleave', resetTilt)
      })
    }
  }, [])

  return (
    <>
      <div className="scroll-progress"></div>
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
