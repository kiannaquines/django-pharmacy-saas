import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailmarketingChart } from './emailmarketing-chart';

describe('EmailmarketingChart', () => {
  let component: EmailmarketingChart;
  let fixture: ComponentFixture<EmailmarketingChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailmarketingChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailmarketingChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
