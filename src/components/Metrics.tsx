const metrics = [
  ["+150", "automações e projetos"],
  ["30 anos", "de experiência em tecnologia"],
  ["até 90%", "de redução em tarefas manuais"],
  ["24x7", "inteligência disponível"],
];

export function Metrics() {
  return (
    <section className="metrics-section">
      <div className="container metrics-grid">
        {metrics.map(([value, label]) => (
          <div className="metric-highlight" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
