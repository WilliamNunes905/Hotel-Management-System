/* eslint-disable max-len */
import { Rooms } from './ApartmentListType';

export const apartmentListData: Rooms[] = [
  {
    id: 1,
    hospedes: 2,
    codigo: 'R001',
    url: 'https://example.com/hotel1',
    nome: 'Suite Luxo',
    img: 'https://www.kayak.pt/rimg/himg/c7/c2/cb/ice-79912-63022706_3XL-535749.jpg?width=968&height=607&crop=true',
    descricao: 'A Suite Luxo oferece uma experiência de estadia incomparável com vistas deslumbrantes '
               + 'para o mar. Com um design elegante e moderno, este espaço é equipado com '
               + 'todas as comodidades de alto padrão, incluindo uma cama king-size, área de estar '
               + 'aconchegante, banheiro luxuoso com chuveiro de efeito chuva, quarto é confortável e funcional!',
    preco: 350.00,
    caracteristicas: [
      {
        id: 1,
        nome: 'Wi-Fi',
        icone: 'fa-solid fa-wifi',
      },
      {
        id: 2,
        nome: 'Hidromassagem',
        icone: 'fa-solid fa-hot-tub-person',
      },
      {
        id: 3,
        nome: 'Café da Manhã Incluso',
        icone: 'fa-solid fa-mug-hot',
      },
      {
        id: 4,
        nome: 'Televisão',
        icone: 'fa-solid fa-tv',
      },
    ],
    avaliacao: {
      nota: 5,
      quantidade: 120,
    },
  },
  {
    id: 2,
    hospedes: 4,
    codigo: 'R002',
    url: 'https://example.com/hotel2',
    nome: 'Quarto Standard',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/07/de/39/d6/hotel-atlantico-rio.jpg',
    descricao: 'O Quarto Standard é ideal para famílias ou grupos que buscam conforto e '
               + 'funcionalidade. Com uma decoração moderna e confortável, este quarto possui '
               + 'uma cama queen-size, uma área de trabalho e um banheiro privativo. Perfeito para '
               + 'uma estadia relaxante com todas as comodidades básicas que você precisa.',
    preco: 150.00,
    caracteristicas: [
      {
        id: 5,
        nome: 'Acessibilidade',
        icone: 'fa-solid fa-wheelchair',
      },
      {
        id: 6,
        nome: 'Televisão',
        icone: 'fa-solid fa-tv',
      },
      {
        id: 7,
        nome: 'Almoço',
        icone: 'fa-solid fa-bell-concierge',
      },
    ],
    avaliacao: {
      nota: 3.8,
      quantidade: 85,
    },
  },
  {
    id: 3,
    hospedes: 1,
    codigo: 'R003',
    url: 'https://example.com/hotel3',
    nome: 'Quarto Individual',
    img: 'https://static.wixstatic.com/media/358476_bdc788871c8a4fc38cb326f4e020985a~mv2.jpg/v1/fill/w_619,h_451,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/358476_bdc788871c8a4fc38cb326f4e020985a~mv2.jpg',
    descricao: 'O Quarto Individual é perfeito para viajantes solo que precisam de um espaço '
               + 'confortável e prático. Este quarto compacto é equipado com uma cama confortável, '
               + 'uma pequena mesa de trabalho, e um banheiro privativo. Ideal para estadias curtas '
               + 'ou para quem está em viagem de negócios.',
    preco: 90.00,
    caracteristicas: [
      {
        id: 8,
        nome: 'Internet',
        icone: 'fa-solid fa-wifi',
      },
      {
        id: 9,
        nome: 'Café da Manhã Incluso',
        icone: 'fa-solid fa-mug-hot',
      },
    ],
    avaliacao: {
      nota: 2.5,
      quantidade: 60,
    },
  },
];
