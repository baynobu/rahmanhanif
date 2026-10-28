import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section className="experience-section" id="experience">
      <div className="container experience-grid">
        <p className="eyebrow reveal">Experience history</p>
        <div className="experience-list reveal reveal-delay">
          {experiences.map((exp, idx) => (
            <article className="experience-row" key={idx}>
              <span className="experience-year">{exp.period}</span>
              <div>
                <h3>{exp.role}</h3>
                <p>{exp.description}</p>
              </div>
              <span className="experience-place">{exp.place}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
