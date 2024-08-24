import { FooterDataTypes } from './FooterData';

export const hotelFooterData: FooterDataTypes = {
  hotel: {
    nome: 'Hotel Exemplo',
    endereco: {
      rua: 'Av. Principal',
      numero: 358,
      cidade: 'Armazém',
      estado: 'Santa Catarina',
      cep: '88740-000',
    },
    classificacao_estrelas: 4,
    quartos: [
      {
        numero: 101,
        tipo: 'Standard',
        preco_diaria: 200.0,
        disponibilidade: true,
      },
      {
        numero: 102,
        tipo: 'Luxo',
        preco_diaria: 350.0,
        disponibilidade: false,
      },
    ],
    facilidades: [
      'Wi-Fi gratuito',
      'Piscina',
      'Estacionamento gratuito',
      'Academia',
    ],
    check_in: '14:00',
    check_out: '12:00',
    contato: {
      telefone: '(+55) 48 58745-8541',
      email: 'suporte@HotelSystem.com',
    },
  },
};
