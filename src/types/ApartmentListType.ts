type Caracteristica = {
  id: number;
  nome: string;
  icone: string;
};

type Avaliacao = {
  nota: number;
  quantidade: number;
};

export type Quarto = {
  id: number;
  hospedes: number;
  codigo: string;
  url: string;
  nome: string;
  img: string;
  descricao: string;
  preco: number;
  caracteristicas: Caracteristica[];
  avaliacao: Avaliacao;
};
