import { TestBed, inject } from '@angular/core/testing';

import { ContractFacilitiesDataServiceService } from './contract-facilities-data-service.service';

describe('ContractFacilitiesDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContractFacilitiesDataServiceService]
    });
  });

  it('should be created', inject([ContractFacilitiesDataServiceService], (service: ContractFacilitiesDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
