import { prosjekt } from '../interfaces/prosjekt';

export type ProsjektContextType = {
  prosjekter: prosjekt[];
  saveProsjekt: (prosjekt: prosjekt) => boolean;
};
