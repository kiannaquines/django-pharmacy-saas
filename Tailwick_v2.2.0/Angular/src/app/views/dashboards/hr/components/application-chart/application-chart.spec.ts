import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationChart } from './application-chart';

describe('ApplicationChart', () => {
  let component: ApplicationChart;
  let fixture: ComponentFixture<ApplicationChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
