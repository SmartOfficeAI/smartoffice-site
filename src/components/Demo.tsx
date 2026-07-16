export function Demo() {
  return (
    <section className="section demo-section" id="demo">
      <div className="container demo-layout">
        <div>
          <span className="section-tag">DEMONSTRAÇÃO</span>
          <h2>Veja o SmartFile em ação.</h2>
          <p>
            Uma experiência visual de como documentos são enviados, analisados
            e transformados em respostas úteis para o negócio.
          </p>

          <div className="demo-steps">
            <div><span>1</span><p><strong>Envie um arquivo</strong><small>PDF, imagem, DOCX ou planilha.</small></p></div>
            <div><span>2</span><p><strong>A IA analisa</strong><small>OCR, classificação e contexto.</small></p></div>
            <div><span>3</span><p><strong>Faça perguntas</strong><small>Respostas com fontes e rastreabilidade.</small></p></div>
          </div>
        </div>

        <div className="upload-console">
          <div className="upload-header">
            <span>Nova análise</span>
            <small>SmartFile AI</small>
          </div>
          <div className="upload-zone">
            <div className="upload-icon">↑</div>
            <strong>Arraste seu documento aqui</strong>
            <p>ou clique para selecionar um arquivo</p>
            <button>Selecionar documento</button>
          </div>
          <div className="upload-status">
            <div>
              <span className="file-badge">PDF</span>
              <p><strong>Contrato_Cliente_2026.pdf</strong><small>2,8 MB • 24 páginas</small></p>
            </div>
            <span className="status-pill">Analisado</span>
          </div>
          <div className="analysis-result">
            <span>IA</span>
            <p>
              Documento classificado como <strong>contrato comercial</strong>.
              Identifiquei vigência, reajuste, multa e obrigações principais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
