import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDelete } from './employee-delete';

describe('EmployeeDelete', () => {
  let component: EmployeeDelete;
  let fixture: ComponentFixture<EmployeeDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeDelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
