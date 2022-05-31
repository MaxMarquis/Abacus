import { TestBed } from '@angular/core/testing';

import { ExpanseService } from './expanse.service';

describe('ExpanseService', () => {
  let service: ExpanseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpanseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
