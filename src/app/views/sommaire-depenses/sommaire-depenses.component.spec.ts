import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SommaireDepensesComponent } from './sommaire-depenses.component';

describe('SommaireDepensesComponent', () => {
  let component: SommaireDepensesComponent;
  let fixture: ComponentFixture<SommaireDepensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SommaireDepensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SommaireDepensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
