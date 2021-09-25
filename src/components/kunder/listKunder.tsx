import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { kundeContext } from '../../context/kundeContext';
import { KundeContextType } from '../../types/kundeContextType';
import { Kunde } from './kunde';

export const ListKunder = () => {
  const { kunder } = useContext(kundeContext) as KundeContextType;
  return (
    <Container>
      <Col>
        {kunder.map((kunde, i) => (
          <Row key={i}>
            <Kunde kunde={kunde} />
          </Row>
        ))}
      </Col>
    </Container>
  );
};
