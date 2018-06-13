import { TestBed, inject } from '@angular/core/testing';

import { FirbasedataService } from './firbasedata.service';

describe('FirbasedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirbasedataService]
    });
  });

  it('should be created', inject([FirbasedataService], (service: FirbasedataService) => {
    expect(service).toBeTruthy();
  }));
});
