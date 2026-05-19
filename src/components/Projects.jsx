function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <div className="section-label"> // Featured Work</div>
                <h2 className="section-title reveal">Projects</h2>
                <div className="section-line"></div>
                <div className="projects-grid">
                    <div className="project-card reveal">
                        <div className="project-glow"></div><span className="project-tag">AI · Backend · Security</span>
                        <div className="project-title">ATS & Job Fit Engine</div>
                        <ul className="project-bullets">
                            <li>Intelligent resume scoring engine with real-time analysis</li>
                            <li>ML-powered job recommendation system for candidate-role matching</li>
                            <li>Real-time application fit analysis with contextual feedback</li>
                            <li>Secure REST APIs with full OWASP compliance testing</li>
                            <li>Hardened authentication & authorization layers</li>
                        </ul><a href="#contact" className="btn btn-outline">View Case Study
                            →</a>
                    </div>
                    <div className="project-card reveal">
                        <div className="project-glow"></div>
                        <span className="project-tag">Security · AWS · DevOps</span>
                        <div className="project-title">Website Security & Hardening</div>
                        <ul className="project-bullets">
                            <li>End-to-end server & database hardening for 3 live platforms</li>
                            <li>Secure authentication flows & advanced session management</li>
                            <li>Comprehensive vulnerability assessment with OWASP ZAP & Burp Suite</li>
                            <li>Real-time threat monitoring & automated alerting system</li>
                            <li>Reduced attack surface by 60%+through systematic remediation</li>
                        </ul><a href="#contact" className="btn btn-outline">View Case Study →</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects