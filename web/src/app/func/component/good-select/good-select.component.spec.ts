import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodSelectComponent } from './good-select.component';

describe('GoodSelectComponent', () => {
  let component: GoodSelectComponent;
  let fixture: ComponentFixture<GoodSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
