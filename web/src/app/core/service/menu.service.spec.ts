import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';
import { TestModule } from '../../../../e2e/src/test/test.module';

describe('MenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [TestModule]}));

  it('should be created', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service).toBeTruthy();
  });
});
