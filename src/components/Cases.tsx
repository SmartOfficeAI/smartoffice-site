const cases = [
  ["Contabilidade", "Organização documental, conciliações e rotinas fiscais."],
  ["Jurídico", "Pesquisa em contratos, processos e documentos com IA."],
  ["Supermercados", "Automação financeira, fiscal e operacional."],
  ["Financeiro", "Conferências, relatórios, evidências e integrações."],
  ["Recursos Humanos", "Documentos, admissões e atendimento interno."],
  ["Indústria", "Fluxos, qualidade, manutenção e backoffice."],
];

export function Cases() {
  return (
    <section className="section dark" id="casos">
      <div className="container">
        <div className="section-heading dark-heading">
          <span className="section-tag light-tag">CASOS DE USO</span>
          <h2>Inteligência que se adapta ao seu setor.</h2>
          <p>
            Da gestão documental à automação operacional, criamos soluções
            alinhadas aos processos de cada negócio.
          </p>
        </div>

        <div className="cases-grid">
          {cases.map(([title, description], index) => (
            <article className="case-card" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
