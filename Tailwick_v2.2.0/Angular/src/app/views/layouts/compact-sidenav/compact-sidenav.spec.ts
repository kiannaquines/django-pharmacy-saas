import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactSidenav } from './compact-sidenav';

describe('CompactSidenav', () => {
  let component: CompactSidenav;
  let fixture: ComponentFixture<CompactSidenav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompactSidenav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompactSidenav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
