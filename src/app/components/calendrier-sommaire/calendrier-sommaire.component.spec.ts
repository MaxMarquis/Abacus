import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierSommaireComponent } from './calendrier-sommaire.component';

describe('CalendrierSommaireComponent', () => {
  let component: CalendrierSommaireComponent;
  let fixture: ComponentFixture<CalendrierSommaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendrierSommaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendrierSommaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
