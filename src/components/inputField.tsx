import React, { Dispatch, SetStateAction } from 'react';
import { Form, Row } from 'react-bootstrap';

export interface props {
  value: string | number | undefined;
  onValueChange: Dispatch<SetStateAction<string>>;
  type?: string;
  label: string;
}

export function InputField({
  value,
  onValueChange,
  type = 'text',
  label,
}: props) {
  return (
    <Form.Group as={Row}>
      <Form.Label column="lg" lg={2}>
        {label}
      </Form.Label>
      <Form.Control
        type={type}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </Form.Group>
  );
}
