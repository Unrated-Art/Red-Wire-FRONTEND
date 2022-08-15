import { PreTest } from './PreTest';
import { Theme } from './theme';

export interface Formation {
  idFormation: number;
  reference: string;
  titref: string;
  lieu: string;
  interFormation: boolean;
  duree: number;
  prerequis: string;
  publicVise: string;
  programmeDetaille: string;
  themes: Theme[];
  chapitres: [];
  sessions: [];
  pretest: PreTest;
}
