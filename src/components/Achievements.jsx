function Achievements() {
    return (
        <section id="achievements">
            <div className="container">
                <div className="section-label"> // Impact & Results</div>
                <h2 className="section-title reveal">Measurable Impact</h2>
                <div className="section-line"></div>
                <div className="ach-grid">
                    <div className="ach-card reveal">
                        <span className="ach-icon">⚡</span>
                        <span className="ach-metric">↑ Perf</span>
                        <div className="ach-desc">Improved Core Web Vitals across Jobaaj platforms with measurable LCP, CLS & FID gains</div>
                    </div>
                    <div className="ach-card reveal">
                        <span className="ach-icon">💰</span>
                        <span className="ach-metric">↓ Cost</span>
                        <div className="ach-desc">Reduced AWS infrastructure cost through intelligent right-sizing &
                            resource scheduling</div>
                    </div>
                    <div className="ach-card reveal">
                        <span className="ach-icon">🛡️</span>
                        <span className="ach-metric">60%+</span>
                        <div className="ach-desc">Reduced attack surface through systematic security hardening & OWASP remediation</div>
                    </div>
                    <div className="ach-card reveal">
                        <span className="ach-icon">📈</span>
                        <span className="ach-metric">25%</span>
                        <div className="ach-desc">Improved issue resolution efficiency at Techwits IT with better tooling & dashboards</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements