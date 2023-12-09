import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoSvg from '../../assets/logoSilbeck.svg';
import NavBar from '../NavBar';
import ReservationButton from '../Button';
import './Header.scss';

function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          src={ logoSvg }
          alt="Hotel Silbeck"
          className="logo-image"
        />
      </div>
      <NavBar />
      <div className="selects-container">
        <h1 className="select-label">
          BRL
          <FontAwesomeIcon icon={ faChevronDown } />
        </h1>
      </div>
      <ReservationButton />
    </div>
  );
}

export default Header;
