import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAttendance } from './main-attendance';

describe('MainAttendance', () => {
  let component: MainAttendance;
  let fixture: ComponentFixture<MainAttendance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAttendance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAttendance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
