import { useContext } from 'react';
import QRCode from 'react-qr-code';
import { Divider, DatePicker } from 'antd';
import { PaymentsContext } from '../../../contexts/PaymentsContext';
import '../Payments.scss';

export function FormsPayments() {
  const {
    formInfo,
    setFormInfo,
  } = useContext(PaymentsContext);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;

    if (name === 'creditCard') {
      setFormInfo({
        ...formInfo,
        creditCard: !formInfo.creditCard,
        pix: false,
      });
    } else if (name === 'pix') {
      setFormInfo({
        ...formInfo,
        pix: !formInfo.pix,
        creditCard: false,
      });
    } else {
      setFormInfo({
        ...formInfo,
        [name]: value,
      });
    }
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
            onChange={ handleChange }
          />
          E-mail *
          <input
            type="text"
            name="email"
            value={ formInfo.email }
            onChange={ handleChange }
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
            onChange={ handleChange }
          />
          Cartão de Crédito
          <input
            type="radio"
            name="pix"
            checked={ formInfo.pix }
            onChange={ handleChange }
          />
          PIX
        </label>

        {formInfo.creditCard && (
          <div>
            <label className="container-label">
              Nome Cartão
              <input
                type="text"
                name="cardName"
                value={ formInfo.cardName }
                onChange={ handleChange }
              />
            </label>
            <label className="container-label">
              Número Cartão
              <input
                type="text"
                name="cardNumber"
                value={ formInfo.cardNumber }
                maxLength={ 16 }
                onChange={ handleChange }
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
                  onChange={ handleChange }
                />
              </div>
            </div>
          </div>
        )}
        {formInfo.pix && (
          <QRCode
            size={ 250 }
            style={ { height: '160px', maxWidth: '20%', width: '50%' } }
            value="https://www.linkedin.com/in/williamnunesdev/"
            viewBox="0 0 256 256"
          />
        )}
      </div>
    </div>
  );
}
