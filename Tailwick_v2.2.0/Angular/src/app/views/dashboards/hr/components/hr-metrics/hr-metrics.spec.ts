import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrMetrics } from './hr-metrics';

describe('HrMetrics', () => {
  let component: HrMetrics;
  let fixture: ComponentFixture<HrMetrics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrMetrics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrMetrics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
