const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Responsive Design",
  "Git & GitHub",
  "Problem Solving",
  "Data Structures",
];

function Skills() {
  return (
   <section className="projects section reveal" id="projects">
      <div className="section-heading">
        <span>02 / MY TOOLKIT</span>

        <h2>
          Things I <i>work with.</i>
        </h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={skill}>
            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3>{skill}</h3>

            <b>↗</b>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;