import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { TeamItem } from '../shared/models/match.model';
import { TeamResponse } from '../shared/responses/team.response';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
  team: TeamItem = TeamItem.emptyState();
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getTeam(this.route.snapshot.params['teamId']);
  }

  private getTeam(teamId: string): void {
    this.dataService.getTeamById(teamId).subscribe((team: TeamResponse) => {
      this.team = new TeamItem(team);
    });
  }
}
