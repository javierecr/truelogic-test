import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { TeamItem } from '../shared/models/match.model';
import { map } from 'rxjs/operators';
import { ITeamItem } from '../shared/interfaces/match.interface';
import { Competition } from '../shared/models/competition.model';
import { CompetitionTeamsResponse } from '../shared/responses/competition-teams.response';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.page.html',
  styleUrls: ['./competition.page.scss'],
})
export class CompetitionPage implements OnInit {
  competition: Competition;
  teams: Array<TeamItem> = [];
  competitionId: string = '';

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.competitionId = this.route.snapshot.params['id'];
    this.getCompetitionTeams();
  }

  getCompetitionTeams(): void {
    this.dataService
      .getCompetitionTeams(this.competitionId)
      .pipe(
        map((response: CompetitionTeamsResponse) => {
          this.competition = new Competition(response.competition);

          const teams = response.teams.map(
            (team: ITeamItem) => new TeamItem(team)
          );

          return teams;
        })
      )
      .subscribe((teams: Array<TeamItem>) => {
        this.teams = teams;
      });
  }
}
