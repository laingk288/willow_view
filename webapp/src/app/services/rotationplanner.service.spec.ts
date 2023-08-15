import { TestBed } from '@angular/core/testing';

import { RotationplannerService } from './rotationplanner.service';

describe('RotationplannerService', () => {
  let service: RotationplannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RotationplannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
