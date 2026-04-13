import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerspectiveChart } from './perspective-chart';

describe('PerspectiveChart', () => {
  let component: PerspectiveChart;
  let fixture: ComponentFixture<PerspectiveChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerspectiveChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerspectiveChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
