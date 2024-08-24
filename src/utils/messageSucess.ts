import { message } from 'antd';

export const messageSucess = () => {
  message.success({
    content: 'Adicionado com Sucesso',
    duration: 2,
  });
};
