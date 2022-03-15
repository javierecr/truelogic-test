import { ICompetition } from '../interfaces/competition.interface';
import { IMatch } from '../interfaces/match.interface';

export interface CompetitionMatchesResponse {
  matches: Array<IMatch>;
  competition: ICompetition;
}
