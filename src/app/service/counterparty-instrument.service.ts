import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CounterpartyInstrument} from '../model/counterpartyInstrument';

@Injectable({
  providedIn: 'root'
})
export class CounterpartyInstrumentService {
  private baseUrl = 'https://nprdb.herokuapp.com//v1/counterparty-instrument';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:ban-types
  createCounterpartyInstrument(data: CounterpartyInstrument): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  // tslint:disable-next-line:ban-types
  updateCounterpartyInstrument(id: string, data: CounterpartyInstrument): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  // tslint:disable-next-line:ban-types
  getCounterpartyInstrument(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}
