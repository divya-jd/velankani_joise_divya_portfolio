import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Publications from './components/Publications'
import Contact from './components/Contact'
import './App.css'

export default function App() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('portfolio-theme') || 'light'
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('portfolio-theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Education />
                <Publications />
                <Contact />
            </main>
            <footer className="footer">
                <div className="footer__inner">
                    <p>&copy; {new Date().getFullYear()} Velankani Joise Divya. Built with React.</p>
                </div>
            </footer>
        </>
    )
}
