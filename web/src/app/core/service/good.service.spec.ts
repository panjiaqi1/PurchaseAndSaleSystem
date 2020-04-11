import { TestBed } from '@angular/core/testing';

import { GoodService } from './good.service';
import { TestModule } from '../../../../e2e/src/test/test.module';

describe('CommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [TestModule]}));

  it('should be created', () => {
    const service: GoodService = TestBed.get(GoodService);
    expect(service).toBeTruthy();
  });
});
