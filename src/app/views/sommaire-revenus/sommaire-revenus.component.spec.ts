import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SommaireRevenusComponent } from './sommaire-revenus.component';

describe('SommaireRevenusComponent', () => {
  let component: SommaireRevenusComponent;
  let fixture: ComponentFixture<SommaireRevenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SommaireRevenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SommaireRevenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
