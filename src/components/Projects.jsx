import useScrollReveal from '../hooks/useScrollReveal'

const projects = [
    {
        title: 'Distributed Key–Value Store',
        description: 'Multithreaded TCP key–value store with support for concurrent clients using Java thread pools. Features LRU caching, write-ahead logging, and a modular replication manager with consistent hashing for sharding support.',
        tags: ['Java', 'Concurrency', 'Sockets', 'LRU Cache'],
        github: 'https://github.com/divya-jd/Distributed-Key-Value-Store-Java-',
    },
    {
        title: 'Employee Management System',
        description: 'Full-stack EMS using Spring Boot, React, and MySQL with 10+ secured REST APIs using JWT-based Role-Based Access Control. Includes H2 in-memory database for local development and automated data seeding.',
        tags: ['Spring Boot', 'React', 'MySQL', 'JWT', 'RBAC'],
        github: 'https://github.com/divya-jd/EMS-Software',
    },
    {
        title: 'Bootstrapped Confidence Calibration for LLMs',
        description: 'Iterative self-evaluation framework to improve confidence calibration in large language models. Achieved 25–30% higher AUROC for failure prediction and reduced calibration error (ECE) to 0.025–0.032.',
        tags: ['Python', 'PyTorch', 'Transformers', 'Multimodal'],
        github: null,
    },
]

export default function Projects() {
    const [ref, isVisible] = useScrollReveal()

    return (
        <section id="projects" className={`section reveal-section ${isVisible ? 'visible' : ''}`} ref={ref}>
            <div className="section__header">
                <span className="section__number">03</span>
                <h2 className="section__title">Projects</h2>
            </div>

            <div className="projects__grid">
                {projects.map((project, i) => (
                    <div key={i} className="project-card stagger-item">
                        <div className="project-card__icon">
                            <i className="fas fa-folder-open"></i>
                        </div>
                        <div className="project-card__links">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <i className="fab fa-github"></i>
                                </a>
                            )}
                        </div>
                        <h3 className="project-card__title">{project.title}</h3>
                        <p className="project-card__desc">{project.description}</p>
                        <div className="project-card__tags">
                            {project.tags.map(tag => (
                                <span key={tag} className="tag tag--sm">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
