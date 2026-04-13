import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sallers } from './sallers';

describe('Sallers', () => {
  let component: Sallers;
  let fixture: ComponentFixture<Sallers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sallers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sallers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
