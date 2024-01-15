import { useEffect, useContext, useState } from 'react';
import { Divider } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { PaymentsContext } from '../../../contexts/PaymentsContext';
import '../Payments.scss';
import { ApartmentContext } from '../../../contexts/ApartmentContext';

export function ReservationPayments() {
  const { bedrooms, setBedrooms } = useContext(ApartmentContext);
  const [countDailyList, setCountDailyList] = useState<Record<number, number>>({});

  const {
    storageStayHotel,
    setStorageStayHotel,
    clearGlobalState,
  } = useContext(PaymentsContext);

  useEffect(() => {
    const stayHotel = localStorage.getItem('reserve');
    if (stayHotel) setStorageStayHotel(JSON.parse(stayHotel));
  }, [setStorageStayHotel]);

  function handleDeleteBedroom(index: number) {
    const updatedBedrooms = bedrooms.filter((_bedroom, idx) => idx !== index);
    setBedrooms(updatedBedrooms);
    localStorage.setItem('rooms', JSON.stringify(updatedBedrooms));
  }

  function handleIncrement(id: number) {
    setCountDailyList((prevCountDailyList) => ({
      ...prevCountDailyList,
      [id]: (prevCountDailyList[id] || 0) + 1,
    }));
  }

  function handleDecrement(id: number) {
    setCountDailyList((prevCountDailyList) => {
      const currentValue = prevCountDailyList[id] || 0;
      const newValue = Math.max(currentValue - 1, 0);
      return {
        ...prevCountDailyList,
        [id]: newValue,
      };
    });
  }

  return (
    <div className="contentTotal">
      <div className="contentWrapper-Total">
        <h1>Resumo da Reserva</h1>
        <div className="shopping-Cart">
          <div className="content">
            {
            bedrooms.map((bedroom, index) => (
              <div className="details" key={ index }>
                <div className="nameAndType">
                  <h2 className="master">{ bedroom.nome }</h2>
                  <p>
                    Diárias:
                    {' '}
                    {countDailyList[bedroom.id] || 1}
                  </p>
                  <p>
                    {
                    `Estadia: ${storageStayHotel?.entry} - ${storageStayHotel?.exit}`
                    }
                  </p>
                  <p>
                    Qtde Hóspedes:
                    {' '}
                    { bedroom.hospedes }
                  </p>
                </div>
                <div className="frame-138">
                  <h3 className="moneyFrame">
                    R$
                    {' '}
                    { bedroom.preco.toFixed(2)}
                  </h3>
                  <div className="buttonContent">
                    <button
                      type="button"
                      className="buttonStyle"
                      onClick={ () => handleDecrement(bedroom.id) }
                    >
                      -
                    </button>
                    <p>{countDailyList[bedroom.id] || 1}</p>
                    <button
                      type="button"
                      className="buttonStyle"
                      onClick={ () => handleIncrement(bedroom.id) }
                    >
                      +
                    </button>
                  </div>
                  <div className="controler">
                    <button
                      type="button"
                      className="buttonDelete"
                      onClick={ () => handleDeleteBedroom(index) }
                    >
                      <FontAwesomeIcon icon={ faTrash } />
                      Excluir
                    </button>
                  </div>
                  <Divider className="divider" />
                </div>
              </div>
            ))
          }
            <Divider className="divider" />
          </div>
        </div>
      </div>
      <div className="moneyFrame">
        <h1>Valor Total</h1>
        <h2>
          R$
          {' '}
          {bedrooms.reduce((acc, curr) => acc + (countDailyList[curr.id] || 1)
            * curr.preco, 0).toFixed(2)}
        </h2>
      </div>
      <div className="button-container">
        <button className="button-Cancel">Cancelar</button>
        <button
          className="button-payment"
          onClick={ () => clearGlobalState() }
        >
          <FontAwesomeIcon icon={ faCheck } />
          Confirmar pagamento
        </button>
      </div>
    </div>
  );
}
