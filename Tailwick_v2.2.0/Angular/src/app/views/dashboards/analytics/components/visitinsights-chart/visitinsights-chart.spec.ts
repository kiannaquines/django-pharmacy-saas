import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitinsightsChart } from './visitinsights-chart';

describe('VisitinsightsChart', () => {
  let component: VisitinsightsChart;
  let fixture: ComponentFixture<VisitinsightsChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitinsightsChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitinsightsChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
