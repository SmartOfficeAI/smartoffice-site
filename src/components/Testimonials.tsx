const testimonials = [
  {
    quote:
      "A pesquisa que antes dependia de várias pastas agora pode ser feita em segundos, com contexto e rastreabilidade.",
    role: "Gestão documental e operações",
  },
  {
    quote:
      "A combinação de IA e automação reduz tarefas manuais sem perder governança, evidências e controle.",
    role: "Automação corporativa",
  },
  {
    quote:
      "O SmartFile organiza conhecimento e transforma documentos em uma fonte de decisão para o negócio.",
    role: "Inteligência empresarial",
  },
];

export function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">VALOR PARA O NEGÓCIO</span>
          <h2>Menos procura. Mais decisão.</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <blockquote key={item.role}>
              <span className="quote-mark">“</span>
              <p>{item.quote}</p>
              <footer>
                <strong>SmartOffice AI</strong>
                <span>{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
