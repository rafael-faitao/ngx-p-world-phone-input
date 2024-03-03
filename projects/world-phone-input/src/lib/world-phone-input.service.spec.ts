import { TestBed } from '@angular/core/testing';

import { WorldPhoneInputService } from './world-phone-input.service';

describe('WorldPhoneInputService', () => {
  let service: WorldPhoneInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldPhoneInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
