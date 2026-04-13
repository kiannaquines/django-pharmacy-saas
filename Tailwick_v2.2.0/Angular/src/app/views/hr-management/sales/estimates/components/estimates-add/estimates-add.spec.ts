import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatesAdd } from './estimates-add';

describe('EstimatesAdd', () => {
  let component: EstimatesAdd;
  let fixture: ComponentFixture<EstimatesAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstimatesAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimatesAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
