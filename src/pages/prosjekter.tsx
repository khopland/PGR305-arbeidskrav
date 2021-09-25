import React from 'react';
import { AddAnsatteToProsjekt } from '../components/prosjekt/addAnsatteToProsjekt';
import { AddProsjekt } from '../components/prosjekt/addProsjekt';
import { EditStatus } from '../components/prosjekt/editStatus';
import { Listprosjekt } from '../components/prosjekt/listprosjekt';

export const Prosjekter = () => {
  return (
    <div>
      <Listprosjekt />
      <br />
      <br />
      <AddProsjekt />
      <br />
      <br />
      <AddAnsatteToProsjekt />
      <br />
      <br />
      <EditStatus />
    </div>
  );
};
