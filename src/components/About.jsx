function About() {
  return (
   <section className="about section reveal" id="about">
      <div className="section-heading">
        <span>01 / ABOUT ME</span>
        <h2>
          Curious mind.
          <br />
          <i>Creative builder.</i>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-main">
          <p>
            I enjoy turning ideas into interactive websites that are
            <strong> clean, responsive and fun to use.</strong>
          </p>
        </div>

        <div className="about-text">
          <p>
            I'm currently pursuing B.Tech in Computer Science and
            Engineering. My main focus is frontend development with
            React, JavaScript and modern CSS.
          </p>

          <p>
            Alongside development, I'm learning problem solving and
            data structures to strengthen my programming fundamentals.
          </p>

          <div className="about-stats">
            <div>
              <strong>React</strong>
              <span>Learning & Building</span>
            </div>

            <div>
              <strong>Frontend</strong>
              <span>Projects & Practice</span>
            </div>

            <div>
              <strong>DSA</strong>
              <span>Currently Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;