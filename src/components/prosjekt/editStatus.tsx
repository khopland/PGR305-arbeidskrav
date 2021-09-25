import React, { useContext, useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { prosjektContext } from '../../context/prosjektContext';
import { prosjekt } from '../../interfaces/prosjekt';
import { Status } from '../../interfaces/status';
import { ProsjektContextType } from '../../types/prosjektContextType';
import { InputSelect } from '../common/inputSelect';

export const EditStatus = () => {
  const { prosjekter, updateProsjekt } = useContext(
    prosjektContext
  ) as ProsjektContextType;

  const [prosjekt, setProsjekt] = useState<prosjekt | null>(null);
  const [status, setStatus] = useState<Status | null>(null);
  const [error, setError] = useState<string | undefined>();

  const resetState = () => {
    setProsjekt(null);
    setStatus(null);
  };

  const validate = () => {
    setError(undefined);
    if (!prosjekt) {
      setError('Prosjekt må velges');
      return false;
    }
    if (!status) {
      setError('Status må velges');
      return false;
    }
    return true;
  };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate() && prosjekt && status)
      if (
        updateProsjekt({
          ...prosjekt,
          status,
        })
      )
        resetState();
  };

  return (
    <Container>
      <Form onSubmit={submit}>
        {error && <Alert variant={'danger'}>{error}</Alert>}
        <InputSelect
          value={JSON.stringify(prosjekt) || ''}
          onValueChange={(e) =>
            setProsjekt(
              prosjekter.find(
                (p: prosjekt) => JSON.stringify(p) === e.target.value
              ) || null
            )
          }
          label={'prosjekt'}
        >
          <option value="">velg et prosjekt</option>
          {prosjekter.map((p: prosjekt, i) => (
            <option key={i} value={JSON.stringify(p)}>
              {`${p.navn} | ${p.kunde.navn} ${p.kunde.orgnr} | ${
                Status[p.status]
              }`}
            </option>
          ))}
        </InputSelect>

        <InputSelect
          value={status || ''}
          onValueChange={(e) => setStatus(e.target.value as unknown as Status)}
          label={'status'}
        >
          <option value="">velg status</option>
          <option value={Status.PLANING}>Planing</option>
          <option value={Status.ONGOING}>Ongoing</option>
          <option value={Status.COMPLETED}>Completed</option>
        </InputSelect>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
