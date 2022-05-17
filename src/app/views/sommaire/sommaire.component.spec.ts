import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SommaireComponent } from './sommaire.component';

describe('SommaireComponent', () => {
  let component: SommaireComponent;
  let fixture: ComponentFixture<SommaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SommaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SommaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
