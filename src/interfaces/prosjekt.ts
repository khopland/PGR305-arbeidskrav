import { ansatte } from './ansatte';
import { kunde } from './kunde';
import { Status } from './status';

export interface prosjekt {
  Id: number;
  navn: string;
  kunde: kunde;
  status: Status;
  ansatte: ansatte[];
}
