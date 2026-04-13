import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayDelete } from './holiday-delete';

describe('HolidayDelete', () => {
  let component: HolidayDelete;
  let fixture: ComponentFixture<HolidayDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolidayDelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayDelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
