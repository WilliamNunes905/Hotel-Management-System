import { createContext, useState, Dispatch, SetStateAction } from 'react';
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
  storageStayHotel: Guest | null;
  setStorageStayHotel: Dispatch<SetStateAction<Guest | null>>;
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

export function PaymentsProvider({ children }: { children: React.ReactNode }) {
  const [formInfo, setFormInfo] = useState<TypeForm>(initialFormInfo);
  const [storageStayHotel, setStorageStayHotel] = useState<Guest | null>(null);

  return (
    <PaymentsContext.Provider
      value={ {
        formInfo,
        setFormInfo,
        storageStayHotel,
        setStorageStayHotel,
      } }
    >
      { children }
    </PaymentsContext.Provider>
  );
}
