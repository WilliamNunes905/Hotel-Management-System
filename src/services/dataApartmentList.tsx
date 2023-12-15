import axios from 'axios';
import { Quarto } from '../types/ApartmentListType';

export async function dataApartmentList(): Promise<Quarto[]> {
  try {
    const response = await axios.get<Quarto[]>('https://run.mocky.io/v3/c20be17a-bc5c-4736-a5e5-dbcff9591b5a');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Erro na resposta da API: ${error.response}`);
    }
    throw new Error('Erro desconhecido');
  }
}
