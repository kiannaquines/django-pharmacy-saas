import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasSidenav } from './offcanvas-sidenav';

describe('OffcanvasSidenav', () => {
  let component: OffcanvasSidenav;
  let fixture: ComponentFixture<OffcanvasSidenav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffcanvasSidenav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffcanvasSidenav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
