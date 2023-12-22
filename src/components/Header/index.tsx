import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartFlatbedSuitcase,
} from '@fortawesome/free-solid-svg-icons/faCartFlatbedSuitcase';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Badge } from 'antd';
import { NavBar } from '../NavBar';
import logoSvg from '../../assets/logoSilbeck.svg';
import './Header.scss';
import { ApartmentContext } from '../../contexts/ApartmentContext';

export function Header() {
  const navigate = useNavigate();
  const { bedrooms } = useContext(ApartmentContext);

  function handleNavigateToPayment() {
    navigate('/payment');
  }

  return (
    <div className="header-container">
      <div className="logo-container">
        <a href="/">
          <img
            src={ logoSvg }
            alt="Hotel Silbeck"
            className="logo-image"
          />
        </a>
      </div>
      <NavBar />
      <div className="selects-container">
        <h1 className="select-label">
          BRL
          <FontAwesomeIcon icon={ faChevronDown } />
        </h1>
      </div>
      <button
        className="button-reservation"
        onClick={ () => handleNavigateToPayment() }
      >
        <FontAwesomeIcon icon={ faCartFlatbedSuitcase } />
        Reservas
      </button>
      <div className="container-badge">
        <Badge
          size="default"
          count={ bedrooms.length }
          showZero
          className="badge-reservation"
        />
      </div>
    </div>
  );
}
