import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreModule } from '../core.module';
import { HttpClient } from '@angular/common/http';
import { Good } from '../../common/good';

@Injectable({
  providedIn: CoreModule
})
export class GoodService {

  private baseUrl = 'good';

  constructor(private httpClient: HttpClient) {
  }

  /**
   * 保存
   */
  public save(good: Good): Observable<Good> {
    return this.httpClient.post<Good>(this.baseUrl, good);
  }

  /**
   * 获取所有货物
   */
  public getAll(): Observable<Array<Good>> {
    return this.httpClient.get<Array<Good>>(this.baseUrl);
  }

  /**
   * 更新货物信息
   * @param id  货物id
   * @param good  货物信息
   */
  public update(id: number, good: Good): Observable<Good> {
    return this.httpClient.put<Good>(`${this.baseUrl}/${id}`, good);
  }

  /**
   * 通过id获取货物
   * @param id  货物id
   */
  public findById(id: number): Observable<Good> {
    return this.httpClient.get<Good>(`${this.baseUrl}/${id}`);
  }

  /**
   * 删除
   * @param id  货物id
   */
  public deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }


}
