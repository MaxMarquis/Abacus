import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchMediaQueryComponent } from './match-media-query.component';

describe('MatchMediaQueryComponent', () => {
  let component: MatchMediaQueryComponent;
  let fixture: ComponentFixture<MatchMediaQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchMediaQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchMediaQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
