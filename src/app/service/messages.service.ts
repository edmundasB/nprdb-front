import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as FileSaver from 'file-saver';


// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private baseUrl = 'https://nprdb.herokuapp.com//v1/download';

  constructor(private http: HttpClient) { }

  // @ts-ignore
  getCounterReferenceDocument(reportId: string, reportName: string): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let url = `${this.baseUrl}/counterparty-reference/${reportId}`;
    this.http.get(url, { responseType: 'blob' })
      .subscribe((resp: any) =>
        FileSaver.saveAs(resp, '1_counterparty_reference' + reportName + '.xml')
      );
  }

  // @ts-ignore
  getAccountingDocument(reportId: string, reportName: string): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let url = `${this.baseUrl}/accounting/${reportId}`;
    this.http.get(url, { responseType: 'blob' })
      .subscribe((resp: any) =>
        FileSaver.saveAs(resp, '4_accounting' + reportName + '.xml')
      );
  }

  // @ts-ignore
  getInstrumentDocument(reportId: string, reportName: string): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let url = `${this.baseUrl}/instrument/${reportId}`;
    this.http.get(url, { responseType: 'blob' })
      .subscribe((resp: any) =>
        FileSaver.saveAs(resp, '3_instrument' + reportName + '.xml')
      );
  }

  // @ts-ignore
  getProtectionDocument(reportId: string, reportName: string): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let url = `${this.baseUrl}/protection/${reportId}`;
    this.http.get(url, { responseType: 'blob' })
      .subscribe((resp: any) =>
        FileSaver.saveAs(resp, '2_protection' + reportName + '.xml')
      );
  }
}
