import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { map } from 'rxjs/operators';
import { Competition } from '../shared/models/competition.model';
import { CompetitionsResponse } from '../shared/responses/competitions.response';
import { ICompetition } from '../shared/interfaces/competition.interface';
import { InputCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  competitions: Array<Competition> = [];
  competitionToShow: Array<Competition> = [];
  seasons: Array<number> = [];
  currentSeasonSelection: Array<number> = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getCompetitions();
  }

  private getCompetitions(): void {
    this.dataService
      .getAllCompetitions()
      .pipe(
        map((response: CompetitionsResponse) => {
          const competitions = response.competitions.map(
            (competition: ICompetition) => {
              return new Competition(competition);
            }
          );

          return competitions;
        })
      )
      .subscribe((competitions: Array<Competition>) => {
        this.competitions = competitions;
        this.competitionToShow = this.competitions;

        if (!this.seasons.length) {
          this.getSeasonsFromCompetitions();
        }
      });
  }

  private getSeasonsFromCompetitions(): void {
    this.competitions.forEach((competition) => {
      const competitionYear = new Date(
        competition.currentSeason.startDate
      ).getFullYear();

      if (!this.seasons.includes(competitionYear)) {
        this.seasons.push(competitionYear);
      }
    });

    this.seasons.sort((a, b) => a - b);
  }

  onSeasonSelect(event: Event): void {
    const selectedSeason = (event as InputCustomEvent).target.value as any;

    this.competitionToShow = this.competitions.filter((competition) => {
      return selectedSeason.includes(
        competition.currentSeason.getStartDateFullYear
      );
    });
  }
}
