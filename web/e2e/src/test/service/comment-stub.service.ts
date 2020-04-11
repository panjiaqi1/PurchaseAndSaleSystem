import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GoodExtendedField } from '../../../../src/app/common/good-extended-field';
import { randomStringByLength } from '../../../../src/app/core/utils';

@Injectable({
  providedIn: 'root'
})
export class CommentStubService {

  constructor() {
  }

  page(data: { page: number, size: number }): Observable<GoodExtendedField[]> {
    const result = [];
    for (let i = 0; i < data.size; i++) {
      result.push(this.getOneComment());
    }
    return of(result);
  }

  delete(id: number) {
    return of(null);
  }

  recovery(id: number) {
    return of(null);
  }

  getById(id: number): Observable<GoodExtendedField> {
    return of(this.getOneComment());
  }

  update(id: number, comment: GoodExtendedField): Observable<GoodExtendedField> {
    return of(this.getOneComment());
  }

  getOneComment(): GoodExtendedField {
    return {
      id: 1,
      text: randomStringByLength(100),
      number: Math.floor(Math.random() * 100),
      commentTime: new Date().toDateString(),
      user: {username: randomStringByLength(5), email: randomStringByLength(6)}
    } as GoodExtendedField;
  }
}
