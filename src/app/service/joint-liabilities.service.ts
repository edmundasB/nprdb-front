import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {JointLiabilities} from '../model/jointLiabilities';

@Injectable({
  providedIn: 'root'
})
export class JointLiabilitiesService {
  private baseUrl = 'http://35.228.68.66:8081/v1/joint-liabilities';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:ban-types
  createJointLiabilities(data: JointLiabilities): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  // tslint:disable-next-line:ban-types
  updateJointLiabilities(id: string, data: JointLiabilities): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  // tslint:disable-next-line:ban-types
  getJointLiabilities(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}
