import './NavBar.scss';

export function NavBar() {
  return (
    <div className="container">
      <nav>
        <a href="/">
          Menu
        </a>
        <a href="/#quartos-section">
          Quartos
        </a>
        <a href="/#feedback">
          Avaliações
        </a>
      </nav>
    </div>
  );
}
