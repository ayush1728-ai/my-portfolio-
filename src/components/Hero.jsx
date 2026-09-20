function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-grid"></div>

      <div className="hero-particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>

      <div className="hero-content">
        <div className="hero-status">
          <span></span>
          AVAILABLE FOR PROJECTS
        </div>

        <p className="hero-tag">
          B.TECH CSE • 4TH YEAR
        </p>

        <h1>
          Building
          <span> digital </span>
          experiences
          <br />
          that <i>feel alive.</i>
        </h1>

        <p className="hero-description">
          I'm Ayush, a frontend developer focused on creating
          modern, responsive and interactive web experiences
          using React and JavaScript.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => scrollToSection("projects")}
          >
            Explore My Work
            <span>↗</span>
          </button>

          <button
            className="secondary-btn"
            onClick={() => scrollToSection("game")}
          >
            <span>🎮</span>
            Play Game
          </button>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/ayush1728-ai"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/ayush-kumar-a332a2364"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://leetcode.com/u/xLGpt985vN"
            target="_blank"
            rel="noreferrer"
          >
            LeetCode ↗
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-ring ring-one"></div>
        <div className="visual-ring ring-two"></div>

        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>

        <div className="profile-circle">
          <div className="profile-inner">
            <span>AK</span>
          </div>
        </div>

        <div className="floating-badge badge-top">
          <span>⚡</span>
          <div>
            <small>FOCUS</small>
            <strong>CREATIVE</strong>
          </div>
        </div>

        <div className="floating-badge badge-bottom">
          <span>⌘</span>
          <div>
            <small>STACK</small>
            <strong>REACT + JS</strong>
          </div>
        </div>

        <div className="code-card">
          <div className="code-header">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <small>ayush.js</small>
          </div>

          <pre>
{`const Ayush = {
  role: "Frontend Developer",
  stack: ["React", "JS", "CSS"],
  status: "building..."
};`}
          </pre>
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div></div>
        <b>↓</b>
      </div>
    </section>
  );
}

export default Hero;