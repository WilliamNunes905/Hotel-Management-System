import { NavLink } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return (
    <div className="container">
      <nav>
        <NavLink to="/messages">
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

export default NavBar;
