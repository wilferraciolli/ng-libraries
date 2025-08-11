import { TestBed } from '@angular/core/testing';

import { WtGraphsService } from './wt-graphs.service';

describe('WtGraphsService', () => {
  let service: WtGraphsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WtGraphsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
