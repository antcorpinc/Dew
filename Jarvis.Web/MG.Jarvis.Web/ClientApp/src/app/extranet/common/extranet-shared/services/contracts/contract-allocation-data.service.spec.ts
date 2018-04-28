import { TestBed, inject } from '@angular/core/testing';

import { ContractAllocationDataService } from './contract-allocation-data.service';

describe('ContractAllocationDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContractAllocationDataService]
    });
  });

  it('should be created', inject([ContractAllocationDataService], (service: ContractAllocationDataService) => {
    expect(service).toBeTruthy();
  }));
});
