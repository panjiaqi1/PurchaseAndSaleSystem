import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unit } from '../../common/unit';
import { Page } from '../../base/page';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private baseUrl = 'unit';

  constructor(private httpClient: HttpClient) {
  }

  /**
   * 保存
   */
  public save(unit: Unit): Observable<Unit> {
    return this.httpClient.post<Unit>(this.baseUrl, unit);
  }

  /**
   * 更新单位信息
   * @param id  单位id
   * @param unit  单位信息
   */
  public update(id: number, unit: Unit): Observable<Unit> {
    return this.httpClient.put<Unit>(`${this.baseUrl}/${id}`, unit);
  }

  /**
   * 通过id获取单位
   * @param id  单位id
   */
  public findById(id: number): Observable<Unit> {
    return this.httpClient.get<Unit>(`${this.baseUrl}/${id}`);
  }

  /**
   * 删除
   * @param id  单位id
   */
  public deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  /**
   * 获取所有单位
   */
  public getAll(): Observable<Array<Unit>> {
    return this.httpClient.get<Array<Unit>>(this.baseUrl);
  }

  /**
   * 分页
   */
  public page(page: number, size: number): Observable<Page<Unit>> {
    const params: { [key: string]: any } = {
      page: String(page),
      size: String(size)
    };
    return this.httpClient.get<Page<Unit>>(`${this.baseUrl}/page`, {params});
  }
}
