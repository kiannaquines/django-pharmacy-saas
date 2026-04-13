import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionChart } from './interaction-chart';

describe('InteractionChart', () => {
  let component: InteractionChart;
  let fixture: ComponentFixture<InteractionChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractionChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractionChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
