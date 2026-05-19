function Skills() {
    return (
        <section id="skills">
            <div className="container">
                <div className="section-label"> // Technical Stack</div>
                <h2 className="section-title reveal">Skills & Tools</h2>
                <div className="section-line"></div>
                <div className="skills-cats">
                    <div className="skill-cat reveal">
                        <div className="skill-cat-title">Development</div>
                        <div className="skill-tags">
                            <span className="skill-tag">HTML5</span>
                            <span className="skill-tag">CSS3</span>
                            <span className="skill-tag">JavaScript</span>
                            <span className="skill-tag">PHP</span>
                            <span className="skill-tag">Python</span>
                            <span className="skill-tag">MySQL</span>
                            <span className="skill-tag">REST APIs</span>
                            <span className="skill-tag">Git</span>
                            <span className="skill-tag">Responsive Design</span>
                            <span className="skill-tag">Performance Opt.</span>
                        </div>
                    </div>
                    <div className="skill-cat reveal">
                        <div className="skill-cat-title">Security</div>
                        <div className="skill-tags">
                            <span className="skill-tag">Vulnerability Assessment</span>
                            <span className="skill-tag">Penetration Testing</span>
                            <span className="skill-tag">SQL Injection</span>
                            <span className="skill-tag">XSS</span>
                            <span className="skill-tag">CSRF</span>
                            <span className="skill-tag">IDOR</span>
                            <span className="skill-tag">SSRF</span>
                            <span className="skill-tag">OWASP ZAP</span>
                            <span className="skill-tag">Burp Suite</span>
                            <span className="skill-tag">OWASP Top 10</span>
                        </div>
                    </div>
                    <div className="skill-cat reveal">
                        <div className="skill-cat-title">Cloud & DevOps</div>
                        <div className="skill-tags">
                            <span className="skill-tag">AWS EC2</span>
                            <span className="skill-tag">AWS S3</span>
                            <span className="skill-tag">AWS RDS</span>
                            <span className="skill-tag">CloudWatch</span>
                            <span className="skill-tag">Load Balancer</span>
                            <span className="skill-tag">Cost Optimization</span>
                            <span className="skill-tag">Server Monitoring</span>
                            <span className="skill-tag">Linux Admin</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills