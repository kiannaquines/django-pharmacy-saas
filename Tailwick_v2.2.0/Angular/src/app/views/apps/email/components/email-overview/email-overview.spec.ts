import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailOverview } from './email-overview';

describe('EmailOverview', () => {
  let component: EmailOverview;
  let fixture: ComponentFixture<EmailOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
