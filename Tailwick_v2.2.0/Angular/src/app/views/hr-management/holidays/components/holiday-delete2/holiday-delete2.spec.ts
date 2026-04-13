import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayDelete2 } from './holiday-delete2';

describe('HolidayDelete2', () => {
  let component: HolidayDelete2;
  let fixture: ComponentFixture<HolidayDelete2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolidayDelete2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayDelete2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
