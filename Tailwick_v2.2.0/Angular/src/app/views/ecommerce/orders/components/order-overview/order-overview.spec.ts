import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOverview } from './order-overview';

describe('OrderOverview', () => {
  let component: OrderOverview;
  let fixture: ComponentFixture<OrderOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
