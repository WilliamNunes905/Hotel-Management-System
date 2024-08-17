type Characteristic = {
  id: number;
  nome: string;
  icone: string;
};

type Assessment = {
  nota: number;
  quantidade: number;
};

export type Rooms = {
  id: number;
  hospedes: number;
  codigo: string;
  url: string;
  nome: string;
  img: string;
  descricao: string;
  preco: number;
  caracteristicas: Characteristic[];
  avaliacao: Assessment;
};
