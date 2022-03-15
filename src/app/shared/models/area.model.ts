import { IArea } from '../interfaces/area.interface';

export class Area {
  id: number;
  name: string;

  constructor(private area: IArea) {
    this.id = area.id;
    this.name = area.name;
  }
}
