export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" />
      <div className="hero-glow hero-glow-a" />
      <div className="hero-glow hero-glow-b" />

      <div className="container hero-layout">
        <div className="hero-content">
          <span className="eyebrow">IA • AUTOMAÇÃO • DOCUMENTOS</span>
          <h1>
            Transformando documentos em <span>inteligência.</span>
          </h1>
          <p>
            Plataforma corporativa de inteligência artificial, automação
            inteligente e gestão documental para empresas que desejam
            produtividade, segurança e inovação.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#smartfile">
              Conheça o SmartFile
              <span aria-hidden="true">→</span>
            </a>
            <a className="button button-secondary" href="#contato">
              Solicite uma demonstração
            </a>
          </div>

          <div className="hero-highlights">
            <div>
              <strong>+150</strong>
              <span>automações e projetos</span>
            </div>
            <div>
              <strong>30 anos</strong>
              <span>em tecnologia</span>
            </div>
            <div>
              <strong>IA aplicada</strong>
              <span>ao negócio real</span>
            </div>
          </div>
        </div>

        <div className="product-preview">
          <div className="app-window">
            <div className="app-topbar">
              <div className="window-dots"><i/><i/><i/></div>
              <span>SmartFile AI</span>
              <small>Ambiente seguro</small>
            </div>

            <div className="app-main">
              <aside className="app-sidebar">
                <div className="sidebar-logo">S</div>
                <span className="sidebar-item active" />
                <span className="sidebar-item" />
                <span className="sidebar-item" />
                <span className="sidebar-item" />
              </aside>

              <div className="dashboard">
                <div className="dashboard-heading">
                  <div>
                    <small>VISÃO GERAL</small>
                    <h3>Documentos inteligentes</h3>
                  </div>
                  <button>Novo documento</button>
                </div>

                <div className="search">
                  <span>Pesquisar contratos, notas fiscais e processos...</span>
                  <b>⌕</b>
                </div>

                <div className="stat-row">
                  <div className="stat-card">
                    <span>Documentos</span>
                    <strong>12.480</strong>
                    <small>+18% no mês</small>
                  </div>
                  <div className="stat-card">
                    <span>Tempo economizado</span>
                    <strong>486 h</strong>
                    <small>automação ativa</small>
                  </div>
                </div>

                <div className="ai-answer">
                  <div className="ai-icon">IA</div>
                  <div>
                    <strong>Assistente documental</strong>
                    <p>
                      Encontrei 8 documentos relacionados. Posso resumir,
                      comparar cláusulas e gerar uma resposta executiva.
                    </p>
                  </div>
                </div>

                <div className="docs">
                  <div><span>PDF</span><p>Contrato_Fornecedor_2026.pdf</p><b>98%</b></div>
                  <div><span>DOC</span><p>Politica_Seguranca_Dados.docx</p><b>94%</b></div>
                  <div><span>XLS</span><p>Relatorio_Financeiro_Q2.xlsx</p><b>91%</b></div>
                </div>
              </div>
            </div>
          </div>

          <div className="floating-note note-one"><i /> OCR concluído</div>
          <div className="floating-note note-two"><b>RAG</b> Resposta contextual</div>
        </div>
      </div>
    </section>
  );
}
