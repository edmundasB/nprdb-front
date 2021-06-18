import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CounterpartyReferenceData} from '../model/counterpartyReferenceData';
import {HttpClient} from '@angular/common/http';
import {InstrumentProtection} from '../model/instrumentProtection';

@Injectable({
  providedIn: 'root'
})
export class InstrumentProtectionService {
  private baseUrl = 'http://35.228.68.66:8081/v1/instrument-protection';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:ban-types
  createInstrumentProtection(data: InstrumentProtection): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  // tslint:disable-next-line:ban-types
  updateInstrumentProtection(id: string, data: InstrumentProtection): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  // tslint:disable-next-line:ban-types
  getInstrumentProtection(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}
