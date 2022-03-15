import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { competitionsMock } from 'src/fixtures/competitions-fixture.mock';
import { environmentMock } from 'src/fixtures/environment-fixture.mock';
import { teamMock } from 'src/fixtures/team-fixture.mock';
import { teamsMock } from 'src/fixtures/teams-fixture.mock';
import { ICompetition } from '../shared/interfaces/competition.interface';
import { ITeamItem } from '../shared/interfaces/match.interface';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let controller: HttpTestingController;
  let environment = environmentMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });
    service = TestBed.inject(DataService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request for competitions', () => {
    const expectedUrl = `${environmentMock.COMPETITIONS}?plan=TIER_ONE`;
    let competitions: Array<ICompetition>;

    service.getAllCompetitions().subscribe((response) => {
      competitions = response.competitions;
    });

    const request = controller.expectOne(expectedUrl);
    request.flush(competitionsMock);
    controller.verify();

    expect(competitions).toBe(competitionsMock.competitions);
  });

  it('should request for teams', () => {
    const competitionId = competitionsMock.competitions[0].id.toString();
    const expectedUrl = `${environmentMock.COMPETITION_TEAMS}`.replace(
      '{competitionId}',
      competitionId
    );
    let teams: Array<ITeamItem>;

    service.getCompetitionTeams(competitionId).subscribe((response) => {
      teams = response.teams;
    });

    const request = controller.expectOne(expectedUrl);
    request.flush(teamsMock);
    controller.verify();

    expect(teams).toBe(teamsMock.teams);
  });

  it('should request for team by ID', () => {
    const teamId = teamsMock.teams[0].id.toString();
    const expectedUrl = `${environmentMock.TEAM}`.replace('{teamId}', teamId);
    let team: ITeamItem;

    service.getTeamById(teamId).subscribe((response) => {
      team = response;
    });

    const request = controller.expectOne(expectedUrl);
    request.flush(teamMock);
    controller.verify();

    expect(team).toBe(teamMock);
  });
});
