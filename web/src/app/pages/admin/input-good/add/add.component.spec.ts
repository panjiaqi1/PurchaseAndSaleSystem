import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { FuncModule } from '../../../../func/func.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../../../../app.component';
import { TestModule } from '../../../../../../e2e/src/test/test.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddComponent],
      imports: [FuncModule, ReactiveFormsModule, TestModule, RouterTestingModule],
      providers: [AppComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
