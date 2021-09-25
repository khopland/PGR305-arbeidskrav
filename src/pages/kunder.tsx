import React from 'react';
import { AddKunde } from '../components/kunder/addKunde';
import { ListKunder } from '../components/kunder/listKunder';

export const Kunder = () => {
  return (
    <div>
      <ListKunder />
      <br />
      <br />
      <AddKunde />
    </div>
  );
};
