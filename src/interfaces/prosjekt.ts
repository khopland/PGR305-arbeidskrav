import { ansatte } from './ansatte';
import { kunde } from './kunde';
import { Status } from './status';

export interface prosjekt {
  navn: string;
  kunde: kunde;
  status: Status;
  ansatte: ansatte[];
}
