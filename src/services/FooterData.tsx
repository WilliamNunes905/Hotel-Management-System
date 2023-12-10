import axios from 'axios';
import { FooterData } from '../types/FooterData';

const DATABASE = 'https://run.mocky.io/v3/9e51aa23-2c5d-46bc-9b25-074cfc617ab6';

export async function fetchFooterData(): Promise<FooterData> {
  try {
    const response = await axios.get(DATABASE);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Erro na resposta da API: ${error.response}`);
    }
    throw new Error('Erro desconhecido');
  }
}
