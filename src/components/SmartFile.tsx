export function SmartFile() {
  return (
    <section className="section smartfile-section" id="smartfile">
      <div className="container smartfile-layout">
        <div className="smartfile-copy">
          <span className="section-tag light-tag">SMARTFILE AI</span>
          <h2>Encontre qualquer documento em segundos.</h2>
          <p>
            O SmartFile transforma arquivos dispersos em conhecimento
            pesquisável, seguro e acessível por meio de inteligência artificial.
          </p>

          <div className="feature-list">
            <div><span>01</span><strong>Pesquisa semântica</strong><p>Encontre pelo significado, não apenas pelo nome.</p></div>
            <div><span>02</span><strong>Chat com documentos</strong><p>Faça perguntas e receba respostas com contexto.</p></div>
            <div><span>03</span><strong>Governança e auditoria</strong><p>Controle acessos, versões e evidências.</p></div>
          </div>
        </div>

        <div className="smartfile-console">
          <div className="console-header">
            <span>SmartFile Assistant</span>
            <small>Online</small>
          </div>
          <div className="console-body">
            <div className="user-message">
              Quais contratos vencem nos próximos 60 dias?
            </div>
            <div className="assistant-message">
              <div className="assistant-badge">IA</div>
              <div>
                <p>
                  Encontrei <strong>7 contratos</strong> com vencimento nos
                  próximos 60 dias.
                </p>
                <ul>
                  <li>Fornecedor Alpha — 12/08/2026</li>
                  <li>Serviços Beta — 19/08/2026</li>
                  <li>Licenciamento Gamma — 02/09/2026</li>
                </ul>
                <button>Gerar relatório executivo</button>
              </div>
            </div>
            <div className="console-input">Faça uma pergunta sobre seus documentos… <b>↑</b></div>
          </div>
        </div>
      </div>
    </section>
  );
}
