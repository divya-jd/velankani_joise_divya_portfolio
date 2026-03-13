import useScrollReveal from '../hooks/useScrollReveal'

const skillCategories = [
    {
        title: 'Programming Languages',
        icon: 'fas fa-code',
        skills: ['Java', 'Python', 'Groovy', 'SQL'],
    },
    {
        title: 'Backend & Frameworks',
        icon: 'fas fa-server',
        skills: ['Spring Boot', 'RESTful APIs', 'Microservices', 'Kafka', 'WebSockets'],
    },
    {
        title: 'Cloud & DevOps',
        icon: 'fas fa-cloud',
        skills: ['AWS', 'Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'CI/CD Pipelines'],
    },
    {
        title: 'Testing & Quality',
        icon: 'fas fa-vial',
        skills: ['JUnit', 'Mockito', 'TDD', 'PIT Mutation Testing', 'SonarQube', 'Regression Testing'],
    },
    {
        title: 'Monitoring & Observability',
        icon: 'fas fa-chart-line',
        skills: ['Datadog', 'Locust (Load Testing)'],
    },
    {
        title: 'AI / Machine Learning',
        icon: 'fas fa-brain',
        skills: ['NLP', 'LLMs', 'Deep Learning', 'Computer Vision', 'Feature Engineering', 'Model Evaluation'],
    },
    {
        title: 'Developer Tools',
        icon: 'fas fa-tools',
        skills: ['Git', 'GitHub', 'Jira', 'Postman', 'Bruno', 'Figma', 'System Design'],
    },
]

export default function Skills() {
    const [ref, isVisible] = useScrollReveal()

    return (
        <section id="skills" className={`section reveal-section ${isVisible ? 'visible' : ''}`} ref={ref}>
            <div className="section__header">
                <span className="section__number">04</span>
                <h2 className="section__title">Skills</h2>
            </div>

            <div className="skills__grid">
                {skillCategories.map((cat, i) => (
                    <div key={i} className="skill-group stagger-item">
                        <div className="skill-group__header">
                            <i className={cat.icon}></i>
                            <h3>{cat.title}</h3>
                        </div>
                        <div className="skill-group__tags">
                            {cat.skills.map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
