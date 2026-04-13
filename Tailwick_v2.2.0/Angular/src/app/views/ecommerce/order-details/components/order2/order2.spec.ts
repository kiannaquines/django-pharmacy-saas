import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Order2 } from './order2';

describe('Order2', () => {
  let component: Order2;
  let fixture: ComponentFixture<Order2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Order2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Order2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
