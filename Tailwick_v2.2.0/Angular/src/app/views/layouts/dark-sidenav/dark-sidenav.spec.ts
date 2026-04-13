import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkSidenav } from './dark-sidenav';

describe('DarkSidenav', () => {
  let component: DarkSidenav;
  let fixture: ComponentFixture<DarkSidenav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkSidenav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkSidenav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
