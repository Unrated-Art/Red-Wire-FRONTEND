import { PreTest } from './preTest';
import { Theme } from './theme';

export interface Formation {
  idFormation?: number;
  reference: string;
  titref: string;
  lieu: string;
  interFormation: boolean;
  duree: number;
  prerequis: string;
  objectif: string;
  publicVise: string;
  programmeDetaille: string;
  themes?: Theme[];
  chapitres?: [];
  sessions?: [];
  pretest?: PreTest;
}
