import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartFlatbedSuitcase,
} from '@fortawesome/free-solid-svg-icons/faCartFlatbedSuitcase';
import { Badge } from 'antd';
import { NavBar } from '../NavBar';
import logoSvg from '../../assets/logoSilbeck.svg';
import './Header.scss';

export function Header() {
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
      <button className="button-reservation">
        <FontAwesomeIcon icon={ faCartFlatbedSuitcase } />
        Reservas
      </button>
      <div className="container-badge">
        <Badge
          size="default"
          count={ 5 }
          className="badge-reservation"
        />
      </div>
    </div>
  );
}
