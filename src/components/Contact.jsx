import useScrollReveal from '../hooks/useScrollReveal'

export default function Contact() {
    const [ref, isVisible] = useScrollReveal()

    return (
        <section id="contact" className={`section reveal-section ${isVisible ? 'visible' : ''}`} ref={ref}>
            <div className="contact__wrapper">
                <div className="section__header">
                    <span className="section__number">09</span>
                    <h2 className="section__title">Let's Connect</h2>
                </div>
                <p className="contact__text">
                    I'm always open to discussing new opportunities, collaborations, or just chatting about tech.
                    Feel free to reach out — I'd love to hear from you.
                </p>
                <div className="contact__actions">
                    <a href="mailto:joisedivya.v@gmail.com" className="contact__btn contact__btn--primary">
                        <i className="fas fa-envelope"></i> Send an Email
                    </a>
                    <a href="https://www.linkedin.com/in/velankani-joise-divya/" target="_blank" rel="noopener noreferrer" className="contact__btn contact__btn--secondary">
                        <i className="fab fa-linkedin-in"></i> LinkedIn
                    </a>
                    <a href="https://github.com/divya-jd" target="_blank" rel="noopener noreferrer" className="contact__btn contact__btn--secondary">
                        <i className="fab fa-github"></i> GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}
