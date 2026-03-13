import { useState, useEffect } from 'react'

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Publications', href: '#publications' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, toggleTheme }) {
    const [activeSection, setActiveSection] = useState('')
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
            const sectionIds = navItems.map(item => item.href.slice(1))
            for (const id of [...sectionIds].reverse()) {
                const el = document.getElementById(id)
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActiveSection(id)
                    break
                }
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [mobileOpen])

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner">
                <a href="#" className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="navbar__logo-text">VJD</span>
                </a>

                <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
                    {navItems.map(item => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`navbar__link ${activeSection === item.href.slice(1) ? 'navbar__link--active' : ''}`}
                            onClick={() => setMobileOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <div className="navbar__actions">
                    <button
                        className="navbar__theme-btn"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>
                    <button
                        className="navbar__mobile-btn"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </div>

            {mobileOpen && <div className="navbar__backdrop" onClick={() => setMobileOpen(false)} />}
        </nav>
    )
}
