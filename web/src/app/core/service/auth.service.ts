import { Injectable } from '@angular/core';
import { User } from '../../common/user';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppOnReadyItem, CommonService } from './common.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentLoginUser: User;

  private currentLoginUserSubject = new ReplaySubject<User>(1);

  public currentLoginUser$: Observable<User>;

  private url = 'auth';

  constructor(private commonService: CommonService,
              private httpClient: HttpClient) {
    this.currentLoginUser$ = this.currentLoginUserSubject.asObservable();
    this.getCurrentLoginUser();
  }

  private getCurrentLoginUser() {
    const appOnReadyItem = new AppOnReadyItem();
    this.commonService.addAppOnReadyItem(appOnReadyItem);

    this.httpClient.get<User>(`${this.url}/user`)
      .subscribe(user => {
        this.setCurrentLoginUser(user);
      }, () => {
        this.setCurrentLoginUser(null);
      }, () => {
        // 准备完完毕
        appOnReadyItem.ready = true;
      });
  }

  /**
   * 获取登录用户时，应该结合appOnReady。示例：
   * this.commonService.appOnReady(() => {const user = this.userService.getCurrentUser();});
   */
  getCurrentUser(): User | null {
    return this.currentLoginUser;
  }

  login(user: User): Observable<User> {
    // 新建Headers，并添加认证信息
    let headers = new HttpHeaders();
    // 添加 content-type
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // 添加认证信息
    headers = headers.append('Authorization', 'Basic ' + btoa(user.username + ':' + encodeURIComponent(user.password)));
    // 发起get请求并返回
    return this.httpClient.get<User>(this.url + '/login', {headers}).pipe(tap((data) => {
      this.setCurrentLoginUser(data);
    }));
  }

  logout(): Observable<void> {
    return this.httpClient.get<void>(`${this.url}/logout`).pipe(map(() => {
      this.setCurrentLoginUser(null);
    }));
  }

  /**
   * 设置当前登录用户
   * @param user 登录用户
   */
  setCurrentLoginUser(user: User): void {
    this.currentLoginUser = user;
    this.currentLoginUserSubject.next(user);
  }
}
