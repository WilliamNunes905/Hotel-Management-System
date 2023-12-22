import axios from 'axios';
import { FeedbacksType } from '../types/FeedbacksType';

export async function getFeedbacksData(): Promise<FeedbacksType[]> {
  try {
    const response = await axios.get<FeedbacksType[]>('https://run.mocky.io/v3/ea6d70e2-3566-4791-a02e-e19e3ead9287');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Erro na resposta da API: ${error.response}`);
    }
    throw new Error('Erro desconhecido');
  }
}
