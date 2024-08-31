/* eslint-disable sonarjs/no-duplicate-string */
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
    preco: 450.00,
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
      quantidade: 98,
    },
  },
  {
    id: 2,
    hospedes: 3,
    codigo: 'R002',
    url: 'https://example.com/hotel2',
    nome: 'Quarto Standard',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/07/de/39/d6/hotel-atlantico-rio.jpg',
    descricao: 'O Quarto Standard é ideal para famílias ou grupos que buscam conforto e '
               + 'funcionalidade. Com uma decoração moderna e confortável, este quarto possui '
               + 'uma cama queen-size, uma área de trabalho e um banheiro privativo. Perfeito para '
               + 'uma estadia relaxante com todas as comodidades básicas que você precisa.',
    preco: 350.00,
    caracteristicas: [
      {
        id: 5,
        nome: 'Wi-Fi',
        icone: 'fa-solid fa-wifi',
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
      nota: 4,
      quantidade: 52,
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
    preco: 110.00,
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
      nota: 3,
      quantidade: 34,
    },
  },
  {
    id: 4,
    hospedes: 2,
    codigo: 'R004',
    url: 'https://example.com/hotel4',
    nome: 'Suite Premium',
    img: 'https://www.thecl.com/wp-content/uploads/2022/09/ChampagneLodge_2020_0027-scaled-1.jpg',
    descricao: 'A Suite Premium oferece luxo e conforto incomparáveis,'
             + ' Equipado com uma cama king-size, ar condicionado e hidromassagem.'
             + ' A decoração sofisticada e as comodidades modernas garantem uma experiência de hospedagem excepcional.'
             + ' Perfeita para quem busca um retiro relaxante e elegante.',
    preco: 920.00,
    caracteristicas: [
      {
        id: 7,
        nome: 'Internet',
        icone: 'fa-solid fa-wifi',
      },
      {
        id: 8,
        nome: 'Ar Condicionado',
        icone: 'fa-solid fa-snowflake',
      },
      {
        id: 9,
        nome: 'Hidromassagem',
        icone: 'fa-solid fa-hot-tub-person',
      },
      {
        id: 10,
        nome: 'Café da Manhã Incluso',
        icone: 'fa-solid fa-mug-hot',
      },
      {
        id: 6,
        nome: 'Televisão',
        icone: 'fa-solid fa-tv',
      },
    ],
    avaliacao: {
      nota: 5,
      quantidade: 15,
    },
  },
  {
    id: 5,
    hospedes: 3,
    codigo: 'R005',
    url: 'https://example.com/hotel5',
    nome: 'Quarto Executivo',
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/413294961.jpg?k=62290403138e22224db543717ea6d57f88a76ffb4e79172f54cbd79cb57c93a8&o=&hp=1',
    descricao: 'O Quarto Executivo é a escolha ideal para viajantes de negócios,'
              + ' Com um ambiente moderno e elegante, você encontrará uma área de estar relaxante'
              + ' e uma cama confortável para uma boa noite de sono.'
              + ' Equipado com todas as comodidades necessárias, garantindo uma estadia produtiva e sem estresse.',
    preco: 480.00,
    caracteristicas: [
      {
        id: 7,
        nome: 'Internet',
        icone: 'fa-solid fa-wifi',
      },
      {
        id: 8,
        nome: 'Ar Condicionado',
        icone: 'fa-solid fa-snowflake',
      },
      {
        id: 10,
        nome: 'Café da Manhã Incluso',
        icone: 'fa-solid fa-mug-hot',
      },
      {
        id: 11,
        nome: 'choveiro',
        icone: 'fa-solid fa-shower',
      },
    ],
    avaliacao: {
      nota: 4.5,
      quantidade: 70,
    },
  },
  {
    id: 6,
    hospedes: 5,
    codigo: 'R006',
    url: 'https://example.com/hotel6',
    nome: 'Quarto Familiar',
    img: 'https://praiadosolhotel.beeweb.net.br/wp-content/uploads/sites/51/2023/06/quarto-2.jpg',
    descricao: 'Desfrute de uma estadia tranquila e confortável em nosso Quarto Familiar.'
              + ' Projetado para acomodar toda a família, este espaço oferece duas camas grandes,'
              + ' área de estar aconchegante e uma decoração moderna e funcional,'
              + ' Relaxe após um dia de passeios com TV de tela plana e acesso rápido à internet.',
    preco: 350.00,
    caracteristicas: [
      {
        id: 7,
        nome: 'Internet',
        icone: 'fa-solid fa-wifi',
      },
      {
        id: 7,
        nome: 'Almoço',
        icone: 'fa-solid fa-bell-concierge',
      },
      {
        id: 6,
        nome: 'Televisão',
        icone: 'fa-solid fa-tv',
      },
      {
        id: 15,
        nome: 'Espaço para Crianças',
        icone: 'fa-solid fa-gamepad',
      },
    ],
    avaliacao: {
      nota: 4.7,
      quantidade: 37,
    },
  },
];
