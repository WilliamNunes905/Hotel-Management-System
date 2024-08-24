import { FooterDataTypes } from '../types/FooterData';
import { hotelFooterData } from '../types/mockFooterData';

export async function axiosFooterData(): Promise<FooterDataTypes> {
  try {
    return await Promise.resolve(hotelFooterData);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erro desconhecido: ${error.message}`);
    }
    throw new Error('Erro desconhecido');
  }
}
