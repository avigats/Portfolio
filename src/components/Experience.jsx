function Experience() {
    return (
        <section id="experience">
            <div className="container">
                <div className="section-label"> // Career Path</div>
                <h2 className="section-title reveal">Experience</h2>
                <div className="section-line"></div>
                <div className="timeline">
                    <div className="timeline-item reveal">
                        <div className="timeline-date">Feb 2025 – Present</div>
                        <div className="timeline-role">Associate Full Stack Developer</div>
                        <div className="timeline-company">Nishtya Infotech Pvt. Ltd.</div>
                        <ul className="timeline-bullets">
                            <li>Managed security infrastructure & compliance for Jobaaj Group platforms</li>
                            <li>Optimized Core Web Vitals (LCP, CLS, FID) for measurable performance gains</li>
                            <li>Monitored & managed AWS EC2, RDS, S3, and CloudWatch dashboards</li>
                            <li>Executed infrastructure cost optimization through right-sizing & scheduling</li>
                            <li>Database tuning, query optimization & scalability improvements</li>
                        </ul>
                    </div>
                    <div className="timeline-item reveal">
                        <div className="timeline-date">Nov 2024 – Feb 2025</div>
                        <div className="timeline-role">Security Hardening Engineer</div>
                        <div className="timeline-company">Nishtya Infotech Pvt. Ltd.</div>
                        <ul className="timeline-bullets">
                            <li>Secured jobaaj.com, jobaajlearnings.com & shastrahub.com from ground up</li>
                            <li>Implemented robust access control & subdomain protection mechanisms</li>
                            <li>Conducted penetration tests covering SQLi, XSS, CSRF & OWASP Top 10</li>
                            <li>Set up real-time threat monitoring via AWS CloudWatch alerts</li>
                            <li>Hardened server configurations, session handling & authentication flows</li>
                        </ul>
                    </div>
                    <div className="timeline-item reveal">
                        <div className="timeline-date">Mar 2023 – Sep 2023</div>
                        <div className="timeline-role">Frontend Developer Intern</div>
                        <div className="timeline-company">Techwits IT</div>
                        <ul className="timeline-bullets">
                            <li>Built and shipped a full-featured Admin Console dashboard from scratch</li>
                            <li>Improved team issue resolution efficiency by 25% through better tooling</li>
                            <li>Collaborated with cross-functional teams on UI/UX improvements</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience