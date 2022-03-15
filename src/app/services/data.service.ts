import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompetitionTeamsResponse } from '../shared/responses/competition-teams.response';
import { CompetitionsResponse } from '../shared/responses/competitions.response';
import { TeamsResponse } from '../shared/responses/teams.reponse';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getAllCompetitions(): Observable<CompetitionsResponse> {
    let params = new HttpParams().append('plan', 'TIER_ONE');

    return this.http.get(`${environment.COMPETITIONS}`, {
      params,
    }) as Observable<CompetitionsResponse>;
  }

  public getCompetitionTeams(
    competitionId: string
  ): Observable<CompetitionTeamsResponse> {
    const url = environment.COMPETITION_TEAMS.replace(
      '{competitionId}',
      competitionId
    );

    return this.http.get(url) as Observable<CompetitionTeamsResponse>;
  }

  public getTeamById(teamId: string): Observable<any> {
    const url = environment.TEAM.replace('{teamId}', teamId);

    return this.http.get(url);
  }
}
