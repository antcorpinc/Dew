import { TestBed, inject } from '@angular/core/testing';

import { RolesPermissionDataService } from './roles-permission-data.service';

describe('RolesPermissionDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolesPermissionDataService]
    });
  });

  it('should be created', inject([RolesPermissionDataService], (service: RolesPermissionDataService) => {
    expect(service).toBeTruthy();
  }));
});
