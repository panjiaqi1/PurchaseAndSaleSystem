import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Menu } from '../../common/menu';

@Injectable({
  providedIn: CoreModule
})
export class MenuService {

  private menusSubject = new BehaviorSubject<Array<Menu>>([
    new Menu({name: '首页', url: '/dashboard', roles: [Menu.ROLE_ADMIN, Menu.ROLE_INPUT_PRODUCT]}),
    new Menu({name: '进货管理', url: '/inputCargo', roles: [Menu.ROLE_ADMIN]}),
    new Menu({name: '货物管理', url: '/product', roles: [Menu.ROLE_ADMIN]}),
    new Menu({name: '单位管理', url: '/unit', roles: [Menu.ROLE_ADMIN]}),
    new Menu({name: '用户管理', url: '/user', roles: [Menu.ROLE_ADMIN]}),
  ]);

  constructor() {
  }

  getAll(): Observable<Array<Menu>> {
    return this.menusSubject.asObservable();
  }

  addMenu(menu: Menu) {
    const menus = this.menusSubject.value;
    menus.push(menu);
    this.menusSubject.next(menus);
  }
}
