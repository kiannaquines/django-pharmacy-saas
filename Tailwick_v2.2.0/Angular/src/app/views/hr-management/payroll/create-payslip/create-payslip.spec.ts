import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePayslip } from './create-payslip';

describe('CreatePayslip', () => {
  let component: CreatePayslip;
  let fixture: ComponentFixture<CreatePayslip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePayslip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePayslip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
