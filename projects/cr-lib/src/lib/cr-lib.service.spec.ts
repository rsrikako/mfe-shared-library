import { TestBed } from '@angular/core/testing';

import { CrLibService } from './cr-lib.service';

describe('CrLibService', () => {
  let service: CrLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
