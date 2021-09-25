import React from 'react';
import { kunde } from '../../interfaces/kunde';

export const Kunde = ({ kunde }: { kunde: kunde }) => {
  return <h4>{`navn: ${kunde.navn} | orgnr: ${kunde.orgnr}`}</h4>;
};
