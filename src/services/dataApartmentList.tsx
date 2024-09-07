import { Rooms } from '../types/ApartmentListType';
import { apartmentListData } from '../mocks/mockApartmentListData';

export async function dataApartmentList(): Promise<Rooms[]> {
  try {
    return await Promise.resolve(apartmentListData);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erro desconhecido: ${error.message}`);
    }
    throw new Error('Erro desconhecido');
  }
}
