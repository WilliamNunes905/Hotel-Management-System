import axios from 'axios';
import { FooterData } from '../types/FooterData';

export async function fetchFooterData(): Promise<FooterData> {
  try {
    const response = await axios.get<FooterData>('https://run.mocky.io/v3/9e51aa23-2c5d-46bc-9b25-074cfc617ab6');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Erro na resposta da API: ${error.response}`);
    }
    throw new Error('Erro desconhecido');
  }
}
