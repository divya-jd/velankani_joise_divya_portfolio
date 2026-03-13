import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const experiences = [
    {
        role: 'Software Engineer — Data Platforms (Co-op)',
        company: 'Boehringer Ingelheim',
        location: 'USA',
        period: 'Jan 2026 – Present',
        current: true,
        bullets: [
            'Developed data validation and ingestion services using Spring Boot and REST APIs to integrate research and operational datasets into internal analytics systems.',
            'Built data processing workflows that perform schema checks, data cleaning, and consistency validation before datasets are consumed by downstream analytics applications.',
            'Created Datadog monitors for metrics and logs to identify pipeline health and detect failures early.',
        ],
        tags: ['Spring Boot', 'REST APIs', 'Datadog', 'Data Pipelines'],
    },
    {
        role: 'Full Stack Developer (Graduate Assistant)',
        company: 'Georgia State University',
        location: 'USA',
        period: 'Aug 2024 – Dec 2025',
        bullets: [
            'Modernized a monolithic research platform into scalable microservices using Spring Boot and React, integrating Kafka-based event streaming for asynchronous data processing.',
            'Designed and implemented automated CI/CD pipelines using Jenkins with SonarQube quality gates, mutation testing, and regression automation — accelerating release cycles by 50%.',
            'Built an observability and monitoring framework using Datadog APM, distributed tracing, and structured logging, reducing incident detection time by 60%.',
        ],
        tags: ['Spring Boot', 'React', 'Kafka', 'Jenkins', 'Datadog APM'],
    },
    {
        role: 'Software Engineer',
        company: 'The Exhibition Factory',
        location: 'Dubai, UAE',
        period: 'Jan 2023 – Aug 2024',
        bullets: [
            'Developed event management applications using Spring Boot and React, enabling exhibitors to manage booth registrations, schedules, and attendee interactions through a centralized digital platform.',
            'Designed Kafka-based event streaming workflows to handle high-volume attendee registrations, ticket scans, and notifications during large-scale exhibitions.',
            'Built RESTful APIs and automated deployment pipelines supporting real-time analytics dashboards for organizers.',
        ],
        tags: ['Spring Boot', 'React', 'Kafka', 'REST APIs', 'CI/CD'],
    },
    {
        role: 'Software Engineer (Intern)',
        company: 'Jayaho CCC Digital Pvt Ltd',
        location: 'India',
        period: 'Mar 2022 – Aug 2022',
        bullets: [
            'Built a QR code system using Spring Boot, ZXing, and MySQL, reducing onboarding time by 40% across 15+ restaurants.',
            'Enabled real-time table tracking with WebSockets and Redis, improving allocation speed by 45%.',
            'Developed RESTful APIs with Spring Security and JPA, supporting 1,200+ daily requests at 99.2% uptime with sub-300ms latency.',
            'Implemented CI/CD with GitHub Actions and automated testing using JUnit (85% coverage), achieving 96% deployment success.',
        ],
        tags: ['Spring Boot', 'WebSockets', 'Redis', 'MySQL', 'JUnit'],
    },
]

function ExperienceCard({ exp, index }) {
    const [expanded, setExpanded] = useState(index === 0)

    return (
        <div className={`exp-card stagger-item ${exp.current ? 'exp-card--current' : ''}`}>
            <div className="exp-card__dot">
                {exp.current && <span className="exp-card__pulse" />}
            </div>

            <div className="exp-card__content">
                <div className="exp-card__header" onClick={() => setExpanded(!expanded)}>
                    <div>
                        <h3 className="exp-card__role">{exp.role}</h3>
                        <p className="exp-card__company">
                            {exp.company} <span className="exp-card__location">· {exp.location}</span>
                        </p>
                    </div>
                    <div className="exp-card__meta">
                        <span className="exp-card__period">{exp.period}</span>
                        <i className={`fas fa-chevron-down exp-card__chevron ${expanded ? 'exp-card__chevron--open' : ''}`}></i>
                    </div>
                </div>

                <div className={`exp-card__details ${expanded ? 'exp-card__details--open' : ''}`}>
                    <ul className="exp-card__bullets">
                        {exp.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                    <div className="exp-card__tags">
                        {exp.tags.map(tag => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Experience() {
    const [ref, isVisible] = useScrollReveal()

    return (
        <section id="experience" className={`section reveal-section ${isVisible ? 'visible' : ''}`} ref={ref}>
            <div className="section__header">
                <span className="section__number">02</span>
                <h2 className="section__title">Experience</h2>
            </div>

            <div className="experience__timeline">
                {experiences.map((exp, i) => (
                    <ExperienceCard key={i} exp={exp} index={i} />
                ))}
            </div>
        </section>
    )
}
