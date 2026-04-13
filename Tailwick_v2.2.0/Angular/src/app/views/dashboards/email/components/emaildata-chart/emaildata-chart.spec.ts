import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaildataChart } from './emaildata-chart';

describe('EmaildataChart', () => {
  let component: EmaildataChart;
  let fixture: ComponentFixture<EmaildataChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmaildataChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmaildataChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
