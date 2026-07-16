const solutions = [
  {
    code: "SF",
    title: "SmartFile",
    text: "Gestão inteligente de documentos com OCR, pesquisa semântica, chat contextual e governança.",
    items: ["OCR e extração", "Pesquisa semântica", "Chat com documentos", "Auditoria e segurança"],
  },
  {
    code: "AI",
    title: "Automação Inteligente",
    text: "Automação ponta a ponta com RPA, Power Platform, APIs, Python e integrações empresariais.",
    items: ["RPA e workflows", "Power Automate", "Integrações por API", "Automação sob medida"],
  },
  {
    code: "IA",
    title: "IA Corporativa",
    text: "Agentes, copilotos e soluções de IA generativa conectados aos dados e processos da empresa.",
    items: ["Agentes inteligentes", "RAG corporativo", "Copilotos internos", "Assistentes especializados"],
  },
];

export function Solutions() {
  return (
    <section className="section soft" id="solucoes">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">NOSSAS SOLUÇÕES</span>
          <h2>Tecnologia aplicada a desafios reais.</h2>
          <p>
            Soluções modulares que conectam documentos, sistemas, pessoas e
            inteligência artificial.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((item, index) => (
            <article className="solution-card" key={item.title}>
              <div className={`solution-icon solution-icon-${index + 1}`}>
                {item.code}
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ul>
                {item.items.map((entry) => (
                  <li key={entry}><span>✓</span>{entry}</li>
                ))}
              </ul>
              <a href="#contato">Conversar sobre esta solução →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
