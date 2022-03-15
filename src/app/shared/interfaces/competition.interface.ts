import { IArea } from './area.interface';
import { ISeason } from './season.interface';

export interface ICompetition {
  id: number;
  area: IArea;
  name: string;
  code: string;
  plan: string;
  currentSeason?: ISeason;
  seasons?: Array<ISeason>;
  lastUpdated: string;
  emblemUrl?: string;
  countryCode?: string;
}
