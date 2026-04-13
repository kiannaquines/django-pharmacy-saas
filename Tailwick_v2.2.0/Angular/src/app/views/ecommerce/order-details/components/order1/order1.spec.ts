import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Order1 } from './order1';

describe('Order1', () => {
  let component: Order1;
  let fixture: ComponentFixture<Order1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Order1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Order1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
