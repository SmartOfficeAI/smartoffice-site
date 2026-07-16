const benefits = [
  "Implantação rápida e evolutiva",
  "Arquitetura moderna em nuvem",
  "Segurança e rastreabilidade",
  "Integração com sistemas existentes",
  "Redução de tarefas manuais",
  "Escalabilidade para novos processos",
];

export function Benefits() {
  return (
    <section className="section white">
      <div className="container benefits-layout">
        <div>
          <span className="section-tag">POR QUE SMARTOFFICE AI?</span>
          <h2>Projetada para gerar valor desde o primeiro processo.</h2>
          <p>
            Combinamos visão de negócio, arquitetura de software e experiência
            prática em automação para construir soluções seguras, escaláveis e
            mensuráveis.
          </p>
          <a className="text-link" href="#contato">Fale com um especialista →</a>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div key={benefit}><span>✓</span><strong>{benefit}</strong></div>
          ))}
        </div>
      </div>
    </section>
  );
}
