import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CounterpartyDefault} from '../model/counterpartyDefault';

@Injectable({
  providedIn: 'root'
})
export class CounterpartyDefaultService {
  private baseUrl = 'http://35.228.68.66:8081/v1/counterparty-default';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:ban-types
  createCounterpartyDefault(data: CounterpartyDefault): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  // tslint:disable-next-line:ban-types
  updateCounterpartyDefault(id: string, data: CounterpartyDefault): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  // tslint:disable-next-line:ban-types
  getCounterpartyDefault(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}
