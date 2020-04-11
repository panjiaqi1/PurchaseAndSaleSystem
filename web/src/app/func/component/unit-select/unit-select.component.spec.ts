import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitSelectComponent } from './unit-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestModule } from '../../../../../e2e/src/test/test.module';

describe('CategorySelectComponent', () => {
  let component: UnitSelectComponent;
  let fixture: ComponentFixture<UnitSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitSelectComponent ],
      imports: [ReactiveFormsModule, TestModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
