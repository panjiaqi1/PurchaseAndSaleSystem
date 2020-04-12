import { TestBed } from '@angular/core/testing';

import { ExtendedFieldService } from './extended-field.service';

describe('ExtendedFieldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtendedFieldService = TestBed.get(ExtendedFieldService);
    expect(service).toBeTruthy();
  });
});
