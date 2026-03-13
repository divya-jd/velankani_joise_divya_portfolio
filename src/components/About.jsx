import useScrollReveal from '../hooks/useScrollReveal'

const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '2', label: 'IEEE Publications' },
    { value: '4.2', label: 'GPA (MS CS)' },
]

export default function About() {
    const [ref, isVisible] = useScrollReveal()

    return (
        <section id="about" className={`section reveal-section ${isVisible ? 'visible' : ''}`} ref={ref}>
            <div className="section__header">
                <span className="section__number">01</span>
                <h2 className="section__title">About Me</h2>
            </div>

            <div className="about__content">
                <div className="about__text">
                    <p>
                        I'm a Software Engineer with a passion for building robust backend systems, data pipelines, and full-stack
                        applications. Currently working at <strong>Boehringer Ingelheim</strong> on data validation and ingestion
                        platforms, I bring hands-on experience with Java, Spring Boot, React, Kafka, and cloud-native architectures.
                    </p>
                    <p>
                        My background spans diverse software engineering roles, from modernizing
                        monolithic systems into microservices at Georgia State University to designing event-driven architectures for
                        large-scale exhibitions. I'm also an IEEE-published researcher with work in traffic optimization
                        and edge intelligence.
                    </p>
                    <p>
                        I thrive at the intersection of engineering and impact, whether it's reducing deployment cycles by 50%,
                        cutting incident detection time by 60%, or mentoring students in Python and AI.
                    </p>
                </div>

                <div className="about__stats">
                    {stats.map(stat => (
                        <div className="about__stat stagger-item" key={stat.label}>
                            <span className="about__stat-value">{stat.value}</span>
                            <span className="about__stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
