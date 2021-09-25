import React, { createContext, FC } from 'react';
import { kunde } from '../interfaces/kunde';
import { useLocalStorage } from '../lib/useLocalSotrage';
import { KundeContextType } from '../types/kundeContextType';

export const kundeContext = createContext<KundeContextType | null>(null);

export const KundeProvider: FC = ({ children }) => {
  const [kunder, setKunde] = useLocalStorage<kunde[]>('Kunder', []);

  const saveKunde = (kunde: kunde) => setKunde([kunde, ...kunder]);
  return (
    <kundeContext.Provider value={{ kunder, saveKunde }}>
      {children}
    </kundeContext.Provider>
  );
};
