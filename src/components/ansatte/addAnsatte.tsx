import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ansatte } from '../../interfaces/ansatte';
import { InputField } from '../inputField';

type props = {
  onSubmit: (ansatt: ansatte) => void;
};

export const AddAnsatte = ({ onSubmit }: props) => {
  const [fornavn, setFornavn] = useState('');
  const [etternavn, setEtternavn] = useState('');
  const [stilling, setStilling] = useState('');

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ fornavn, etternavn, stilling });
        setFornavn('');
        setEtternavn('');
        setStilling('');
      }}
    >
      <InputField
        value={fornavn}
        onValueChange={setFornavn}
        label={'fornavn'}
      />
      <InputField
        value={etternavn}
        onValueChange={setEtternavn}
        label={'etternavn'}
      />
      <InputField
        value={stilling}
        onValueChange={setStilling}
        label={'Stilling'}
      />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
