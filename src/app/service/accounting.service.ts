import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Accounting} from '../model/accounting';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {
  private baseUrl = 'http://35.228.68.66:8081/v1/accounting';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:ban-types
  createAccounting(data: Accounting): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  // tslint:disable-next-line:ban-types
  updateAccounting(id: string, data: Accounting): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  // tslint:disable-next-line:ban-types
  getAccounting(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}
