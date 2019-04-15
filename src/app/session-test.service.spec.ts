import { TestBed } from '@angular/core/testing';

import { SessionTestService } from './session-test.service';

describe('SessionTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionTestService = TestBed.get(SessionTestService);
    expect(service).toBeTruthy();
  });
});
