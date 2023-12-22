import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { Quarto } from '../../types/ApartmentListType';

type SearchContextValue = {
  apartmentList: Quarto[] | null;
  setApartmentList: Dispatch<SetStateAction<Quarto[] | null>>;
  bedrooms: Quarto[];
  setBedrooms: Dispatch<SetStateAction<Quarto[]>>;
};

export const ApartmentContext = createContext({} as SearchContextValue);

export function ApartmentProvider({ children }: { children: React.ReactNode }) {
  const [apartmentList, setApartmentList] = useState<Quarto[] | null>(null);
  const [bedrooms, setBedrooms] = useState<Quarto[]>([]);

  return (
    <ApartmentContext.Provider
      value={ { apartmentList, setApartmentList, setBedrooms, bedrooms } }
    >
      {children}
    </ApartmentContext.Provider>
  );
}
