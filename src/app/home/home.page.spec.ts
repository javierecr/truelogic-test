import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { DataService } from '../services/data.service';
import { of } from 'rxjs';
import { competitionsMock } from 'src/fixtures/competitions-fixture.mock';
import { By } from '@angular/platform-browser';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let dataServiceMock: Partial<DataService>;

  beforeEach(
    waitForAsync(() => {
      dataServiceMock = {
        getAllCompetitions: jasmine
          .createSpy('getAllCompetitions')
          .and.returnValue(of(competitionsMock)),
      };
      TestBed.configureTestingModule({
        declarations: [HomePage],
        imports: [
          IonicModule.forRoot(),
          RouterModule.forRoot([]),
          HttpClientTestingModule,
        ],
        providers: [{ provide: DataService, useValue: dataServiceMock }],
      }).compileComponents();

      fixture = TestBed.createComponent(HomePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get competitions list on load', () => {
    let spyMethod = spyOn(component, 'getCompetitions' as any);
    fixture.detectChanges();

    component.ngOnInit();

    fixture.detectChanges();

    expect(spyMethod).toHaveBeenCalled();
    expect(component.competitions.length).toBeGreaterThan(0);
    expect(
      component.competitions[0].currentSeason.getStartDateFullYear
    ).toBeTruthy();
  });

  it('should update competititons to show when selecting a season', () => {
    const spyMethod = spyOn(component, 'onSeasonSelect' as any);
    const selectedSeason = [2022];
    fixture.detectChanges();

    const seasonInput = fixture.debugElement.query(
      By.css('[data-test-id="season-input"]')
    ).nativeElement;

    fixture.detectChanges();

    seasonInput.value = selectedSeason;

    seasonInput.dispatchEvent(new Event('ionChange'), [2022]);

    fixture.detectChanges();

    expect(spyMethod).toHaveBeenCalled();
  });
});
