const stages = [
  ["01", "Documento", "PDF, imagem, planilha ou contrato."],
  ["02", "OCR", "Extração e estruturação do conteúdo."],
  ["03", "IA", "Classificação, contexto e entendimento."],
  ["04", "Pesquisa", "Busca semântica por significado."],
  ["05", "RAG", "Respostas fundamentadas nos arquivos."],
  ["06", "Automação", "Ações, alertas e integrações."],
];

export function Pipeline() {
  return (
    <section className="section pipeline-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">COMO FUNCIONA</span>
          <h2>Do documento à ação inteligente.</h2>
          <p>
            Um fluxo completo para transformar informação não estruturada em
            conhecimento, decisão e automação.
          </p>
        </div>

        <div className="pipeline-grid">
          {stages.map(([number, title, description], index) => (
            <article className="pipeline-card" key={title}>
              <span className="pipeline-number">{number}</span>
              <div className="pipeline-node">{title.slice(0, 2).toUpperCase()}</div>
              <h3>{title}</h3>
              <p>{description}</p>
              {index < stages.length - 1 && <i aria-hidden="true">→</i>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
