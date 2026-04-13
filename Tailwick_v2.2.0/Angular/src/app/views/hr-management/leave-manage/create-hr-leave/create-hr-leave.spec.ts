import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHrLeave } from './create-hr-leave';

describe('CreateHrLeave', () => {
  let component: CreateHrLeave;
  let fixture: ComponentFixture<CreateHrLeave>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateHrLeave]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHrLeave);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
