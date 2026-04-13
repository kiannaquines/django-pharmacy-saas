import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingScheduled } from './upcoming-scheduled';

describe('UpcomingScheduled', () => {
  let component: UpcomingScheduled;
  let fixture: ComponentFixture<UpcomingScheduled>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingScheduled]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingScheduled);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
