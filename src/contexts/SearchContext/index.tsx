import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { Guest } from '../../types/GuestType';

type SearchContextValue = {
  hotelGuests: Guest;
  setHotelGuests: Dispatch<SetStateAction<Guest>>;
};

export const SearchContext = createContext({} as SearchContextValue);

export function SearchProvider({ children } : { children: React.ReactNode }) {
  const [hotelGuests, setHotelGuests] = useState<Guest>({
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
