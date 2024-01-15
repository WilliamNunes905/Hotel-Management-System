import { message } from 'antd';

export function validateForm(formInfo: any) {
  const errors = [];

  if (formInfo?.name === '') errors.push('O campo nome é Obrigatório');
  if (formInfo?.email === '') errors.push('O campo E-mail é Obrigatório');
  if (formInfo?.cardName === '') errors.push('O campo Nome do Cartão é Obrigatório');
  if (formInfo?.cardValidity === '') errors.push('O campo Validade é Obrigatório');
  if (formInfo?.cardCVC === '') errors.push('O campo CVC é Obrigatório');
  errors.map((error) => message.warning(error, 2));
  return errors.length === 0;
}
