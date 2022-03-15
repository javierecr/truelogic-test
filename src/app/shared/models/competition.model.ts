import { ICompetition } from '../interfaces/competition.interface';
import { Area } from './area.model';
import { Season } from './season.model';

export class Competition {
  id: number;
  area: Area;
  name: string;
  code: string;
  plan: string;
  currentSeason?: Season;
  seasons?: Array<Season>;
  lastUpdated: string;
  emblemUrl?: string;

  constructor(private competition: ICompetition) {
    this.id = competition.id;
    this.emblemUrl = competition.emblemUrl;
    this.area = new Area(competition.area);
    this.name = competition.name;
    this.code = competition.code;
    this.plan = competition.plan;
    this.currentSeason = competition.currentSeason
      ? new Season(competition.currentSeason)
      : undefined;
    this.lastUpdated = competition.lastUpdated;
    this.seasons = competition.seasons
      ? competition.seasons.map((season) => new Season(season))
      : [];
  }

  get concatName(): string {
    return this.name.replace(' ', '+');
  }

  get avatarImageUrl(): string {
    return `https://ui-avatars.com/api/?name=${this.concatName}`;
  }
}
