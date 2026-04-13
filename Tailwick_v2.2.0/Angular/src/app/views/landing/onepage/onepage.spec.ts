import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onepage } from './onepage';

describe('Onepage', () => {
  let component: Onepage;
  let fixture: ComponentFixture<Onepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Onepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Onepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
