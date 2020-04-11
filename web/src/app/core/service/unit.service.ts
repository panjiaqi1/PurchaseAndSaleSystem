import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unit } from '../../common/unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private baseUrl = 'company';

  constructor(private httpClient: HttpClient) {
  }

  /**
   * 保存
   */
  public save(company: Unit): Observable<Unit> {
    return this.httpClient.post<Unit>(this.baseUrl, company);
  }

  /**
   * 更新单位信息
   * @param id  单位id
   * @param company  单位信息
   */
  public update(id: number, company: Unit): Observable<Unit> {
    return this.httpClient.put<Unit>(`${this.baseUrl}/${id}`, company);
  }

  /**
   * 通过id获取单位
   * @param id  单位id
   */
  public getById(id: number): Observable<Unit> {
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
   * 获取所有的类别
   */
  public getAll(): Observable<Array<Unit>> {
    return this.httpClient.get<Array<Unit>>(this.baseUrl);
  }
}
