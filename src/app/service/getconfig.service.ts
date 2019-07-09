import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetconfigService {

  constructor(
    private http: HttpClient
  ) { }
  get(api: string, params?: any) {
    const httpOptions = {
      params
    };
    return this.http.get(api, httpOptions)
  }
  post(api: string, payload?: any) {
    return this.http.post(api, payload)
  }

  getString() {
    return 'abc'
  }
}
