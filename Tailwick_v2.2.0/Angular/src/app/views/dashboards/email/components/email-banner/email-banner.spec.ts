import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailBanner } from './email-banner';

describe('EmailBanner', () => {
  let component: EmailBanner;
  let fixture: ComponentFixture<EmailBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
