import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { prosjektContext } from '../../context/prosjektContext';
import { ProsjektContextType } from '../../types/prosjektContextType';
import { Prosjekt } from './prosjekt';

export const Listprosjekt = () => {
  const { prosjekter } = useContext(prosjektContext) as ProsjektContextType;

  return (
    <Container>
      <Col>
        {prosjekter &&
          prosjekter.map((porsjekt, i) => (
            <Row key={i}>
              <Prosjekt porsjekt={porsjekt} />
            </Row>
          ))}
      </Col>
    </Container>
  );
};
