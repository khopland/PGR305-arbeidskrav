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
  const updateProsjekt = (pro: prosjekt) => {
    const i = prosjekter.findIndex(
      (prosjektItem) => prosjektItem.navn === pro.navn
    );
    return i === -1
      ? false
      : setprosjekt((arr) => [...arr.slice(0, i), pro, ...arr.slice(i + 1)]);
  };
  const saveProsjekt = (prosjekt: prosjekt) =>
    setprosjekt([prosjekt, ...prosjekter]);
  return (
    <prosjektContext.Provider
      value={{ prosjekter, saveProsjekt, updateProsjekt }}
    >
      {children}
    </prosjektContext.Provider>
  );
};
