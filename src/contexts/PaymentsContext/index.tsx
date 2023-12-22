import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { message } from 'antd';
import { Quarto } from '../../types/ApartmentListType';
import { Guest } from '../../types/GuestType';

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
  storageBedroom: Quarto[];
  setStorageBedroom: Dispatch<SetStateAction<Quarto[]>>;
  storageStayHotel: Guest | null;
  setStorageStayHotel: Dispatch<SetStateAction<Guest | null>>;
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
  const [storageBedroom, setStorageBedroom] = useState<Quarto[]>([]);
  const [storageStayHotel, setStorageStayHotel] = useState<Guest | null>(null);
  console.log(formInfo);

  function validateForm() {
    const errors = [];

    if (formInfo?.name === '') errors.push('O campo nome é Obrigatório');
    if (formInfo?.email === '') errors.push('O campo E-mail é Obrigatório');
    if (formInfo?.cardName === '') errors.push('O campo Nome do Cartão é Obrigatório');
    if (formInfo?.cardValidity === '') errors.push('O campo Validade é Obrigatório');
    if (formInfo?.cardCVC === '') errors.push('O campo CVC é Obrigatório');
    return errors.length === 0;
  }

  const handleDateChange = (key: any, dateString: any) => {
    setFormInfo((prevFormInfo) => ({
      ...prevFormInfo,
      [key]: dateString,
    }));
  };
  console.log(validateForm.length);

  function clearGlobalState() {
    if (validateForm()) {
      setFormInfo({
        name: '',
        email: '',
        creditCard: false,
        pix: false,
        cardName: '',
        cardValidity: '',
        cardCVC: '',
      });
      message.success('Reserva efetuada com Sucesso');
      localStorage.clear();
    }
  }

  return (
    <PaymentsContext.Provider
      value={ {
        formInfo,
        setFormInfo,
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
