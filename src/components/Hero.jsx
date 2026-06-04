import { useEffect } from "react"
import "../styles/main.css"

function Hero() {

    useEffect(() => {
        const canvas = document.getElementById('hero-canvas')
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        let animId

        function resize() {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        const particles = Array.from({ length: 60 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            r: Math.random() * 2 + 1
        }))

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach(p => {
                p.x += p.vx
                p.y += p.vy
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
                ctx.fillStyle = 'rgba(0, 255, 157, 0.4)'
                ctx.fill()
            })
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 120) {
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.strokeStyle = `rgba(0, 255, 157, ${0.15 * (1 - dist / 120)})`
                        ctx.stroke()
                    }
                }
            }
            animId = requestAnimationFrame(draw)
        }
        draw()

        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <section id="hero">
            <canvas id="hero-canvas"></canvas>
            <div className="grid-overlay"></div>
            <div className="glow-orb glow-orb-1"></div>
            <div className="glow-orb glow-orb-2"></div>
            <div className="code-float" style={{ left: '5%', animationDuration: '20s', animationDelay: '0s' }}>const secure = true;</div>
            <div className="code-float" style={{ left: '15%', animationDuration: '25s', animationDelay: '3s' }}>npm audit --fix</div>
            <div className="code-float" style={{ left: '75%', animationDuration: '22s', animationDelay: '1s' }}>aws ec2 describe-instances</div>
            <div className="code-float" style={{ left: '85%', animationDuration: '28s', animationDelay: '5s' }}>{`<SecureApp />`}</div>
            <div className="code-float" style={{ left: '50%', animationDuration: '24s', animationDelay: '7s' }}>OWASP.top10.map(fix)</div>
            <div className="code-float" style={{ left: '92%', animationDuration: '26s', animationDelay: '2s' }}>git push --force</div>
            <div className="hero-content">
                <div className="hero-badge">Available for Opportunities</div>
                <div className="hero-name">Avigat Sharma</div>
                <h1 className="hero-title">
                    <span className="line1">Full Stack Developer</span>
                    <span className="line2">& Security Engineer</span>
                </h1>
                <p className="hero-sub">Building Secure, Scalable & High-Performance Web Applications</p>
                <p className="hero-intro"> // Security-first developer with expertise in AWS infrastructure & OWASP compliance</p>
                <div className="hero-ctas">
                    <a href="#projects" className="btn btn-primary">⟡ View Projects</a>
                    <a href="#" className="btn btn-outline">↓ Download Resume</a>
                    <a href="#contact" className="btn btn-outline">✉ Contact Me</a>
                </div>
            </div>
        </section>
    )
}

export default Hero