import React from 'react';
import { AddAnsatte } from '../components/ansatte/addAnsatte';
import { ListAnsatte } from '../components/ansatte/listAnsatte';

export const Ansatte = () => {
  return (
    <div>
      <ListAnsatte />
      <br />
      <br />
      <AddAnsatte />
    </div>
  );
};
