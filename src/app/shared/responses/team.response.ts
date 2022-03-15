import { IArea } from '../interfaces/area.interface';
import { ICompetition } from '../interfaces/competition.interface';
import { IMember } from '../interfaces/match.interface';

export interface TeamResponse {
  activeCompetitions: Array<ICompetition>;
  address: string;
  area: IArea;
  clubColors: string;
  crestUrl: string;
  email: string;
  founded: number;
  id: number;
  lastUpdated: string;
  name: string;
  phone: string;
  shortName: string;
  squad: Array<IMember>;
  tla: string;
  venue: string;
  website: string;
}
