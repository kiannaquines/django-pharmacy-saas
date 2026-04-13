import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverActiveSidenav } from './hover-active-sidenav';

describe('HoverActiveSidenav', () => {
  let component: HoverActiveSidenav;
  let fixture: ComponentFixture<HoverActiveSidenav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverActiveSidenav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverActiveSidenav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
