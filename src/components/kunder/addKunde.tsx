import React, { useContext, useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { kundeContext } from '../../context/kundeContext';
import { KundeContextType } from '../../types/kundeContextType';
import { InputField } from '../common/inputField';

export const AddKunde = () => {
  const [navn, setNavn] = useState('');
  const [orgnr, setOrgnr] = useState('');
  const [error, setError] = useState<string>();
  const { saveKunde } = useContext(kundeContext) as KundeContextType;

  const resetState = () => {
    setNavn('');
    setOrgnr('');
  };

  const validate = () => {
    setError(undefined);
    if (navn.length <= 3) {
      setError('navn må fylles ut');
      return false;
    }
    if (!/^\d+$/.test(orgnr)) {
      setError('orgnr må bare vere tall');
      return false;
    }
    return true;
  };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate() && saveKunde({ navn, orgnr })) resetState();
  };

  return (
    <Container>
      <Form onSubmit={submit}>
        {error && <Alert variant={'danger'}>{error}</Alert>}
        <InputField
          value={navn}
          onValueChange={setNavn}
          required={true}
          label={'navn'}
        />
        <InputField
          value={orgnr}
          onValueChange={setOrgnr}
          required={true}
          label={'orgnr'}
        />
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
