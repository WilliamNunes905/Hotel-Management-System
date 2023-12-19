import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { Quarto } from '../../types/ApartmentListType';

type SearchContextValue = {
  apartmentList: Quarto[] | null;
  setApartmentList: Dispatch<SetStateAction<Quarto[] | null>>;
  bedrooms: string[];
  setBedrooms: Dispatch<SetStateAction<string[]>>;
};

const initialValue: SearchContextValue = {
  apartmentList: null,
  setApartmentList: () => {},
  bedrooms: [],
  setBedrooms: () => {},
};

export const ApartmentContext = createContext(initialValue);

export function ApartmentProvider({ children }: { children: React.ReactNode }) {
  const [apartmentList, setApartmentList] = useState<Quarto[] | null>(null);
  const [bedrooms, setBedrooms] = useState<string[]>([]);

  return (
    <ApartmentContext.Provider
      value={ { apartmentList, setApartmentList, setBedrooms, bedrooms } }
    >
      {children}
    </ApartmentContext.Provider>
  );
}
