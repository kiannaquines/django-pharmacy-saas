import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailRate } from './email-rate';

describe('EmailRate', () => {
  let component: EmailRate;
  let fixture: ComponentFixture<EmailRate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailRate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailRate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
