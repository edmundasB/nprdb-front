import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CounterpartyReferenceData} from '../model/counterpartyReferenceData';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CounterpartyReferenceService {
  private baseUrl = 'http://35.228.68.66:8081/v1/counterparty-reference';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:ban-types
  createCounterpartyReference(data: CounterpartyReferenceData): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  // tslint:disable-next-line:ban-types
  updateCounterpartyReference(id: string, data: CounterpartyReferenceData): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  // tslint:disable-next-line:ban-types
  getCounterpartyReference(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}
