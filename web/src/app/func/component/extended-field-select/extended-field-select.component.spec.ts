import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedFieldSelectComponent } from './extended-field-select.component';

describe('ExtendedFieldSelectComponent', () => {
  let component: ExtendedFieldSelectComponent;
  let fixture: ComponentFixture<ExtendedFieldSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedFieldSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedFieldSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
