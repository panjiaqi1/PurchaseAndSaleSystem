import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GoodExtendedField } from '../../common/good-extended-field';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class CommentService {

  constructor() {
  }


  page(data: { page: number, size: number }): Observable<GoodExtendedField[]> {
    return null;
  }

  delete(id: number): Observable<void> {
    return null;
  }

  recovery(id: number): Observable<void> {
    return null;
  }

  getById(id: number): Observable<GoodExtendedField> {
    return null;
  }

  update(id: number, comment: GoodExtendedField): Observable<GoodExtendedField> {
    return null;
  }
}
