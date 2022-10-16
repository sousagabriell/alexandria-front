import { TestBed } from '@angular/core/testing';

import { GlobalAbstractsService } from './global-abstracts.service';

describe('GlobalAbstractsService', () => {
  let service: GlobalAbstractsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalAbstractsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
