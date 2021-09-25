import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AddAnsatteToProsjekt } from '../components/prosjekt/addAnsatteToProsjekt';
import { AddProsjekt } from '../components/prosjekt/addProsjekt';
import { EditStatus } from '../components/prosjekt/editStatus';
import { Listprosjekt } from '../components/prosjekt/listprosjekt';

export const Prosjekter = () => {
  return (
    <Container>
      <Listprosjekt />
      <br />
      <Row>
        <AddProsjekt />
        <Col>
          <AddAnsatteToProsjekt />
        </Col>
        <Col>
          <EditStatus />
        </Col>
      </Row>
    </Container>
  );
};
