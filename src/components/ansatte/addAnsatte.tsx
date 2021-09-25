import React, { useContext, useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { ansatteContext } from '../../context/ansatteContext';
import { AnsatteContextType } from '../../types/ansatteContextType';
import { InputField } from '../common/inputField';

export const AddAnsatte = () => {
  const [fornavn, setFornavn] = useState('');
  const [etternavn, setEtternavn] = useState('');
  const [stilling, setStilling] = useState('');
  const [error, setError] = useState<string>();
  const { saveAnsatt } = useContext(ansatteContext) as AnsatteContextType;

  const resetState = () => {
    setFornavn('');
    setEtternavn('');
    setStilling('');
  };

  const validate = () => {
    if (fornavn.length <= 3) {
      setError('Fornavn må fylles ut');
      return false;
    }
    if (etternavn.length <= 3) {
      setError('Etternavn må fylles ut');
      return false;
    }
    if (stilling.length <= 1) {
      setError('Stilling må fylles ut');
      return false;
    }
    return true;
  };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(undefined);
    if (validate() && saveAnsatt({ fornavn, etternavn, stilling }))
      resetState();
  };

  return (
    <Container>
      <Form onSubmit={submit}>
        {error && <Alert variant={'danger'}>{error}</Alert>}
        <InputField
          value={fornavn}
          onValueChange={setFornavn}
          required={true}
          label={'fornavn'}
        />
        <InputField
          value={etternavn}
          onValueChange={setEtternavn}
          required={true}
          label={'etternavn'}
        />
        <InputField
          value={stilling}
          onValueChange={setStilling}
          required={true}
          label={'Stilling'}
        />
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
