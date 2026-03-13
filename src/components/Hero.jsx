import useTypingEffect from '../hooks/useTypingEffect'

const phrases = [
    'Software Engineer',
    'Full Stack Developer',
    'Data Platform Engineer',
    'AI/ML Researcher',
    'IEEE Published Author',
]

const socials = [
    { icon: 'fas fa-envelope', href: 'mailto:joisedivya.v@gmail.com', label: 'Email' },
    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/velankani-joise-divya/', label: 'LinkedIn' },
    { icon: 'fab fa-github', href: 'https://github.com/divya-jd', label: 'GitHub' },
]

export default function Hero() {
    const typedText = useTypingEffect(phrases)

    return (
        <section className="hero" id="hero">
            <div className="hero__content">
                <p className="hero__greeting">Hello, I'm</p>
                <h1 className="hero__name">Velankani Joise Divya</h1>
                <div className="hero__role">
                    <span className="hero__typed">{typedText}</span>
                    <span className="hero__cursor">|</span>
                </div>
                <p className="hero__summary">
                    Building scalable backend systems &amp; data platforms. Currently at <strong>Boehringer Ingelheim</strong>,
                    pursuing MS in CS at <strong>Georgia State University</strong>.
                </p>

                <div className="hero__actions">
                    <a href="#contact" className="hero__cta hero__cta--primary">
                        Get in Touch
                    </a>
                    <a href="#experience" className="hero__cta hero__cta--secondary">
                        View My Work <i className="fas fa-arrow-down" style={{ marginLeft: '6px', fontSize: '0.8em' }}></i>
                    </a>
                </div>

                <div className="hero__socials">
                    {socials.map(s => (
                        <a key={s.label} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noopener noreferrer" aria-label={s.label} className="hero__social-link">
                            <i className={s.icon}></i>
                        </a>
                    ))}
                </div>
            </div>

            <div className="hero__decoration" aria-hidden="true">
                <div className="hero__circle hero__circle--1"></div>
                <div className="hero__circle hero__circle--2"></div>
                <div className="hero__circle hero__circle--3"></div>
            </div>
        </section>
    )
}
