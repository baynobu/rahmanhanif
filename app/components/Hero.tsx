import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="hero container" id="top">
      <div className="hero-copy reveal">
        <h1>{personal.name}</h1>
        <p className="hero-role">{personal.role}</p>
        <p className="hero-intro">{personal.summary}</p>

        <div className="hero-actions">
          <a
            className="text-link"
            href={personal.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            github.com/{personal.githubUsername} <span>↗</span>
          </a>
          <a
            className="text-link"
            href={personal.linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
