import { TestBed } from '@angular/core/testing';

import { CommmunicationService } from './commmunication.service';

describe('CommmunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommmunicationService = TestBed.get(CommmunicationService);
    expect(service).toBeTruthy();
  });
});
