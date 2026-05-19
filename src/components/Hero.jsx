import "../styles/main.css"

function Hero() {
    return (
        <section id="hero">
            <canvas id="hero-canvas"></canvas>
            <div className="grid-overlay"></div>
            <div className="glow-orb glow-orb-1"></div>
            <div className="glow-orb glow-orb-2"></div>
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