import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { Quarto } from '../../types/ApartmentListType';
import { HotelStay } from '../../types/HospedesType';

type PaymentsContextValue = {
  formInfo: {
    name: string;
    email: string;
    creditCard: boolean;
    pix: boolean;
    cardName: string;
    cardValidity: string;
    cardCVC: string;
  };
  setFormInfo: Dispatch<SetStateAction<{
    name: string;
    email: string;
    creditCard: boolean;
    pix: boolean;
    cardName: string;
    cardValidity: string;
    cardCVC: string;
  }>>;
  errorMessage: string[];
  setErrorMessage: Dispatch<SetStateAction<string[]>>;
  storageBedroom: Quarto[];
  setStorageBedroom: Dispatch<SetStateAction<Quarto[]>>;
  storageStayHotel: HotelStay | null;
  setStorageStayHotel: Dispatch<SetStateAction<HotelStay | null>>;
  validateForm: () => boolean;
  countDaily: number;
  setCountDaily: Dispatch<SetStateAction<number>>
};

const initialValue: PaymentsContextValue = {
  formInfo: {
    name: '',
    email: '',
    creditCard: false,
    pix: false,
    cardName: '',
    cardValidity: '',
    cardCVC: '',
  },
  setFormInfo: () => {},
  errorMessage: [],
  setErrorMessage: () => {},
  storageBedroom: [],
  setStorageBedroom: () => {},
  storageStayHotel: null,
  setStorageStayHotel: () => {},
  validateForm: () => false,
  countDaily: 1,
  setCountDaily: () => {},
};

export const PaymentsContext = createContext(initialValue);

export function PaymentsProvider({ children } : { children: React.ReactNode }) {
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    creditCard: false,
    pix: false,
    cardName: '',
    cardValidity: '',
    cardCVC: '',
  });
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [storageBedroom, setStorageBedroom] = useState<Quarto[]>([]);
  const [storageStayHotel, setStorageStayHotel] = useState<HotelStay | null>(null);
  const [countDaily, setCountDaily] = useState(1);

  function validateForm() {
    const errors = [];

    if (formInfo.name === '') errors.push('O campo nome é Obrigatorio');
    if (formInfo.email === '') errors.push('O campo E-mail é Obrigatorio');
    if (formInfo.cardName === '') errors.push('O campo Nome Cartão é Obrigatorio');
    if (formInfo.cardValidity === '') errors.push('O campo Validade é Obrigatorio');
    if (formInfo.cardCVC === '') errors.push('O campo CVC é Obrigatorio');
    setErrorMessage(errors);
    return errors.length === 0;
  }

  return (
    <PaymentsContext.Provider
      value={ {
        formInfo,
        setFormInfo,
        errorMessage,
        setErrorMessage,
        storageBedroom,
        setStorageBedroom,
        storageStayHotel,
        setStorageStayHotel,
        validateForm,
        countDaily,
        setCountDaily,
      } }
    >
      { children }
    </PaymentsContext.Provider>
  );
}
