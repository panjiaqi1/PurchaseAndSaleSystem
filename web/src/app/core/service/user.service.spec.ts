import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { TestModule } from '../../../../e2e/src/test/test.module';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [TestModule]}));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
