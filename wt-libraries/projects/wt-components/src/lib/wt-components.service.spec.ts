import { TestBed } from '@angular/core/testing';

import { WtComponentsService } from './wt-components.service';

describe('WtComponentsService', () => {
  let service: WtComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WtComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
