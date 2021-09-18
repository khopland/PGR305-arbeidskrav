import React from 'react';
import { ansatte } from '../../interfaces/ansatte';

type props = {
  ansatt: ansatte;
};

export const Ansatt = ({ ansatt }: props) => {
  return (
    <h4>{`${ansatt.stilling} | ${ansatt.fornavn} ${ansatt.etternavn} `}</h4>
  );
};
