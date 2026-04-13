import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtlMode } from './rtl-mode';

describe('RtlMode', () => {
  let component: RtlMode;
  let fixture: ComponentFixture<RtlMode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RtlMode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtlMode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
