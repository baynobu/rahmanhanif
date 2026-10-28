"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const [year, setYear] = useState(2026);
  const { personal } = portfolioData;

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <p>
          © <span>{year}</span> {personal.name}
        </p>
        <div className="social-links">
          <a
            href={personal.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
