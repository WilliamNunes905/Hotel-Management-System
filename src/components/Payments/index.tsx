/* eslint-disable react/jsx-max-depth */
import { useEffect, useContext } from 'react';
import { Divider, DatePicker } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { PaymentsContext } from '../../contexts/PaymentsContext';
import './Payments.scss';

export function Payments() {
  const dateFormatList = ['DD/MM/YYYY'];
  const {
    formInfo,
    setFormInfo,
    errorMessage,
    validateForm,
    storageBedroom,
    setStorageBedroom,
    storageStayHotel,
    setStorageStayHotel,
  } = useContext(PaymentsContext);

  useEffect(() => {
    const bedrooms = localStorage.getItem('bedrooms');
    const stayHotel = localStorage.getItem('stay_Hotel');
    if (bedrooms) {
      setStorageBedroom(JSON.parse(bedrooms));
    }
    if (stayHotel) {
      setStorageStayHotel(JSON.parse(stayHotel));
    }
  }, [setStorageBedroom, setStorageStayHotel]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, type } = event.target;
    const value = type === 'checkbox'
      ? (event.target as HTMLInputElement).checked : event.target.value;

    setFormInfo({
      ...formInfo,
      [name]: value,
    });
    localStorage.setItem('Form', JSON.stringify(formInfo));
  }

  const handleDateChange = (key: any, dateString: any) => {
    setFormInfo((prevFormInfo) => ({
      ...prevFormInfo,
      [key]: dateString,
    }));
  };

  return (
    <div className="container-payments">
      <div className="contentWrapper">
        <div className="contactInformation">
          <h2>Identificação</h2>
          <label className="frame-10">
            Nome *
            <input
              type="text"
              name="name"
              value={ formInfo.name }
              onChange={ (event) => handleChange(event) }
            />
            E-mail *
            <input
              type="text"
              name="email"
              value={ formInfo.email }
              onChange={ (event) => handleChange(event) }
            />
          </label>
          <Divider className="divider" />
        </div>

        <div className="payment">
          <h2>Pagamento</h2>
          <label className="RadioButtons">
            <input
              type="radio"
              name="creditCard"
              checked={ formInfo.creditCard }
              onChange={ (event) => handleChange(event) }
            />
            Cartão de Crédito
            <input
              type="radio"
              name="pix"
              checked={ formInfo.pix }
              onChange={ (event) => handleChange(event) }
            />
            PIX
          </label>
          <label className="frame-10">
            Nome Cartão
            <input
              type="text"
              name="cardName"
              value={ formInfo.cardName }
              onChange={ (event) => handleChange(event) }
            />
          </label>
          <div className="frame-135">
            <div className="frame-13">
              Validade
              <DatePicker
                className="datePicker"
                name="cardValidity"
                onChange={
                (_date, dateString) => handleDateChange('cardValidity', dateString)
              }
                placeholder="00/00"
                format={ dateFormatList }
              />
            </div>
            <div className="frame-14">
              CVC
              <input
                type="text"
                name="cardCVC"
                value={ formInfo.cardCVC }
                maxLength={ 3 }
                placeholder="000"
                onChange={ (event) => handleChange(event) }
              />
            </div>
          </div>
        </div>
        {
            errorMessage && (
              <div>
                {errorMessage.map((message) => (
                  <p key={ message }>{message}</p>
                ))}
              </div>
            )
        }
      </div>
      <div className="contentTotal">
        <div className="contentWrapper-Total">
          <h1>Resumo da Reserva</h1>
          <div className="shopping-Cart">
            <div className="content">
              {
                storageBedroom.map((bedroom) => (
                  <div className="details" key={ bedroom.id }>
                    <div className="nameAndType">
                      <h2 className="master">{ bedroom.nome }</h2>
                      <p>Diárias: 2</p>
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
                        { bedroom.preco.toFixed(2) }
                      </h3>
                      <button
                        type="button"
                        className="buttonContent"
                      >
                        -
                        <p>2</p>
                        +
                      </button>
                      <div className="controler">
                        <button
                          type="button"
                          className="buttonDelete"
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
            { storageBedroom.reduce((acc, curr) => acc + curr.preco, 0).toFixed(2) }
          </h2>
        </div>
        <div className="button-container">
          <button className="button-Cancel">Cancelar</button>
          <button className="button-payment">
            <FontAwesomeIcon icon={ faCheck } />
            Confirmar pagamento
          </button>
        </div>
      </div>
    </div>
  );
}
