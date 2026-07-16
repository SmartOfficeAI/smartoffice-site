const technologies = [
  "Microsoft Azure",
  "OpenAI",
  "Power Platform",
  "Automation Anywhere",
  "Python",
  "FastAPI",
  "PostgreSQL",
];

export function TechStack() {
  return (
    <section className="tech-strip" aria-label="Tecnologias integradas">
      <div className="container">
        <p className="tech-label">TECNOLOGIAS INTEGRADAS</p>
        <div className="tech-list">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
