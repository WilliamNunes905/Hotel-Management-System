import { message } from 'antd';
import { TypeForm } from '../contexts/PaymentsContext';

export function validateForm(formInfo: TypeForm | null) {
  if (!formInfo) return false;

  if (formInfo.creditCard) {
    return validateCard(formInfo);
  }
  if (formInfo.pix) {
    return validatePix(formInfo);
  }
  return false;
}

function validatePix(formInfo: TypeForm) {
  const errors: string[] = [];
  if (!formInfo.name) errors.push('O campo nome é Obrigatório');
  if (!formInfo.email) errors.push('O campo E-mail é Obrigatório');

  errors.forEach((error) => message.warning(error, 2));
  return errors.length === 0;
}

function validateCard(formInfo: TypeForm) {
  const errors: string[] = [];
  if (!formInfo.name) errors.push('O campo nome é Obrigatório');
  if (!formInfo.email) errors.push('O campo E-mail é Obrigatório');
  if (!formInfo.cardName) errors.push('O campo Nome do Cartão é Obrigatório');
  if (!formInfo.cardNumber) errors.push('O campo Número do Cartão é Obrigatório');
  if (!formInfo.cardValidity) errors.push('O campo Validade é Obrigatório');
  if (!formInfo.cardCVC) errors.push('O campo CVC é Obrigatório');

  errors.forEach((error) => message.warning(error, 2));
  return errors.length === 0;
}
