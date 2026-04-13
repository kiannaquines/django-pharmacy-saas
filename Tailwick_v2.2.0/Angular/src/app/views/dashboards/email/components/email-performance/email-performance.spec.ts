import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPerformance } from './email-performance';

describe('EmailPerformance', () => {
  let component: EmailPerformance;
  let fixture: ComponentFixture<EmailPerformance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailPerformance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailPerformance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
