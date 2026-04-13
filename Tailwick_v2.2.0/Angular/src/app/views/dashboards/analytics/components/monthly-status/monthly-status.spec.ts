import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyStatus } from './monthly-status';

describe('MonthlyStatus', () => {
  let component: MonthlyStatus;
  let fixture: ComponentFixture<MonthlyStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
