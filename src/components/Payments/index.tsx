import { ReservationPayments } from './ReservationPayments';
import { FormsPayments } from './FormsPayments';
import './Payments.scss';

export function Payments() {
  return (
    <div className="container-payments">
      <FormsPayments />
      <ReservationPayments />
    </div>
  );
}
