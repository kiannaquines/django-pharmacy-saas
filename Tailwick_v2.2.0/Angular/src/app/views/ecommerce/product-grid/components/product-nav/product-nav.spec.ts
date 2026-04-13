import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNav } from './product-nav';

describe('ProductNav', () => {
  let component: ProductNav;
  let fixture: ComponentFixture<ProductNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
