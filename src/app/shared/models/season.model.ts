import { ISeason } from '../interfaces/season.interface';

export class Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;

  constructor(private season: ISeason) {
    this.id = season.id;
    this.startDate = season.startDate;
    this.endDate = season.endDate;
    this.currentMatchday = season.currentMatchday;
  }

  get getStartDateFullYear(): number {
    return new Date(this.startDate).getFullYear();
  }
}
