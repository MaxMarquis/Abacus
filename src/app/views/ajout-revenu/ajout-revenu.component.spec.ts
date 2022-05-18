import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRevenuComponent } from './ajout-revenu.component';

describe('AjoutRevenuComponent', () => {
  let component: AjoutRevenuComponent;
  let fixture: ComponentFixture<AjoutRevenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutRevenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutRevenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
