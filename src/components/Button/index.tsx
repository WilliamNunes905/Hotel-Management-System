import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartFlatbedSuitcase,
} from '@fortawesome/free-solid-svg-icons/faCartFlatbedSuitcase';
import './ReservationButton.scss';

function ReservationButton() {
  return (
    <button>
      <FontAwesomeIcon icon={ faCartFlatbedSuitcase } />
      Reservas
    </button>
  );
}

export default ReservationButton;
