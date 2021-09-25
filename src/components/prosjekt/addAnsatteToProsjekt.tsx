import React, { useContext, useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { ansatteContext } from '../../context/ansatteContext';
import { prosjektContext } from '../../context/prosjektContext';
import { ansatte } from '../../interfaces/ansatte';
import { prosjekt } from '../../interfaces/prosjekt';
import { AnsatteContextType } from '../../types/ansatteContextType';
import { ProsjektContextType } from '../../types/prosjektContextType';
import { InputSelect } from '../common/inputSelect';

export const AddAnsatteToProsjekt = () => {
  const { prosjekter, updateProsjekt } = useContext(
    prosjektContext
  ) as ProsjektContextType;
  const { ansatte } = useContext(ansatteContext) as AnsatteContextType;

  const [prosjekt, setProsjekt] = useState<prosjekt | null>(null);
  const [ansatt, setAnsatt] = useState<ansatte | null>(null);
  const [error, setError] = useState<string | undefined>();

  const resetState = () => {
    setProsjekt(null);
    setAnsatt(null);
  };

  const validate = () => {
    setError(undefined);
    if (!prosjekt) {
      setError('Prosjekt må velges');
      return false;
    }
    if (!ansatt) {
      setError('Ansatt må velges');
      return false;
    }
    if (
      prosjekt.ansatte.find(
        (a: ansatte) => JSON.stringify(a) === JSON.stringify(ansatt)
      )
    ) {
      setError('kan ikke lege til flere en 1 av samme ansatt');
      return false;
    }
    return true;
  };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate() && prosjekt && ansatt)
      if (
        updateProsjekt({
          ...prosjekt,
          ansatte: prosjekt.ansatte.concat([ansatt]),
        })
      )
        resetState();
  };

  return (
    <Container>
      <h2>Legg til ansatt til prosjekt</h2>
      <Form onSubmit={submit}>
        {error && <Alert variant={'danger'}>{error}</Alert>}
        <InputSelect
          value={prosjekt?.Id || ''}
          onValueChange={(e) =>
            setProsjekt(
              prosjekter.find((p: prosjekt) => p.Id === e.target.value) || null
            )
          }
          label={'prosjekt'}
        >
          <option value="">velg et prosjekt</option>
          {prosjekter.map((p: prosjekt, i) => (
            <option key={i} value={p.Id}>
              {`${p.navn} | ${p.kunde.navn} ${p.kunde.orgnr}`}
            </option>
          ))}
        </InputSelect>

        <InputSelect
          value={JSON.stringify(ansatt) || ''}
          onValueChange={(e) =>
            setAnsatt(
              ansatte.find(
                (ansatt: ansatte) => JSON.stringify(ansatt) === e.target.value
              ) || null
            )
          }
          label={'ansatt'}
        >
          <option value="">velg en ansatt</option>
          {ansatte.map((a: ansatte, i) => (
            <option key={i} value={JSON.stringify(a)}>
              {`${a.fornavn} ${a.etternavn} | ${a.stilling}`}
            </option>
          ))}
        </InputSelect>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
