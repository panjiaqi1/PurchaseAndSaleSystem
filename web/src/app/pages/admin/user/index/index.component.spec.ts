import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TestModule } from '../../../../../../e2e/src/test/test.module';
import { FuncModule } from '../../../../func/func.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../../../../app.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndexComponent],
      imports: [RouterTestingModule, TestModule, FuncModule, ReactiveFormsModule],
      providers: [AppComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
