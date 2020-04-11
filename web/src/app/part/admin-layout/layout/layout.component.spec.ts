import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutComponent} from './layout.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HeaderComponent} from '../header/header.component';
import {NavComponent} from '../nav/nav.component';
import {MenuComponent} from '../menu/menu.component';
import { TestModule } from '../../../../../e2e/src/test/test.module';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent, HeaderComponent, NavComponent, MenuComponent],
      imports: [
        RouterTestingModule,
        TestModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
