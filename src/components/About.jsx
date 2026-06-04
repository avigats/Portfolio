import profilePic from "../assets/profile.jpg"
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
                        <p>
                            I am a <strong>Full Stack Developer and Security Engineer</strong> with experience in building secure, scalable, and high-performance web applications.
                        </p>

                        <p>
                            Skilled in <strong>PHP, JavaScript, Python, MySQL, and AWS</strong>, I develop efficient solutions while optimizing application performance and infrastructure.
                        </p>

                        <p>
                            I have hands-on experience in <strong>web security, penetration testing, and vulnerability assessment</strong>, helping organizations strengthen their digital platforms.
                        </p>

                        <p>
                            Passionate about technology and problem-solving, I combine <strong>development expertise with a security-first approach</strong> to deliver reliable and resilient systems.
                        </p>

                        <div className="stats-grid">
                            <div className="stat-card">
                                <span className="stat-num" data-target="1">0</span>
                                <span className="stat-label">+ Years Experience</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-num" data-target="10">0</span>
                                <span className="stat-label">+ Security Audits</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-num" data-target="3">0</span>
                                <span className="stat-label">Live Systems Secured</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-num" data-target="4">0</span>
                                <span className="stat-label">AWS Services Managed</span>
                            </div>
                        </div>
                    </div>

                    {/* Cyberpunk HUD Profile Picture Section */}
                    <div className="profile-hud-container reveal">
                        {/* Orbiting HUD tech rings */}
                        <div className="profile-hud-ring ring-outer"></div>
                        <div className="profile-hud-ring ring-mid"></div>
                        <div className="profile-hud-ring ring-inner"></div>

                        {/* Interactive Profile Photo Container */}
                        <div className="profile-avatar-wrapper">
                            {/* Scanning laser effect */}
                            <div className="profile-hud-scanner"></div>
                            <img src={profilePic} alt="Avigat Sharma Profile" className="profile-avatar-img" />
                        </div>

                        {/* Technological coordinate overlays */}
                        <div className="profile-hud-tech-data tech-data-1">SYS.LOC // 28.6139° N, 77.2090° E</div>
                        <div className="profile-hud-tech-data tech-data-2">STATUS // ACTIVE_NODE_73</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About