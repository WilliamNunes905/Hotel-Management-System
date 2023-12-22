import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { Quarto } from '../../types/ApartmentListType';
import { Hospedes } from '../../types/HospedesType';

type TypeForm = {
  name: string;
  email: string;
  creditCard: boolean;
  pix: boolean;
  cardName: string;
  cardValidity: string;
  cardCVC: string;
};

type PaymentsContextValue = {
  formInfo: TypeForm;
  setFormInfo: Dispatch<SetStateAction<TypeForm>>;
  errorMessage: string[];
  setErrorMessage: Dispatch<SetStateAction<string[]>>;
  storageBedroom: Quarto[];
  setStorageBedroom: Dispatch<SetStateAction<Quarto[]>>;
  storageStayHotel: Hospedes | null;
  setStorageStayHotel: Dispatch<SetStateAction<Hospedes | null>>;
  validateForm: () => void;
  handleClick: () => void;
};

const initialFormInfo = {
  name: '',
  email: '',
  creditCard: false,
  pix: false,
  cardName: '',
  cardValidity: '',
  cardCVC: '',
};

export const PaymentsContext = createContext({} as PaymentsContextValue);

export function PaymentsProvider({ children } : { children: React.ReactNode }) {
  const [formInfo, setFormInfo] = useState<TypeForm>(initialFormInfo);
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [storageBedroom, setStorageBedroom] = useState<Quarto[]>([]);
  const [storageStayHotel, setStorageStayHotel] = useState<Hospedes | null>(null);

  function validateForm() {
    if (formInfo?.email === '') throw new Error('O campo E-mail é Obrigatorio');
    if (formInfo?.cardName === '') throw new Error('O campo Nome Cartão é Obrigatorio');
    if (formInfo?.cardValidity === '') throw new Error('O campo Validade é Obrigatorio');
    if (formInfo?.cardCVC === '') throw new Error('O campo CVC é Obrigatorio');
    setErrorMessage([]);
  }

  function handleClick() {
    setFormInfo({
      name: '',
      email: '',
      creditCard: false,
      pix: false,
      cardName: '',
      cardValidity: '',
      cardCVC: '',
    });
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
        handleClick,
      } }
    >
      { children }
    </PaymentsContext.Provider>
  );
}
