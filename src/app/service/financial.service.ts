import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Instrument} from '../model/instrument';
import {Financial} from '../model/financial';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {
  private baseUrl = 'http://35.228.68.66:8081/v1/financial';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:ban-types
  createFinancial(data: Financial): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  // tslint:disable-next-line:ban-types
  updateFinancial(id: string, data: Financial): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  // tslint:disable-next-line:ban-types
  getFinancial(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}
