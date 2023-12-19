import { NavLink } from 'react-router-dom';
import './NavBar.scss';

export function NavBar() {
  return (
    <div className="container">
      <nav>
        <NavLink to="/">
          Menu
        </NavLink>
        <NavLink to="/messages">
          Quartos
        </NavLink>
        <NavLink to="/messages">
          Avaliações
        </NavLink>
      </nav>
    </div>
  );
}
