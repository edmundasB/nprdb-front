import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CounterpartyReferenceService} from '../service/counterpartyReference.service';
import {NprdbReportsService} from '../service/nprdb-reports.service';

@Component({
  selector: 'app-create-nprdb-report',
  templateUrl: './create-nprdb-report.component.html',
  styleUrls: ['./create-nprdb-report.component.css']
})
export class CreateNprdbReportComponent implements OnInit {
  @Input() reportId: string;
  reportName = '';


  constructor(private route: ActivatedRoute,
              private counterpartyReferenceService: CounterpartyReferenceService,
              private reportsService: NprdbReportsService) { }

  ngOnInit() {
    this.reportId = this.route.snapshot.params.id;
    this.reportsService.getReport(this.reportId).subscribe( data => {
      this.reportName = data.reportName;
    }, error => console.log('error while fetching report'));
  }

}
