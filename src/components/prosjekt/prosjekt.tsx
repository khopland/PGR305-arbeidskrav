import React from 'react';
import { ansatte } from '../../interfaces/ansatte';
import { prosjekt } from '../../interfaces/prosjekt';
import { Status } from '../../interfaces/status';

export const Prosjekt = ({ porsjekt }: { porsjekt: prosjekt }) => {
  return (
    <div>
      <h4>{`${Status[porsjekt.status]} | ${porsjekt.kunde.navn} ${
        porsjekt.kunde.orgnr
      } | ${porsjekt.navn}`}</h4>
      <ul>
        {porsjekt?.ansatte.map((ansatt: ansatte, i) => (
          <li key={i}>{`${ansatt.fornavn} ${ansatt.etternavn}`}</li>
        ))}
      </ul>
      <br />
    </div>
  );
};
