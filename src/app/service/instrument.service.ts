import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Instrument} from '../model/instrument';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  private baseUrl = 'http://35.228.68.66:8081/v1/instrument';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:ban-types
  createInstrument(data: Instrument): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  // tslint:disable-next-line:ban-types
  updateInstrument(id: string, data: Instrument): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  // tslint:disable-next-line:ban-types
  getInstrument(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}
