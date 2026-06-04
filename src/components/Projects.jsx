import "../styles/main.css"

function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <div className="section-label"> // Featured Work</div>
                <h2 className="section-title reveal">Projects</h2>
                <div className="section-line"></div>

                <div className="projects-grid">
                    {/* Project Card 1 */}
                    <div className="project-card reveal">
                        <div className="project-glow"></div>
                        <span className="project-tag">PHP · MySQL · JavaScript · Python</span>
                        <div className="project-title">ATS & Job Fit Engine</div>
                        <ul className="project-bullets">
                            <li>Built an end-to-end job-fit engine using PHP, MySQL, JS, and Python.</li>
                            <li>Designed resume scoring and job recommendation features.</li>
                            <li>Enabled real-time application fit analysis for users.</li>
                            <li>Developed secure APIs and dashboards with OWASP testing.</li>
                        </ul>
                        <a href="#contact" className="btn btn-outline">
                            View Case Study
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>

                    {/* Project Card 2 */}
                    <div className="project-card reveal">
                        <div className="project-glow"></div>
                        <span className="project-tag">OWASP ZAP · Burp Suite · Kali Linux</span>
                        <div className="project-title">Website Security & Hardening</div>
                        <ul className="project-bullets">
                            <li>Secured web server, database, and APIs against SQLi, XSS, and CSRF attacks.</li>
                            <li>Implemented secure authentication, input validation, and session control.</li>
                            <li>Conducted vulnerability assessments using OWASP ZAP, Burp Suite, and Nikto.</li>
                            <li>Enhanced backend security, data integrity, and real-time monitoring.</li>
                            <li>Reduced attack surface by 60%+ through systematic remediation</li>
                        </ul>
                        <a href="#contact" className="btn btn-outline">
                            View Case Study
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                    {/* Project Card 3 */}
                    <div className="project-card reveal">
                        <div className="project-glow"></div>
                        <span className="project-tag">PHP · MySQL · JavaScript (AJAX) · HTML · CSS</span>
                        <div className="project-title">B2B Sales CRM | Jobaaj</div>
                        <ul className="project-bullets">
                            <li>Developed a comprehensive CRM to manage companies, leads, and end-to-end sales workflows.</li>
                            <li>Designed lead management and email automation modules, including customizable email templates for lead nurturing.</li>
                            <li>Implemented role-based access control with hierarchical team structures (Super Admin, Manager, Executive).</li>
                            <li>Built lead lifecycle tracking, conversion analytics, and incentive calculation features to monitor sales performance and productivity.</li>
                        </ul>
                        <a href="#contact" className="btn btn-outline">
                            View Case Study
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects