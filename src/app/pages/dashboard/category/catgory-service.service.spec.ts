import { TestBed } from '@angular/core/testing';

import { CatgoryServiceService } from './category-service.service';

describe('CatgoryServiceService', () => {
  let service: CatgoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatgoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
