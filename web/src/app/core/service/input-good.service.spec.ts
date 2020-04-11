import { TestBed } from '@angular/core/testing';

import { InputGoodService } from './input-good.service';

describe('InputGoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputGoodService = TestBed.get(InputGoodService);
    expect(service).toBeTruthy();
  });
});
