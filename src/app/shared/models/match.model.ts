import {
  IMatch,
  IMember,
  IScore,
  IScoreItem,
  ITeam,
  ITeamItem,
} from '../interfaces/match.interface';
import { Area } from './area.model';

export class Member {
  id: number;
  name: string;
  shirtNumber?: number;
  position?: string;
  countryOfBirth?: string;
  nationality?: string;
  dateOfBirth: string;

  constructor(private member: IMember) {
    this.id = member.id;
    this.name = member.name;
    this.shirtNumber = member.shirtNumber;
    this.position = member.position;
    this.countryOfBirth = member.countryOfBirth;
    this.nationality = member.nationality;
    this.dateOfBirth = member.dateOfBirth;
  }

  get concatName(): string {
    return this.name.replace(' ', '+');
  }

  get getAvatarImageUrl(): string {
    return `https://ui-avatars.com/api/?name=${this.concatName}`;
  }

  get getAge(): number {
    var today = new Date();
    var birthDate = new Date(this.dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}

export class TeamItem {
  address: string;
  area: Area;
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
  squad?: Array<Member>;

  constructor(private teamItem: ITeamItem) {
    this.address = teamItem.address;
    this.area = new Area(teamItem.area);
    this.clubColors = teamItem.clubColors;
    this.crestUrl = teamItem.crestUrl;
    this.email = teamItem.email;
    this.founded = teamItem.founded;
    this.id = teamItem.id;
    this.lastUpdated = teamItem.lastUpdated;
    this.name = teamItem.name;
    this.phone = teamItem.phone;
    this.shortName = teamItem.shortName;
    this.tla = teamItem.tla;
    this.venue = teamItem.venue;
    this.website = teamItem.website;
    this.squad = teamItem.squad?.map((squadMember) => new Member(squadMember));
  }

  static emptyState(): TeamItem {
    const emptyObject = {
      address: '',
      area: { name: '', id: null },
      clubColors: '',
      crestUrl: '',
      email: '',
      founded: 0,
      id: 0,
      lastUpdated: '',
      name: '',
      phone: '',
      shortName: '',
      tla: '',
      venue: '',
      squad: [],
      website: '',
    };

    return new this(emptyObject);
  }

  get getGoogleMapsUrl(): string {
    const concatAddress = this.address.replace(' ', '+');

    return `https://www.google.com/maps/search/?api=1&query=${concatAddress}`;
  }

  get getConcatName(): string {
    return this.name.replace(' ', '+');
  }

  get getAvatarImageUrl(): string {
    return `https://ui-avatars.com/api/?name=${this.getConcatName}`;
  }
}
