import { TestBed, inject } from '@angular/core/testing';

import { HotelChainResolverService } from './hotel-chain-resolver.service';

describe('HotelChainResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelChainResolverService]
    });
  });

  it('should be created', inject([HotelChainResolverService], (service: HotelChainResolverService) => {
    expect(service).toBeTruthy();
  }));
});
