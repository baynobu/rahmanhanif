import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section className="work-section container" id="work">
      <div className="section-heading reveal">
        <p className="eyebrow">Selected projects</p>
        <h2>Projects</h2>
      </div>

      <div className="work-grid">
        {projects.map((project, idx) => {
          const cardInner = (
            <>
              <div className="repo-top">
                <span className="folder-icon">▣</span>
                <span className="repo-arrow">↗</span>
              </div>
              <div className="project-meta">
                <span>{project.number}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="repo-footer">
                <span>
                  <i className={`language-dot ${project.techColor || "yellow"}`}></i>{" "}
                  {project.tech}
                </span>
                <span>★ {project.stars || "0"}</span>
                <span>⑂ {project.forks || "0"}</span>
              </div>
            </>
          );

          if (project.repoUrl) {
            return (
              <a
                key={project.id || idx}
                className={`project-card ${project.isLarge ? "project-large" : ""} reveal`}
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                {cardInner}
              </a>
            );
          }

          return (
            <div
              key={project.id || idx}
              className={`project-card ${project.isLarge ? "project-large" : ""} reveal`}
            >
              {cardInner}
            </div>
          );
        })}
      </div>
    </section>
  );
}
