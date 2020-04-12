import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../../base/page';
import { GoodExtendedField } from '../../common/good-extended-field';

@Injectable({
  providedIn: 'root'
})
export class GoodExtendedFieldService {

  private baseUrl = 'goodExtendedField';

  constructor(private httpClient: HttpClient) {
  }

  /**
   * 保存
   */
  public save(goodExtendedField: GoodExtendedField): Observable<GoodExtendedField> {
    return this.httpClient.post<GoodExtendedField>(this.baseUrl, goodExtendedField);
  }

  /**
   * 更新
   */
  public update(id: number, goodExtendedField: GoodExtendedField): Observable<GoodExtendedField> {
    return this.httpClient.put<GoodExtendedField>(`${this.baseUrl}/${id}`, goodExtendedField);
  }

  /**
   * 通过id获取查询
   */
  public findById(id: number): Observable<GoodExtendedField> {
    return this.httpClient.get<GoodExtendedField>(`${this.baseUrl}/${id}`);
  }

  /**
   * 删除
   * @param id  单位id
   */
  public deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  /**
   * 分页
   */
  public page(page: number, size: number): Observable<Page<GoodExtendedField>> {
    const params: { [key: string]: any } = {
      page: String(page),
      size: String(size)
    };
    return this.httpClient.get<Page<GoodExtendedField>>(`${this.baseUrl}/page`, {params});
  }
}
