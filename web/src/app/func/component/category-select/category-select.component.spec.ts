import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySelectComponent } from './category-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestModule } from '../../../../../e2e/src/test/test.module';

describe('CategorySelectComponent', () => {
  let component: CategorySelectComponent;
  let fixture: ComponentFixture<CategorySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySelectComponent ],
      imports: [ReactiveFormsModule, TestModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
