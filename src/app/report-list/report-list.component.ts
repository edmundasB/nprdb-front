import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {NprdbReportsService} from '../service/nprdb-reports.service';
import {MainNprdbReport} from '../model/MainNprdbReport';
import * as uuid from 'uuid';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MessagesService} from '../service/messages.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  reports: Observable<MainNprdbReport[]>;
  STATUSES: string[];
  reportName: string;
  private reportId: string;
  sortProperty = 'pildoma';

  constructor(private reportsService: NprdbReportsService,
              private messagesService: MessagesService,
              private router: Router,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.STATUSES = [
      'Pildoma',
      'Paruošta pateikimui',
      'Teikiama',
      'Pateikta',
      'Naujinama',
      'Atnaujinta',
      'Uždaryta'
    ];
    this.reloadData();
  }

  reloadData() {
    this.reports = this.reportsService.getReportsList();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  createReport() {
    this.reportId = uuid.v4();
    this.reportsService.createReport(new MainNprdbReport(this.reportId, this.reportName))
      .subscribe(data => {
        this.router.navigate(['add', this.reportId]);
      }, error => console.log(error));
    this.modalService.dismissAll();
  }

  editReport(id: string) {
    this.router.navigate(['add', id]);
  }

  downloadCounterReference(reportId: string, reportName: string) {
    this.messagesService.getCounterReferenceDocument(reportId, reportName).subscribe(
      data => this.downloadFile(data)), // console.log(data),
      // tslint:disable-next-line:no-unused-expression
      error => console.log('Error downloading the file.'),
      // tslint:disable-next-line:no-unused-expression no-console
      () => console.info('OK');
  }

  downloadccounting(reportId: string, reportName: string) {
    this.messagesService.getAccountingDocument(reportId, reportName).subscribe(
      data => this.downloadFile(data)), // console.log(data),
      // tslint:disable-next-line:no-unused-expression
      error => console.log('Error downloading the file.'),
      // tslint:disable-next-line:no-unused-expression no-console
      () => console.info('OK');
  }

  downloadgetInstrumentDocument(reportId: string, reportName: string) {
    this.messagesService.getInstrumentDocument(reportId, reportName).subscribe(
      data => this.downloadFile(data)), // console.log(data),
      // tslint:disable-next-line:no-unused-expression
      error => console.log('Error downloading the file.'),
      // tslint:disable-next-line:no-unused-expression no-console
      () => console.info('OK');
  }

  downloadgetProtectionDocument(reportId: string, reportName: string) {
    this.messagesService.getProtectionDocument(reportId, reportName).subscribe(
      data => this.downloadFile(data)), // console.log(data),
      // tslint:disable-next-line:no-unused-expression
      error => console.log('Error downloading the file.'),
      // tslint:disable-next-line:no-unused-expression no-console
      () => console.info('OK');
  }

  downloadFile(data: Response) {
    // @ts-ignore
    const blob = new Blob([data], {type: 'application/octet-stream'});
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }

  sort() {
    this.reports = this.reportsService.getReportsListByProperty(this.sortProperty);
  }

}
