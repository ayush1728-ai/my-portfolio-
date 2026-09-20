const projects = [
  {
    number: "01",
    title: "Food Delivery Website",
    category: "FRONTEND",
    description: "A responsive food delivery website with a clean layout and user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://afood.netlify.app/",
  },
  {
    number: "02",
    title: "Gym Website",
    category: "FRONTEND",
    description: "A modern fitness website designed with a strong visual style and responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://agymloginpage.netlify.app/",
  },
  {
    number: "03",
    title: "A Cool Login Page",
    category: "UI DESIGN",
    description: "A stylish login page focused on clean design, spacing and modern visual effects.",
    tech: ["HTML", "CSS"],
    link: "https://acoolloginpage.netlify.app/",
  },
 
  {
    number: "05",
    title: "Personal Portfolio",
    category: "FRONTEND",
    description: "A personal portfolio website showcasing my skills, projects and frontend development work.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://ayushhhhhh.netlify.app/",
  },
];

function Projects() {
  return (
    <section className="projects section reveal" id="projects">
      <div className="section-heading">
        <span>03 / SELECTED WORK</span>
        <h2>Built with <i>curiosity.</i></h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span>{project.number}</span>
              <small>{project.category}</small>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a
                href={project.link}
                target={project.link === "#game" ? "_self" : "_blank"}
                rel="noreferrer"
              >
                {project.link === "#game" ? "Explore Project" : "View Live Project"} ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;