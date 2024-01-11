import { Dispatch, SetStateAction, createContext, useRef, useState } from 'react';
import { FeedbacksType } from '../../types/FeedbacksType';

type FeedbackType = {
  feedbackData: FeedbacksType[],
  setFeedbackData: Dispatch<SetStateAction<FeedbacksType[]>>,
  currentIndex: number,
  setCurrentIndex: Dispatch<SetStateAction<number>>,
  carouselRef: React.RefObject<HTMLDivElement>
};

export const feedbacksContext = createContext({} as FeedbackType);

export function FeedbacksProvider({ children }: { children: React.ReactNode }) {
  const [feedbackData, setFeedbackData] = useState<FeedbacksType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <feedbacksContext.Provider
      value={ {
        feedbackData,
        setFeedbackData,
        currentIndex,
        setCurrentIndex,
        carouselRef,
      } }
    >
      {children}
    </feedbacksContext.Provider>
  );
}
