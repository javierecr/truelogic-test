import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { teamMock } from 'src/fixtures/team-fixture.mock';
import { DataService } from '../services/data.service';

import { TeamPage } from './team.page';
describe('TeamPage', () => {
  let component: TeamPage;
  let fixture: ComponentFixture<TeamPage>;
  let dataServiceMock: Partial<DataService>;
  let activatedRouteMock: any;

  beforeEach(
    waitForAsync(() => {
      dataServiceMock = {
        getTeamById: jasmine
          .createSpy('getTeamById')
          .and.returnValue(of(teamMock)),
      };
      activatedRouteMock = {
        snapshot: {
          params: {
            teamId: '1765',
          },
        },
      };
      TestBed.configureTestingModule({
        declarations: [TeamPage],
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

      fixture = TestBed.createComponent(TeamPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get teams list on load', () => {
    let spyMethod = spyOn(component, 'getTeam' as any);
    fixture.detectChanges();

    component.ngOnInit();

    fixture.detectChanges();

    const hasValidAvatarUrl =
      component.team.getAvatarImageUrl.indexOf(component.team.getConcatName) >=
      0;

    expect(spyMethod).toHaveBeenCalled();
    expect(component.team.id).not.toBe(0);
    expect(hasValidAvatarUrl).toBe(true);
  });
});
