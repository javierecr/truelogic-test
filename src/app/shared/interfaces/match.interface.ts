import { IArea } from './area.interface';
import { ICompetition } from './competition.interface';
import { ISeason } from './season.interface';

export interface IMatch {
  id: number;
  competition: ICompetition;
  season: ISeason;
  utcDate: string;
  status: string;
  attendance: number;
  venue: string;
  state: string;
  group: string;
  lastUpdate: string;
  homeTeam: ITeam;
  awayTeam: ITeam;
  score: IScore;
  referees: Array<IMember>;
}

export interface IMember {
  id: number;
  name: string;
  shirtNumber?: number;
  position?: string;
  countryOfBirth?: string;
  nationality?: string;
  dateOfBirth: string;
  role?: string;
}

export interface ITeam {
  area?: IArea;
  id: number;
  name: string;
  coach?: IMember;
  captain?: IMember;
  lineup?: Array<IMember>;
  bench?: Array<IMember>;
  team?: ITeamItem;
}

export interface ITeamItem {
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
  tla: string;
  venue: string;
  website: string;
  squad?: Array<IMember>;
}

export interface IScore {
  winner: string;
  duration: string;
  fullTime: IScoreItem;
  halfTime: IScoreItem;
  extraTime: IScoreItem;
  penalties: IScoreItem;
}

export interface IScoreItem {
  homeTeam: number;
  awayTeam: number;
}
