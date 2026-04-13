import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallersModal } from './sallers-modal';

describe('SallersModal', () => {
  let component: SallersModal;
  let fixture: ComponentFixture<SallersModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SallersModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SallersModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
