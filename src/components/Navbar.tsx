export function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a className="brand" href="#home" aria-label="SmartOffice AI">
          <span className="brand-symbol">S</span>
          <span className="brand-name">SmartOffice <b>AI</b></span>
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#quem-somos">Quem somos</a>
          <a href="#solucoes">Soluções</a>
          <a href="#smartfile">SmartFile</a>
          <a href="#casos">Casos de uso</a>
          <a href="#demo">Demonstração</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="nav-button" href="#contato">
          Solicitar demonstração
        </a>
      </div>
    </header>
  );
}
