import React, { createContext, FC } from 'react';
import { prosjekt } from '../interfaces/prosjekt';
import { useLocalStorage } from '../lib/useLocalSotrage';
import { ProsjektContextType } from '../types/prosjektContextType';

export const prosjektContext = createContext<ProsjektContextType | null>(null);

export const ProsjektProvider: FC = ({ children }) => {
  const [prosjekter, setprosjekt] = useLocalStorage<prosjekt[]>(
    'Prosjekter',
    []
  );

  const saveProsjekt = (prosjekt: prosjekt) =>
    setprosjekt([prosjekt, ...prosjekter]);
  return (
    <prosjektContext.Provider value={{ prosjekter, saveProsjekt }}>
      {children}
    </prosjektContext.Provider>
  );
};
