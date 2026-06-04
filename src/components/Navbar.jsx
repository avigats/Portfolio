import { useState } from "react"
import "../styles/main.css"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu() {
        setIsOpen(prev => !prev)
    }

    return (
        <>
            {/* Custom Cursor Elements */}
            <div className="cursor"></div>
            <div className="cursor-ring"></div>

            {/* Mobile Navigation Drawer */}
            <div className={isOpen ? "mobile-nav open" : "mobile-nav"}>
                <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
                <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                <a href="#achievements" onClick={() => setIsOpen(false)}>Impact</a>
                <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </div>

            {/* Main Nav Bar */}
            <nav>
                <div className="nav-logo">
                    avigat<span>.sharma</span>
                </div>
                
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#achievements">Impact</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                {/* Cyberpunk Hamburger Trigger */}
                <div className={isOpen ? "hamburger open" : "hamburger"} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </>
    )
}

export default Navbar