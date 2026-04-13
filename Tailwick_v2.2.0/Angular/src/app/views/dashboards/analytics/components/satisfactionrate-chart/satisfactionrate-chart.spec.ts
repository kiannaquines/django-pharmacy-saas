import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfactionrateChart } from './satisfactionrate-chart';

describe('SatisfactionrateChart', () => {
  let component: SatisfactionrateChart;
  let fixture: ComponentFixture<SatisfactionrateChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SatisfactionrateChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatisfactionrateChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
