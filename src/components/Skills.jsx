import "../styles/main.css"

function Skills() {
    return (
        <section id="skills">
            <div className="container">
                <div className="section-label"> // Technical Stack</div>
                <h2 className="section-title reveal">Skills & Tools</h2>
                <div className="section-line"></div>
                
                <div className="skills-cats">
                    {/* Category 1: Development */}
                    <div className="skill-cat reveal" data-index="1">
                        <div className="skill-cat-title" data-index="1">Development</div>
                        <div className="skill-tags">
                            <span className="skill-tag">HTML5</span>
                            <span className="skill-tag">CSS3</span>
                            <span className="skill-tag">JavaScript</span>
                            <span className="skill-tag">React</span>
                            <span className="skill-tag">PHP</span>
                            <span className="skill-tag">Python</span>
                            <span className="skill-tag">MySQL</span>
                            <span className="skill-tag">REST APIs</span>
                            <span className="skill-tag">Git</span>
                            <span className="skill-tag">Responsive Design</span>
                            <span className="skill-tag">Performance Opt.</span>
                        </div>
                    </div>

                    {/* Category 2: Security */}
                    <div className="skill-cat reveal" data-index="2">
                        <div className="skill-cat-title" data-index="2">Security</div>
                        <div className="skill-tags">
                            <span className="skill-tag">Vulnerability Assessment</span>
                            <span className="skill-tag">Penetration Testing</span>
                            <span className="skill-tag">SQL Injection</span>
                            <span className="skill-tag">XSS Protection</span>
                            <span className="skill-tag">OWASP ZAP</span>
                            <span className="skill-tag">Burp Suite</span>
                            <span className="skill-tag">OWASP Top 10</span>
                        </div>
                    </div>

                    {/* Category 3: Cloud & DevOps */}
                    <div className="skill-cat reveal" data-index="3">
                        <div className="skill-cat-title" data-index="3">Cloud & DevOps</div>
                        <div className="skill-tags">
                            <span className="skill-tag">AWS EC2</span>
                            <span className="skill-tag">AWS S3</span>
                            <span className="skill-tag">AWS RDS</span>
                            <span className="skill-tag">Load Balancers</span>
                            <span className="skill-tag">Cost Optimization</span>
                            <span className="skill-tag">Server Monitoring</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills