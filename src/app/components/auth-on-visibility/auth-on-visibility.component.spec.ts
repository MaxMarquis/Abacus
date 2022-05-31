import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthOnVisibilityComponent } from './auth-on-visibility.component';

describe('AuthOnVisibilityComponent', () => {
  let component: AuthOnVisibilityComponent;
  let fixture: ComponentFixture<AuthOnVisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthOnVisibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthOnVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
