import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { childauthguardGuard } from './childauthguard.guard';

describe('childauthguardGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => childauthguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
