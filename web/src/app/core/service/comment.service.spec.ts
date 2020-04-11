import { TestBed } from '@angular/core/testing';

import { CommentService } from './comment.service';
import { TestModule } from '../../../../e2e/src/test/test.module';

describe('CommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [TestModule]}));

  it('should be created', () => {
    const service: CommentService = TestBed.get(CommentService);
    expect(service).toBeTruthy();
  });
});
