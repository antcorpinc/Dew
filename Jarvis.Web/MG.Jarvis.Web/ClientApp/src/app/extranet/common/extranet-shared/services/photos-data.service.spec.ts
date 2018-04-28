import { TestBed, inject } from '@angular/core/testing';

import { PhotosDataService } from './photos-data.service';

describe('PhotosDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotosDataService]
    });
  });

  it('should be created', inject([PhotosDataService], (service: PhotosDataService) => {
    expect(service).toBeTruthy();
  }));
});
