import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { Hospedes } from '../../types/HospedesType';

type SearchContextValue = {
  hotelGuests: Hospedes;
  setHotelGuests: Dispatch<SetStateAction<Hospedes>>;
};

export const SearchContext = createContext({} as SearchContextValue);

export function SearchProvider({ children } : { children: React.ReactNode }) {
  const [hotelGuests, setHotelGuests] = useState<Hospedes>({
    adults: '1',
    child: '1',
    entry: '',
    exit: '',
  });

  return (
    <SearchContext.Provider
      value={ { hotelGuests, setHotelGuests } }
    >
      { children }
    </SearchContext.Provider>
  );
}
