import { useState } from 'react';
import './Payments.scss';
import { Divider, DatePicker } from 'antd';

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
  console.log(formInfo);

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

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, type } = event.target;

    const value = type === 'checkbox'
      ? (event.target as HTMLInputElement).checked : event.target.value;

    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  }

  const handleDateChange = (key: any, dateString: any) => {
    setFormInfo((prevFormInfo) => ({
      ...prevFormInfo,
      [key]: dateString,
    }));
  };
  const dateFormatList = ['DD/MM/YYYY'];

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
            Pix
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
          <div className="frame-13">
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
    </div>
  );
}
