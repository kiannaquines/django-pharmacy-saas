import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStatistic } from './product-statistic';

describe('ProductStatistic', () => {
  let component: ProductStatistic;
  let fixture: ComponentFixture<ProductStatistic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductStatistic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductStatistic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
