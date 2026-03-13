import useScrollReveal from '../hooks/useScrollReveal'

const education = [
    {
        school: 'Georgia State University',
        degree: 'Master of Science in Computer Science',
        gpa: 'GPA: 4.2 / 4.3',
        period: 'Aug 2024 – May 2026',
        coursework: 'Database Systems, Natural Language Processing and LLMs, Advanced Computer Networks',
        current: true,
    },
    {
        school: 'SRM University AP',
        degree: 'Bachelor of Technology in Computer Science (AI-ML)',
        gpa: 'GPA: 9.2 / 10.0',
        period: 'Aug 2020 – May 2024',
        coursework: 'Data Structures & Algorithms, Operating Systems, Software Engineering, Artificial Intelligence, Machine Learning',
        current: false,
    },
]

export default function Education() {
    const [ref, isVisible] = useScrollReveal()

    return (
        <section id="education" className={`section reveal-section ${isVisible ? 'visible' : ''}`} ref={ref}>
            <div className="section__header">
                <span className="section__number">05</span>
                <h2 className="section__title">Education</h2>
            </div>

            <div className="education__cards">
                {education.map((edu, i) => (
                    <div key={i} className="edu-card stagger-item">
                        <div className="edu-card__top">
                            <div>
                                <h3 className="edu-card__school">{edu.school}</h3>
                                <p className="edu-card__degree">{edu.degree}</p>
                            </div>
                            <div className="edu-card__meta">
                                <span className="edu-card__period">{edu.period}</span>
                                <span className="edu-card__gpa">{edu.gpa}</span>
                            </div>
                        </div>
                        <p className="edu-card__coursework">
                            <strong>Relevant Coursework:</strong> {edu.coursework}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
