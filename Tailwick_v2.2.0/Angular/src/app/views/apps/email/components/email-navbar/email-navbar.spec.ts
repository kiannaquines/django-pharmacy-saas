import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailNavbar } from './email-navbar';

describe('EmailNavbar', () => {
  let component: EmailNavbar;
  let fixture: ComponentFixture<EmailNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
