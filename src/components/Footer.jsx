function Footer() {
    return (
        <footer>
            <div className="footer-text">Designed & <span>Secured</span> by Avigat Sharma &nbsp; |&nbsp;
                <span style={{ color: 'var(--text-muted)' }}>© {new Date().getFullYear()}</span>
            </div><a href="#hero" className="back-top" title="Back to top">↑</a>
        </footer>
    )
}

export default Footer