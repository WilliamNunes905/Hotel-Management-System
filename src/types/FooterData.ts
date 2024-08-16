export interface Hotel {
  nome: string;
  endereco: Endereco;
  classificacao_estrelas: number;
  quartos: Quarto[];
  facilidades: string[];
  check_in: string;
  check_out: string;
  contato: Contato;
}

export interface Endereco {
  rua: string;
  numero: number;
  cidade: string;
  estado: string;
  cep: string;
}

export interface Quarto {
  numero: number;
  tipo: string;
  preco_diaria: number;
  disponibilidade: boolean;
}

export interface Contato {
  telefone: string;
  email: string;
}

export interface FooterDataTypes {
  hotel: Hotel;
}
