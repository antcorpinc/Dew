import { TestBed, inject } from '@angular/core/testing';

import { AgencyResolverService } from './agency-resolver.service';

describe('AgencyResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgencyResolverService]
    });
  });

  it('should be created', inject([AgencyResolverService], (service: AgencyResolverService) => {
    expect(service).toBeTruthy();
  }));
});
