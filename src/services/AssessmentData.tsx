import axios from 'axios';
import { AssessmentType } from '../types/AssessmentType';

export async function getAssessmentData(): Promise<AssessmentType[]> {
  try {
    const response = await axios.get<AssessmentType[]>('https://run.mocky.io/v3/ea6d70e2-3566-4791-a02e-e19e3ead9287');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Erro na resposta da API: ${error.response}`);
    }
    throw new Error('Erro desconhecido');
  }
}
