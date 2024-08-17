import { useContext } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartFlatbedSuitcase,
} from '@fortawesome/free-solid-svg-icons/faCartFlatbedSuitcase';
import { useNavigate } from 'react-router-dom';
import { Badge } from 'antd';
import { NavBar } from '../NavBar';
import './Header.scss';
import { CountBagde } from '../../contexts/CountHeaderContext/CountBagde';

export function Header() {
  const navigate = useNavigate();

  const { badge } = useContext(CountBagde);

  return (
    <div className="header-container">
      <div className="logo-container">
        <a href="/">
          <h1 className="berkshire-swash-regular">Hotel System</h1>
        </a>
      </div>
      <NavBar />
      <div className="selects-container">
        <select className="select-label">
          <FontAwesomeIcon icon={ faChevronDown } />
          <option value="someOption">BRL</option>
          <option value="someOption">EN</option>
          <option value="someOption">ESP</option>
        </select>
      </div>
      <button
        className="button-reservation"
        onClick={ () => navigate('/payment') }
      >
        <FontAwesomeIcon icon={ faCartFlatbedSuitcase } />
        Reservas
      </button>
      <div className="container-badge">
        <Badge
          size="default"
          count={ badge }
          className="badge-reservation"
        />
      </div>
    </div>
  );
}
