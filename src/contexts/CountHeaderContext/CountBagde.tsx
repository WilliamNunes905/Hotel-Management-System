import { createContext, useState } from 'react';

type TypeBagde = {
  badge: number,
  setBadge: (value: number) => void,
};

const initialValues = {
  badge: 0,
};

export const CountBagde = createContext({} as TypeBagde);

export function CountBagdeProvider({ children }: { children: React.ReactNode }) {
  const [badge, setBadge] = useState(initialValues.badge);
  return (
    <CountBagde.Provider value={ { badge, setBadge } }>
      { children }
    </CountBagde.Provider>
  );
}
