import { TestBed, inject } from '@angular/core/testing';

import { ContractFacilitiesDataResolverService } from './contract-facilities-data-resolver.service';

describe('ContractFacilitiesDataResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContractFacilitiesDataResolverService]
    });
  });

  it('should be created', inject([ContractFacilitiesDataResolverService], (service: ContractFacilitiesDataResolverService) => {
    expect(service).toBeTruthy();
  }));
});
