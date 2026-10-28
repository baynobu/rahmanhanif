"use client";

import { useState } from "react";
import { portfolioData } from "../data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#top" className="brand" aria-label="Kembali ke beranda">
          {portfolioData.personal.brandInitials}
          <span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-nav"
          aria-label={isOpen ? "Tutup navigasi" : "Buka navigasi"}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
        </button>

        <nav
          className={`main-nav ${isOpen ? "is-open" : ""}`}
          id="main-nav"
          aria-label="Navigasi utama"
        >
          <a href="#work" onClick={closeMenu}>
            Projects
          </a>
          <a href="#stack" onClick={closeMenu}>
            Stack
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#credentials" onClick={closeMenu}>
            Credentials
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a
            className="nav-github"
            href={portfolioData.personal.githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
