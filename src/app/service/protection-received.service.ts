import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CounterpartyReferenceData} from '../model/counterpartyReferenceData';
import {HttpClient} from '@angular/common/http';
import {ProtectionReceived} from '../model/protectionReceived';

@Injectable({
  providedIn: 'root'
})
export class ProtectionReceivedService {
  private baseUrl = 'https://nprdb.herokuapp.com//v1/protection-received';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:ban-types
  createProtectionReceived(data: ProtectionReceived[]): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  // tslint:disable-next-line:ban-types
  updateProtectionReceived(id: string, data: ProtectionReceived[]): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  // tslint:disable-next-line:ban-types
  getProtectionReceived(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}
