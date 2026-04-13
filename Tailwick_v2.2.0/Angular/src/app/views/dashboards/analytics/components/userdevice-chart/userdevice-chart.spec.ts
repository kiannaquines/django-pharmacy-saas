import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdeviceChart } from './userdevice-chart';

describe('UserdeviceChart', () => {
  let component: UserdeviceChart;
  let fixture: ComponentFixture<UserdeviceChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserdeviceChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdeviceChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
