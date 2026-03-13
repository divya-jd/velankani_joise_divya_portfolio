import useScrollReveal from '../hooks/useScrollReveal'

const publications = [
    {
        title: 'Enhancing Edge Intelligence with Adaptive Precision & RPCA',
        venue: 'IEEE Xplore 2024',
        highlights: ['23% inference speedup', '30% memory reduction under constrained settings'],
        link: 'https://ieeexplore.ieee.org/document/10507942',
    },
    {
        title: 'Enhancing Traffic Flow Through Advanced ACO Mechanism',
        venue: 'IEEE INFOCOM DRONECOM 2024 — Vancouver, Canada',
        highlights: ['72% improved convergence speed', '35% reduced computation time'],
        link: 'https://ieeexplore.ieee.org/document/10620760',
    },
]

const certifications = [
    'OCI Developer Professional',
    'SQL Intermediate — HackerRank',
    'Hugging Face AI Agents Fundamentals',
    'Stanford Machine Learning — Coursera',
]

const achievements = [
    { text: 'Radiance Bowl — Innovation Technologies: Top 3 finalist, selected for Phase 2 development', icon: 'fa-trophy' },
    { text: 'Merit-Based Scholarship — Full tuition waiver for MS in Computer Science at Georgia State University', icon: 'fa-award' },
    { text: 'Research Grant — Received INR 100,000 (USD 1,200) for ML research and publication at SRM University AP', icon: 'fa-flask' },
    { text: 'Winner of WebMobDevthon \'22 — 48-hour hackathon by SRM AP', icon: 'fa-medal' },
]

export default function Publications() {
    const [ref1, vis1] = useScrollReveal()
    const [ref2, vis2] = useScrollReveal()
    const [ref3, vis3] = useScrollReveal()

    return (
        <>
            <section id="publications" className={`section reveal-section ${vis1 ? 'visible' : ''}`} ref={ref1}>
                <div className="section__header">
                    <span className="section__number">06</span>
                    <h2 className="section__title">Publications</h2>
                </div>

                <div className="publications__grid">
                    {publications.map((pub, i) => (
                        <a key={i} href={pub.link} target="_blank" rel="noopener noreferrer" className="pub-card stagger-item">
                            <div className="pub-card__venue">{pub.venue}</div>
                            <h3 className="pub-card__title">{pub.title}</h3>
                            <ul className="pub-card__highlights">
                                {pub.highlights.map((h, j) => (
                                    <li key={j}>{h}</li>
                                ))}
                            </ul>
                            <span className="pub-card__link">
                                Read on IEEE Xplore <i className="fas fa-external-link-alt"></i>
                            </span>
                        </a>
                    ))}
                </div>
            </section>

            <section id="certifications" className={`section reveal-section ${vis2 ? 'visible' : ''}`} ref={ref2}>
                <div className="section__header">
                    <span className="section__number">07</span>
                    <h2 className="section__title">Certifications</h2>
                </div>
                <div className="certs__grid">
                    {certifications.map((cert, i) => (
                        <div key={i} className="cert-item stagger-item">
                            <i className="fas fa-certificate"></i>
                            <span>{cert}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section id="achievements" className={`section reveal-section ${vis3 ? 'visible' : ''}`} ref={ref3}>
                <div className="section__header">
                    <span className="section__number">08</span>
                    <h2 className="section__title">Achievements</h2>
                </div>
                <div className="achievements__list">
                    {achievements.map((a, i) => (
                        <div key={i} className="achievement-item stagger-item">
                            <div className="achievement-item__icon">
                                <i className={`fas ${a.icon}`}></i>
                            </div>
                            <p>{a.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
