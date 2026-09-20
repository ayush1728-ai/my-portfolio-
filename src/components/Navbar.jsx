import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <button
        className="logo"
        onClick={() => scrollToSection("home")}
      >
        AYUSH<span>.</span>
      </button>

      <div className="nav-links">
        <button onClick={() => scrollToSection("home")}>
          Home
        </button>

        <button onClick={() => scrollToSection("about")}>
          About
        </button>

        <button onClick={() => scrollToSection("skills")}>
          Skills
        </button>

        <button onClick={() => scrollToSection("projects")}>
          Projects
        </button>

        <button onClick={() => scrollToSection("game")}>
          Game
        </button>

        <button onClick={() => scrollToSection("contact")}>
          Contact
        </button>
      </div>

      <button
        className="nav-btn"
        onClick={() => scrollToSection("contact")}
      >
        Let's Talk ↗
      </button>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;