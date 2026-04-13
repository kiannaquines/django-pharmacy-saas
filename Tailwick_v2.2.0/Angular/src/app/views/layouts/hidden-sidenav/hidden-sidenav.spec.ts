import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenSidenav } from './hidden-sidenav';

describe('HiddenSidenav', () => {
  let component: HiddenSidenav;
  let fixture: ComponentFixture<HiddenSidenav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiddenSidenav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiddenSidenav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
