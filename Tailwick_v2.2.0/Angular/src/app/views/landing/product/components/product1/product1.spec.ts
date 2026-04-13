import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product1 } from './product1';

describe('Product1', () => {
  let component: Product1;
  let fixture: ComponentFixture<Product1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
