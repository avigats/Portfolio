import "../styles/main.css"

function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="section-label"> // About Me</div>
                <h2 className="section-title reveal">Who I Am</h2>
                <div className="section-line"></div>
                <div className="about-grid">
                    <div className="about-text reveal">
                        <p>I'm a <strong>Full Stack Developer & Security Engineer</strong> with 1+ year of experience delivering robust, secure web applications. I specialize in bridging the gap between performance engineering and cybersecurity.</p>
                        <p>At <strong>Nishtya Infotech</strong>, I manage security infrastructure and cloud operations for <strong>Jobaaj Group</strong>platforms, including jobaaj.com, jobaajlearnings.com, and shastrahub.com — platforms serving thousands of users daily.</p>
                        <p>My work spans <strong>Core Web Vitals optimization</strong>(LCP, CLS, FID), AWS infrastructure management, penetration testing, and backend hardening — ensuring every system I touch is both blazing fast and battle-hardened against modern threats.</p>
                        <p>I hold expertise in <strong>OWASP Top 10</strong>vulnerabilities, cloud cost optimization, and building scalable, secure REST API ecosystems.</p>
                    </div>
                    <div className="stats-grid reveal">
                        <div className="stat-card">
                            <span className="stat-num" data-target="1">0</span>
                            <span className="stat-label">+Years Experience</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-num" data-target="10">0</span>
                            <span className="stat-label">+Security Tests</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-num" data-target="3">0</span>
                            <span className="stat-label">Live Platforms Secured</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-num" data-target="4">0</span>
                            <span className="stat-label">AWS Services Managed</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About