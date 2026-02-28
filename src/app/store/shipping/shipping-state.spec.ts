import { TestBed } from '@angular/core/testing';

import { ShippingState } from './shipping-state';

describe('ShippingState', () => {
  let service: ShippingState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippingState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
