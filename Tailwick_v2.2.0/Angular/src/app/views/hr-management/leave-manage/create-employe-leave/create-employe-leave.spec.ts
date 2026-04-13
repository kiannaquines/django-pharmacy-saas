import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeLeave } from './create-employe-leave';

describe('CreateEmployeLeave', () => {
  let component: CreateEmployeLeave;
  let fixture: ComponentFixture<CreateEmployeLeave>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEmployeLeave]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmployeLeave);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
