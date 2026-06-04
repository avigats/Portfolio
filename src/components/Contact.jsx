import { useEffect } from "react"

function Contact() {

    useEffect(() => {
        const form = document.getElementById('contactForm')
        if (!form) return

        function showError(id) {
            const el = document.getElementById(id)
            if (el) el.classList.add('show')
        }

        function clearErrors() {
            document.querySelectorAll('.form-error').forEach(el => el.classList.remove('show'))
        }

        function handleSubmit(e) {
            e.preventDefault()
            clearErrors()

            const fname = document.getElementById('fname').value.trim()
            const femail = document.getElementById('femail').value.trim()
            const fsubject = document.getElementById('fsubject').value.trim()
            const fmessage = document.getElementById('fmessage').value.trim()
            let valid = true

            if (!fname) { showError('fnameErr'); valid = false }
            if (!femail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(femail)) { showError('femailErr'); valid = false }
            if (!fsubject) { showError('fsubjectErr'); valid = false }
            if (!fmessage) { showError('fmessageErr'); valid = false }

            if (valid) {
                const success = document.getElementById('formSuccess')
                if (success) success.style.display = 'block'
                form.reset()
            }
        }

        form.addEventListener('submit', handleSubmit)
        return () => form.removeEventListener('submit', handleSubmit)
    }, [])

    return (
        <section id="contact">
            <div className="container">
                <div className="section-label"> // Get in Touch</div>
                <h2 className="section-title reveal">Contact Me</h2>
                <div className="section-line"></div>
                <div className="contact-grid">
                    <div className="contact-info reveal">
                        <h3>Let's Build Something <span style={{color: 'var(--neon)'}}>Secure</span></h3>
                        <p>Whether you need a high-performance web application,
                            security audit,
                            or cloud infrastructure help — I'm available for new opportunities and
                            collaborations.</p>
                        <div className="contact-links">
                            <a href="mailto:avigat.sharma@email.com" className="contact-link">
                                <div className="contact-link-icon">✉</div>avigat.sharma@email.com
                            </a>
                            <a href="tel:+91XXXXXXXXXX" className="contact-link">
                                <div className="contact-link-icon">📞</div>+91 XXXXX XXXXX
                            </a>
                            <a href="https://linkedin.com/in/avigat-sharma" target="_blank" className="contact-link">
                                <div className="contact-link-icon">in</div>linkedin.com/in/avigat-sharma
                            </a>
                            <a href="https://github.com/avigat-sharma" target="_blank" className="contact-link">
                                <div className="contact-link-icon">⌥</div>github.com/avigat-sharma
                            </a>
                        </div>
                    </div>
                    <div className="reveal">
                        <form className="contact-form" id="contactForm" >
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-input" id="fname" placeholder="Your full name" />
                                <span className="form-error" id="fnameErr">Please enter your name</span>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-input" id="femail" placeholder="your@email.com" />
                                <span className="form-error" id="femailErr">Please enter a valid email</span>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Subject</label>
                                <input type="text" className="form-input" id="fsubject" placeholder="What's this about?" />
                                <span className="form-error" id="fsubjectErr">Please enter a subject</span>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea className="form-textarea" id="fmessage" placeholder="Tell me about your project, opportunity, or just say hi..."></textarea>
                                <span className="form-error" id="fmessageErr">Please enter a message</span>
                            </div>
                            <button type="submit" className="btn btn-primary sendMesssage">Send Message ⟶</button>
                            <div className="form-success" id="formSuccess">✓ Message received! I'll get back to you soon.</div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact