import { portfolioData } from "../data/portfolioData";

export default function TechStack() {
  const { techStack } = portfolioData;

  return (
    <section className="stack-section container" id="stack">
      <div className="section-heading reveal">
        <p className="eyebrow">Skills &amp; technologies</p>
        <h2>Tech stack</h2>
      </div>

      <div className="stack-grid reveal">
        {techStack.map((item) => (
          <div className="stack-item" key={item.number}>
            <b>{item.number}</b>
            <strong>{item.title}</strong>
            <span>{item.subtitle}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
