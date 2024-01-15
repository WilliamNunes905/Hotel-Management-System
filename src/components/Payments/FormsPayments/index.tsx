import { useContext } from 'react';
import { Divider, DatePicker } from 'antd';
import { PaymentsContext } from '../../../contexts/PaymentsContext';
import '../Payments.scss';

export function FormsPayments() {
  const {
    formInfo,
    setFormInfo,
  } = useContext(PaymentsContext);

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

  function handleDateChange(key: any, dateString: any) {
    setFormInfo((prevFormInfo) => ({
      ...prevFormInfo,
      [key]: dateString,
    }));
  }

  return (
    <div className="contentWrapper">
      <div className="contactInformation">
        <h2>Identificação</h2>
        <label className="container-label">
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
        <label className="container-label">
          Nome Cartão
          <input
            type="text"
            name="cardName"
            value={ formInfo.cardName }
            onChange={ (event) => handleChange(event) }
          />
        </label>
        <div className="box-card">
          <div className="box-validate">
            Validade
            <DatePicker
              className="datePicker"
              name="cardValidity"
              onChange={
                (_date, dateString) => handleDateChange('cardValidity', dateString)
              }
              placeholder="00/00"
              format="DD/MM/YYYY"
            />
          </div>
          <div className="box-cvc">
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
    </div>
  );
}
