import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceCard } from './attendance-card';

describe('AttendanceCard', () => {
  let component: AttendanceCard;
  let fixture: ComponentFixture<AttendanceCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
