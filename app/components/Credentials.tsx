import { portfolioData } from "../data/portfolioData";

export default function Credentials() {
  const { awards, education } = portfolioData;

  return (
    <section className="credentials-section" id="credentials">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Education &amp; achievements</p>
          <h2>Credentials</h2>
        </div>

        <div className="credentials-grid reveal">
          <div className="credentials-box">
            <h3>Kompetisi &amp; Prestasi</h3>
            {awards.map((award, idx) => (
              <div className="credential-item" key={idx}>
                <div className="credential-meta">
                  <span>{award.category}</span>
                  <span>{award.year}</span>
                </div>
                <div className="credential-title">{award.title}</div>
                <p className="credential-desc">{award.event}</p>
              </div>
            ))}
          </div>

          <div className="credentials-box">
            <h3>Pendidikan Formal</h3>
            {education.map((edu, idx) => (
              <div className="credential-item" key={idx}>
                <div className="credential-meta">
                  <span>{edu.period}</span>
                  <span>{edu.status}</span>
                </div>
                <div className="credential-title">{edu.institution}</div>
                <p className="credential-desc">{edu.major}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

