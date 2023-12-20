/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import './Payments.scss';
import { Divider, DatePicker } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Quarto } from '../../types/ApartmentListType';
import { HotelStay } from '../../types/HospedesType';

export function Payments() {
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    creditCard: false,
    pix: false,
    cardName: '',
    cardValidity: '',
    cardCVC: '',
  });
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [storageBedroom, setStorageBedroom] = useState<Quarto[]>([]);
  const [storageStayHotel, setStorageStayHotel] = useState<HotelStay | null>(null);

  useEffect(() => {
    const bedrooms = localStorage.getItem('bedrooms');
    const stayHotel = localStorage.getItem('stay_Hotel');
    if (bedrooms) {
      setStorageBedroom(JSON.parse(bedrooms));
    }
    if (stayHotel) {
      setStorageStayHotel(JSON.parse(stayHotel));
    }
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, type } = event.target;

    const value = type === 'checkbox'
      ? (event.target as HTMLInputElement).checked : event.target.value;

    setFormInfo({
      ...formInfo,
      [name]: value,
    });
    localStorage.setItem('FormInfo', JSON.stringify(formInfo));
  }

  const handleDateChange = (key: any, dateString: any) => {
    setFormInfo((prevFormInfo) => ({
      ...prevFormInfo,
      [key]: dateString,
    }));
  };
  const dateFormatList = ['DD/MM/YYYY'];

  function validateForm() {
    const errors = [];

    if (formInfo.name === '') errors.push('O campo nome é Obrigatorio');
    if (formInfo.email === '') errors.push('O campo E-mail é Obrigatorio');
    if (formInfo.cardName === '') errors.push('O campo Nome Cartão é Obrigatorio');
    if (formInfo.cardValidity === '') errors.push('O campo Validade é Obrigatorio');
    if (formInfo.cardCVC === '') errors.push('O campo CVC é Obrigatorio');
    setErrorMessage(errors);
    return errors.length === 0;
  }

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
          <button>Cancelar</button>
          <button>✔️ Confirmar pagamento</button>
        </div>
      </div>
    </div>
  );
}
