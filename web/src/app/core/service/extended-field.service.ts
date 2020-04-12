import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExtendedField } from '../../common/extended-field';
import { Page } from '../../base/page';

@Injectable({
  providedIn: 'root'
})
export class ExtendedFieldService {

  private baseUrl = 'extendedField';

  constructor(private httpClient: HttpClient) {
  }

  /**
   * 保存
   */
  public save(extendedField: ExtendedField): Observable<ExtendedField> {
    return this.httpClient.post<ExtendedField>(this.baseUrl, extendedField);
  }

  /**
   * 更新
   */
  public update(id: number, extendedField: ExtendedField): Observable<ExtendedField> {
    return this.httpClient.put<ExtendedField>(`${this.baseUrl}/${id}`, extendedField);
  }

  /**
   * 通过id获取查询
   */
  public findById(id: number): Observable<ExtendedField> {
    return this.httpClient.get<ExtendedField>(`${this.baseUrl}/${id}`);
  }

  /**
   * 删除
   * @param id  单位id
   */
  public deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  /**
   * 获取所有记录
   */
  public getAll(): Observable<Array<ExtendedField>> {
    return this.httpClient.get<Array<ExtendedField>>(this.baseUrl);
  }

  /**
   * 分页
   */
  public page(page: number, size: number): Observable<Page<ExtendedField>> {
    const params: { [key: string]: any } = {
      page: String(page),
      size: String(size)
    };
    return this.httpClient.get<Page<ExtendedField>>(`${this.baseUrl}/page`, {params});
  }
}
