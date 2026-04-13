import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesAdd } from './expenses-add';

describe('ExpensesAdd', () => {
  let component: ExpensesAdd;
  let fixture: ComponentFixture<ExpensesAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
