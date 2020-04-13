import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InOut } from '../../common/in-out';
import { Page } from '../../base/page';
import { Good } from '../../common/good';

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
   * 分页
   */
  public page(page: number, size: number, goodId: number, beInput: boolean): Observable<Page<InOut>> {
    const params: { [key: string]: any } = {
      page: String(page),
      size: String(size)
    };
    params.beInput = beInput;

    if (goodId) {
      params.goodId = goodId;
    }
    return this.httpClient.get<Page<InOut>>(`${this.baseUrl}/page`, {params});
  }
}
