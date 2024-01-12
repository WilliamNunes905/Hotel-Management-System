import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { Rooms } from '../../types/ApartmentListType';

type SearchContextValue = {
  apartmentList: Rooms[] | null;
  setApartmentList: Dispatch<SetStateAction<Rooms[] | null>>;
  bedrooms: Rooms[];
  setBedrooms: Dispatch<SetStateAction<Rooms[]>>;
};

export const ApartmentContext = createContext({} as SearchContextValue);

export function ApartmentProvider({ children }: { children: React.ReactNode }) {
  const [apartmentList, setApartmentList] = useState<Rooms[] | null>(null);
  const [bedrooms, setBedrooms] = useState<Rooms[]>([]);

  return (
    <ApartmentContext.Provider
      value={ { apartmentList, setApartmentList, setBedrooms, bedrooms } }
    >
      {children}
    </ApartmentContext.Provider>
  );
}
