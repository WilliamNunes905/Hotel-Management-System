import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { Hospedes, HotelStay } from '../../types/HospedesType';

type SearchContextValue = {
  hotelGuests: Hospedes;
  setHotelGuests: Dispatch<SetStateAction<Hospedes>>;
  hotelStay: HotelStay;
  setHotelStay: Dispatch<SetStateAction<HotelStay>>;
};

const initialValue: SearchContextValue = {
  hotelGuests: {
    adults: '1',
    child: '1',
  },
  setHotelGuests: () => {},
  hotelStay: {
    entry: '',
    exit: '',
  },
  setHotelStay: () => {},
};

export const SearchContext = createContext(initialValue);

export function SearchProvider({ children } : { children: React.ReactNode }) {
  const [hotelGuests, setHotelGuests] = useState<Hospedes>({
    adults: '1',
    child: '1',
  });
  const [hotelStay, setHotelStay] = useState<HotelStay>({
    entry: '',
    exit: '',
  });

  return (
    <SearchContext.Provider
      value={ { hotelGuests, setHotelGuests, hotelStay, setHotelStay } }
    >
      { children }
    </SearchContext.Provider>
  );
}
