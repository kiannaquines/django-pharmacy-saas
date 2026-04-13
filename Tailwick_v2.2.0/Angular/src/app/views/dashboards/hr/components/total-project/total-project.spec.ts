import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalProject } from './total-project';

describe('TotalProject', () => {
  let component: TotalProject;
  let fixture: ComponentFixture<TotalProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
