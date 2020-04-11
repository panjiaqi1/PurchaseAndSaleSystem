import { Injectable } from '@angular/core';
import { Menu } from '../../../../src/app/common/menu';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuStubServiceService {

  constructor() {
  }

  getAll(): Observable<Menu[]> {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(this.getOneMenu());
    }
    return of(result);
  }

  getOneMenu(): Menu {
    return {name: 'testName', url: 'testUrl', weight: 0, id: 0} as Menu;
  }
}
