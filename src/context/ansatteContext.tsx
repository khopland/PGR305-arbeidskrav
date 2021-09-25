import React, { createContext, FC } from 'react';
import { ansatte } from '../interfaces/ansatte';
import { useLocalStorage } from '../lib/useLocalSotrage';
import { AnsatteContextType } from '../types/ansatteContextType';

export const ansatteContext = createContext<AnsatteContextType | null>(null);

export const AnsatteProvider: FC = ({ children }) => {
  const [ansatte, setAnsatte] = useLocalStorage<ansatte[]>('ansatte', []);

  const saveAnsatt = (ansatt: ansatte) => setAnsatte([ansatt, ...ansatte]);
  return (
    <ansatteContext.Provider value={{ ansatte, saveAnsatt }}>
      {children}
    </ansatteContext.Provider>
  );
};
