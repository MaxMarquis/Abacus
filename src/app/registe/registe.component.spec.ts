import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteComponent } from './registe.component';

describe('RegisteComponent', () => {
  let component: RegisteComponent;
  let fixture: ComponentFixture<RegisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
