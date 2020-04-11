import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Good } from '../../common/good';
import { Observable } from 'rxjs';
import { InOut } from '../../common/in-out';
import { Unit } from '../../common/unit';

@Injectable({
  providedIn: 'root'
})
export class InputGoodService {

  private baseUrl = 'inOut';

  constructor(private httpClient: HttpClient) {
  }

  /**
   * 保存(入库）
   */
  public save(inOut: InOut): Observable<InOut> {
    return this.httpClient.post<InOut>(this.baseUrl, inOut);
  }

  /**
   * 获取所有进货信息
   */
  public getAll(): Observable<Array<InOut>> {
    return this.httpClient.get<Array<InOut>>(this.baseUrl);
  }

  /**
   * 通过货物获取所有进货记录
   */
  public findAllByGoodId(goodId: number): Observable<Array<InOut>> {
    const params: { [key: string]: any } = {};
    if (goodId) {
      params.goodId = goodId;
    }

    return this.httpClient.get<Array<InOut>>(`${this.baseUrl}/query`, {params});
  }
}
