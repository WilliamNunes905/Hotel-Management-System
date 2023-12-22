import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { message } from 'antd';
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
  handleDateChange: (key: any, dateString: any) => void;
  clearGlobalState: () => void;
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
    if (formInfo?.name === '') message.warning('O campo nome é Obrigatorio');
    if (formInfo?.email === '') message.warning('O campo E-mail é Obrigatorio');
    if (formInfo?.cardName === '') {
      message.warning('O campo Nome do Cartão é Obrigatorio');
    }
    if (formInfo?.cardValidity === '') message.warning('O campo Validade é Obrigatorio');
    if (formInfo?.cardCVC === '') message.warning('O campo CVC é Obrigatorio');
    if (errorMessage.length === 0) {
      message.success('Reserva efetuada com Sucesso');
    }
  }

  const handleDateChange = (key: any, dateString: any) => {
    setFormInfo((prevFormInfo) => ({
      ...prevFormInfo,
      [key]: dateString,
    }));
  };

  function clearGlobalState() {
    validateForm();
    setFormInfo({
      name: '',
      email: '',
      creditCard: false,
      pix: false,
      cardName: '',
      cardValidity: '',
      cardCVC: '',
    });
    localStorage.clear();
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
        handleDateChange,
        clearGlobalState,
      } }
    >
      { children }
    </PaymentsContext.Provider>
  );
}
