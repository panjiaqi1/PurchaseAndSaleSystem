import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExtendedField } from '../../common/extended-field';

@Injectable({
  providedIn: 'root'
})
export class ExtendedFieldService {
  private baseUrl = 'unit';

  constructor(private httpClient: HttpClient) {
  }

  /**
   * 保存
   */
  public save(extendedField: ExtendedField): Observable<ExtendedField> {
    return this.httpClient.post<ExtendedField>(this.baseUrl, extendedField);
  }

  /**
   * 删除
   */
  public deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  /**
   * 获取所有
   */
  public getAll(): Observable<Array<ExtendedField>> {
    return this.httpClient.get<Array<ExtendedField>>(this.baseUrl);
  }
}
