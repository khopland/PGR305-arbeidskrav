import React from 'react';
import { AddAnsatte } from '../components/ansatte/addAnsatte';
import { ListAnsatte } from '../components/ansatte/listAnsatte';
import { ansatte } from '../interfaces/ansatte';
import { useLocalStorage } from '../lib/useLocalSotrage';

export const Ansatte = () => {
  const [ansatte, setAnsatte] = useLocalStorage<ansatte[]>('ansatte', []);

  return (
    <div>
      <ListAnsatte ansatte={ansatte} />
      <br />
      <br />
      <AddAnsatte
        onSubmit={(ansatt) => setAnsatte((x: ansatte[]) => [ansatt, ...x])}
      />
    </div>
  );
};
