import { IMatch } from '../interfaces/match.interface';

export interface MatchesResponse {
  count: number;
  filters?: {
    dateFrom: string;
    dateTo: string;
  };
  matches: Array<IMatch>;
}
