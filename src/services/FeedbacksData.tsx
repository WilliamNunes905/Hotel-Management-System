import { FeedbacksType } from '../types/FeedbacksType';
import { feedbacksData } from '../types/mockFeedbacks';

export async function getFeedbacksData(): Promise<FeedbacksType[]> {
  try {
    return await Promise.resolve(feedbacksData);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erro desconhecido: ${error.message}`);
    }
    throw new Error('Erro desconhecido');
  }
}
