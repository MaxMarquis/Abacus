import { TestBed } from '@angular/core/testing';

import { CanonicApiService } from './canonic-api.service';

describe('CanonicApiService', () => {
  let service: CanonicApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanonicApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
