import { useState } from "react"
import "../styles/main.css"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu() {
        setIsOpen(prev => {
            return !prev
        })
    }

    return (
        <>
            <div className="cursor"></div>
            <div className="cursor-ring"></div>
            <div className={isOpen ? "mobile-nav open" : "mobile-nav"}>
                <button onClick={() => setIsOpen(false)}>✕</button>
                <a href="#about" onClick={toggleMenu}>About</a>
                <a href="#skills" onClick={toggleMenu}>Skills</a>
                <a href="#experience" onClick={toggleMenu}>Experience</a>
                <a href="#projects" onClick={toggleMenu}>Projects</a>
                <a href="#contact" onClick={toggleMenu}>Contact</a>
            </div>
            <nav>
                <div className="nav-logo">avigat<span>.sharma</span></div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#achievements">Impact</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="hamburger" onClick={toggleMenu}><span></span><span></span><span></span></div>
            </nav>
        </>
    )

}

export default Navbar