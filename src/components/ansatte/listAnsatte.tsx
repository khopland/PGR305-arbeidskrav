import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ansatteContext } from '../../context/ansatteContext';
import { AnsatteContextType } from '../../types/ansatteContextType';
import { Ansatt } from './ansatt';

export const ListAnsatte = () => {
  const { ansatte } = useContext(ansatteContext) as AnsatteContextType;
  return (
    <Container>
      <Col>
        {ansatte.map((a, i) => (
          <Row key={i}>
            <Ansatt ansatt={a} />
          </Row>
        ))}
      </Col>
    </Container>
  );
};
