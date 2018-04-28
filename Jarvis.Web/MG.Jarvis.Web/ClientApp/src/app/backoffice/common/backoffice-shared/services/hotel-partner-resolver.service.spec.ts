import { TestBed, inject } from '@angular/core/testing';

import { HotelPartnerResolverService } from './hotel-partner-resolver.service';

describe('HotelPartnerResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelPartnerResolverService]
    });
  });

  it('should be created', inject([HotelPartnerResolverService], (service: HotelPartnerResolverService) => {
    expect(service).toBeTruthy();
  }));
});
