function Contact() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
   <section className="contact section reveal" id="contact">
      <div className="contact-glow"></div>

      <div className="section-heading">
        <span>05 / CONTACT</span>

        <h2>
          Let's build
          <br />
          something <i>cool.</i>
        </h2>
      </div>

      <div className="contact-box">
        <div>
          <span className="contact-label">HAVE AN IDEA?</span>

          <h3>
            Let's turn it into
            <span> reality.</span>
          </h3>

          <p>
            I'm currently building projects with React,
            JavaScript and modern frontend technologies.
          </p>
        </div>

        <div className="contact-actions">
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
        </div>
      </div>

      <footer className="footer">
        <div>
          <strong>AYUSH<span>.</span></strong>
          <p>Frontend Developer • B.Tech CSE</p>
        </div>

        <button onClick={scrollTop}>
          BACK TO TOP ↑
        </button>

        <div className="footer-right">
          <span>© 2026 AYUSH</span>
          <span>BUILT WITH REACT ⚛</span>
        </div>
      </footer>
    </section>
  );
}

export default Contact;