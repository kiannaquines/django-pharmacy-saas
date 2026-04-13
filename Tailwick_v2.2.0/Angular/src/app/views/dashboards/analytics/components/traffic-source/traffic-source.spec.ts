import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficSource } from './traffic-source';

describe('TrafficSource', () => {
  let component: TrafficSource;
  let fixture: ComponentFixture<TrafficSource>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficSource]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficSource);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
