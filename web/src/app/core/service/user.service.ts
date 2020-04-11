import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../common/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'user';

  constructor(private httpClient: HttpClient) {
  }


  /**
   * 删除用户
   */
  public deleteById(userId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${userId}`);
  }

  /**
   * 通过Id获取用户
   */
  public findById(userId: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/${userId}`);
  }

  /**
   * 新增
   */
  public save(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseUrl}`, user);
  }

  /**
   * 更新
   */
  public update(userId: number, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.baseUrl}/${userId}`, user);
  }

}
