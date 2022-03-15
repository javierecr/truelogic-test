import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { teamsMock } from 'src/fixtures/teams-fixture.mock';
import { DataService } from '../services/data.service';

import { CompetitionPage } from './competition.page';

describe('CompetitionPage', () => {
  let component: CompetitionPage;
  let fixture: ComponentFixture<CompetitionPage>;
  let dataServiceMock: Partial<DataService>;
  let activatedRouteMock: any;

  beforeEach(
    waitForAsync(() => {
      dataServiceMock = {
        getCompetitionTeams: jasmine
          .createSpy('getCompetitionTeams')
          .and.returnValue(of(teamsMock)),
      };
      activatedRouteMock = {
        snapshot: {
          params: {
            id: '2013',
          },
        },
      };
      TestBed.configureTestingModule({
        declarations: [CompetitionPage],
        imports: [
          IonicModule.forRoot(),
          HttpClientTestingModule,
          RouterModule.forRoot([]),
        ],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: activatedRouteMock,
          },
          { provide: DataService, useValue: dataServiceMock },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(CompetitionPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get teams list on load', () => {
    let spyMethod = spyOn(component, 'getCompetitionTeams' as any);
    fixture.detectChanges();

    component.ngOnInit();

    fixture.detectChanges();

    expect(spyMethod).toHaveBeenCalled();
    expect(component.teams.length).toBeGreaterThan(0);
  });
});
