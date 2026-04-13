import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatNavbar } from './chat-navbar';

describe('ChatNavbar', () => {
  let component: ChatNavbar;
  let fixture: ComponentFixture<ChatNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
