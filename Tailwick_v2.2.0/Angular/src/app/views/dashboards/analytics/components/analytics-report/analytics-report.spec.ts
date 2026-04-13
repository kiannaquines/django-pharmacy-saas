import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsReport } from './analytics-report';

describe('AnalyticsReport', () => {
  let component: AnalyticsReport;
  let fixture: ComponentFixture<AnalyticsReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
