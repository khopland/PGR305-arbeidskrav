import React, { FC, useContext, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, RouteComponentProps } from 'react-router-dom';
import { prosjektContext } from '../context/prosjektContext';
import { prosjekt } from '../interfaces/prosjekt';
import { Status } from '../interfaces/status';
import { ProsjektContextType } from '../types/prosjektContextType';

interface Props
  extends RouteComponentProps<{
    prosjektId: string;
  }> {}

export const Prosjekt: FC<Props> = ({ match, location }) => {
  const { prosjekter } = useContext(prosjektContext) as ProsjektContextType;
  const [prosjekt, SetPorsjekt] = useState<prosjekt | null>(
    () =>
      prosjekter.find((p) => p.Id.toString() === match.params.prosjektId) ||
      null
  );

  return (
    <>
      {prosjekt ? (
        <Container>
          <br />
          <Button as={Link} to="/prosjekt">
            {' '}
            go back
          </Button>
          <Col>
            <Row>
              <h1>{prosjekt.navn}</h1>
            </Row>
            <Row>
              <h2>{`${prosjekt.kunde.navn} ${prosjekt.kunde.orgnr}`}</h2>
            </Row>
            <Row>
              <h3>{`${Status[prosjekt.status]}`}</h3>
            </Row>
            <Col>
              {prosjekt.ansatte.map((ansatt, i) => (
                <Row key={i}>
                  <h4>{`${ansatt.fornavn} ${ansatt.etternavn}`}</h4>
                </Row>
              ))}
            </Col>
          </Col>
        </Container>
      ) : (
        <Container>
          <h1>404</h1>
        </Container>
      )}
    </>
  );
};
