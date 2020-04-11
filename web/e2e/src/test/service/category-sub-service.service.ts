import { Injectable } from '@angular/core';
import { GoodExtendedField } from '../../../../src/app/common/good-extended-field';
import { randomStringByLength } from '../../../../src/app/core/utils';
import { Category } from '../../../../src/app/common/category';
import { Observable, of } from 'rxjs';
import { Page } from '../../../../src/app/base/page';

@Injectable({
  providedIn: 'root'
})
export class CategorySubServiceService {

  constructor() {
  }

  public save(category: Category): Observable<Category> {
    return of(category);
  }

  public pageByName(queryParams: { page: number, size: number, name?: string }): Observable<Page<Category>> {
    const page = new Page<Category>();
    page.content = [];
    for (let i = 0; i < 10; i++) {
      page.content.push(this.getOneCategory());
    }
    return of(page);
  }

  public update(id: number, category: Category): Observable<Category> {
    return of(category);
  }

  public getById(id: number): Observable<Category> {
    return of(this.getOneCategory());
  }

  public deleteById(id: number): Observable<void> {
    return of();
  }

  public getAll(): Observable<Category[]> {
    const result = [];
    for (let i = 0; i < 10; i++) {
      result.push(this.getOneCategory());
    }
    return of(result);
  }

  getOneCategory(): Category {
    return {
      id: Math.floor(Math.random() * 100),
      name: randomStringByLength(6),
      weight: Math.floor(Math.random() * 100),
      slug: randomStringByLength(6)
    } as Category;
  }
}
