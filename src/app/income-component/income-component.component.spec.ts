import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeComponentComponent } from './income-component.component';

describe('IncomeComponentComponent', () => {
  let component: IncomeComponentComponent;
  let fixture: ComponentFixture<IncomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
