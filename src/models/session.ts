import { Formation } from '../models/Formation';

export interface Session {
  idSession: number;
  dateDebut: Date | string;
  dateFin: Date | string;
  lieu: string;
  prix: number;
  salle: null;
  formation?: Formation;
  formateur: null;
  evalSessions: [];
  stagiaires: [];
}
