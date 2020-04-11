import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivatedRouteStubService {

  params = of({});

  set testParams(params: any) {
    this.params = of(params);
  }

  constructor() {
  }
}
