import { TestBed } from '@angular/core/testing';

import { ExpanseAdapterService } from './expanse-adapter.service';

describe('ExpanseAdapterService', () => {
  let service: ExpanseAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpanseAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
