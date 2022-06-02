import { TestBed } from '@angular/core/testing';

import { IncomeAdapterService } from './income-adapter.service';

describe('IncomeAdapterService', () => {
  let service: IncomeAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomeAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
