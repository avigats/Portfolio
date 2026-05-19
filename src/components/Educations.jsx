function Education() {
    return (
        <section id="education">
            <div className="container">
                <div className="section-label"> // Academic Background</div>
                <h2 className="section-title reveal">Education</h2>
                <div className="section-line"></div>
                <div className="edu-grid">
                    <div className="edu-card reveal">
                        <div className="edu-degree">M.Tech</div>
                        <div className="edu-field">Computer Science & Engineering</div>
                        <div className="edu-uni">Madhyanchal Professional University</div>
                        <div className="edu-tag"> // Postgraduate</div>
                    </div>
                    <div className="edu-card reveal">
                        <div className="edu-degree">B.Tech</div>
                        <div className="edu-field">Computer Science & Engineering</div>
                        <div className="edu-uni">AKTU (Dr. APJ Abdul Kalam Technical University)</div>
                        <div className="edu-tag"> // Undergraduate</div>
                    </div>
                    <div className="edu-card reveal">
                        <div className="edu-degree">Diploma</div>
                        <div className="edu-field">Technical Engineering</div>
                        <div className="edu-uni">DEI Technical College</div>
                        <div className="edu-tag"> // Foundation</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education