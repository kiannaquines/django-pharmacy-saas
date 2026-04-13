import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSidenav } from './small-sidenav';

describe('SmallSidenav', () => {
  let component: SmallSidenav;
  let fixture: ComponentFixture<SmallSidenav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallSidenav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallSidenav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
