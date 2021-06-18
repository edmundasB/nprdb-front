import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MainNprdbReport} from '../model/MainNprdbReport';

@Injectable({
  providedIn: 'root'
})
export class NprdbReportsService {
  private baseUrl = 'http://35.228.68.66:8081/v1/report-main';

  constructor(private http: HttpClient) { }

  createReport(data: MainNprdbReport): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  getReportsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getReportsListByProperty(prop: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/sorted/${prop}`);
  }

  getReport(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
