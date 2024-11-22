import { TestBed } from '@angular/core/testing';

import { WtLoadersService } from './wt-loaders.service';

describe('WtLoadersService', () => {
  let service: WtLoadersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WtLoadersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
