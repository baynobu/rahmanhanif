import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <section className="contact-section container" id="contact">
      <div className="contact-copy reveal">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s work together.</h2>
      </div>
      <div className="contact-links-group reveal reveal-delay">
        <a className="contact-email" href={`mailto:${personal.email}`}>
          {personal.email} <span>↗</span>
        </a>
      </div>
    </section>
  );
}
