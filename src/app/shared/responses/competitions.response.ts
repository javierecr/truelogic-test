import { ICompetition } from '../interfaces/competition.interface';

export interface CompetitionsResponse {
  competitions: Array<ICompetition>;
  count: number;
  filters?: Array<any>;
}
