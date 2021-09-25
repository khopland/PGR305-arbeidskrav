import React from 'react';
import { AddProsjekt } from '../components/prosjekt/addProsjekt';
import { Listprosjekt } from '../components/prosjekt/listprosjekt';

export const Prosjekter = () => {
  return (
    <div>
      <Listprosjekt />
      <br />
      <br />
      <AddProsjekt />
    </div>
  );
};
