import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProjectStatus} from '../model/ProjectStatus';

@Injectable({
  providedIn: 'root'
})
export class ProjectStatusService {
  private baseUrl = 'https://nprdb.herokuapp.com//v1/status';

  constructor(private http: HttpClient) {}

  updateProjectStatus(data: ProjectStatus): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }
}
