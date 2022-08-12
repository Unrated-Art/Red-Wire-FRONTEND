import { PreTest } from './PreTest';

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
  themes?: [];
  chapitres?: [];
  sessions?: [];
  pretest?: PreTest;
}
