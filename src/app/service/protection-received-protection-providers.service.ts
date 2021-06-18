import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ProtectionReceivedProtectionProviders} from '../model/protectionReceivedProtectionProviders';

@Injectable({
  providedIn: 'root'
})
export class ProtectionReceivedProtectionProvidersService {
  private baseUrl = 'http://35.228.68.66:8081/v1/protection-received-protection-providers';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:ban-types
  createProtectionReceivedProtectionProviders(data: ProtectionReceivedProtectionProviders): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  // tslint:disable-next-line:ban-types
  updateProtectionReceivedProtectionProviders(id: string, data: ProtectionReceivedProtectionProviders): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  // tslint:disable-next-line:ban-types
  getProtectionReceivedProtectionProviders(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}
