import "../styles/main.css"

function Achievements() {
    return (
        <section id="achievements">
            <div className="container">
                <div className="section-label"> // Impact & Results</div>
                <h2 className="section-title reveal">Measurable Impact</h2>
                <div className="section-line"></div>
                
                <div className="ach-grid">
                    {/* Achievement 1 */}
                    <div className="ach-card reveal">
                        <span className="ach-icon">⚡</span>
                        <span className="ach-metric">↑ PERF</span>
                        <div className="ach-desc">Optimized Core Web Vitals across Jobaaj platforms, yielding major LCP, CLS & FID speed increases.</div>
                    </div>

                    {/* Achievement 2 */}
                    <div className="ach-card reveal">
                        <span className="ach-icon">💰</span>
                        <span className="ach-metric">↓ COST</span>
                        <div className="ach-desc">Lowered cloud spend on AWS environments through right-sizing services and scheduling automation.</div>
                    </div>

                    {/* Achievement 3 */}
                    <div className="ach-card reveal">
                        <span className="ach-icon">🛡️</span>
                        <span className="ach-metric">60%+</span>
                        <div className="ach-desc">Shrunk the system attack surface via secure headers, patching, and systematic OWASP audit mitigation.</div>
                    </div>

                    {/* Achievement 4 */}
                    <div className="ach-card reveal">
                        <span className="ach-icon">📈</span>
                        <span className="ach-metric">25%</span>
                        <div className="ach-desc">Boosted ticket resolution velocity at Techwits IT by architecting a custom responsive Admin Console.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements