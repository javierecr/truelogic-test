import { ICompetition } from '../interfaces/competition.interface';
import { ITeam, ITeamItem } from '../interfaces/match.interface';
import { ISeason } from '../interfaces/season.interface';

export interface CompetitionTeamsResponse {
  teams: Array<ITeamItem>;
  competition: ICompetition;
  season: ISeason;
}
