import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingInterview } from './upcoming-interview';

describe('UpcomingInterview', () => {
  let component: UpcomingInterview;
  let fixture: ComponentFixture<UpcomingInterview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingInterview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingInterview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
