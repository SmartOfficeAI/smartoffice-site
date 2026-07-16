export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid premium-footer">
        <div>
          <a className="brand footer-brand" href="#home">
            <span className="brand-symbol">S</span>
            <span className="brand-name">SmartOffice <b>AI</b></span>
          </a>
          <p>Transformando documentos em inteligência.</p>
          <small>IA corporativa, automação e gestão documental.</small>
        </div>

        <div>
          <strong>Produtos</strong>
          <a href="#smartfile">SmartFile</a>
          <a href="#solucoes">Automação Inteligente</a>
          <a href="#solucoes">IA Corporativa</a>
        </div>

        <div>
          <strong>Empresa</strong>
          <a href="#quem-somos">Quem somos</a>
          <a href="#casos">Casos de uso</a>
          <a href="#demo">Demonstração</a>
        </div>

        <div>
          <strong>Contato</strong>
          <a href="mailto:comercial@smartofficeai.com.br">comercial@smartofficeai.com.br</a>
          <a href="https://github.com/SmartOfficeAI" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#contato">Solicitar demonstração</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 SmartOffice AI. Todos os direitos reservados.</span>
        <span>IA • Automação • Documentos inteligentes</span>
      </div>
    </footer>
  );
}
