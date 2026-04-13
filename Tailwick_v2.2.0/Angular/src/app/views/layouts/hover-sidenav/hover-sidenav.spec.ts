import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverSidenav } from './hover-sidenav';

describe('HoverSidenav', () => {
  let component: HoverSidenav;
  let fixture: ComponentFixture<HoverSidenav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverSidenav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverSidenav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
