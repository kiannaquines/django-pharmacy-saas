import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrAttendance } from './hr-attendance';

describe('HrAttendance', () => {
  let component: HrAttendance;
  let fixture: ComponentFixture<HrAttendance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrAttendance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrAttendance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
