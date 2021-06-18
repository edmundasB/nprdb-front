import {ApplicationRef, Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProjectStatusService} from '../service/project-status.service';
import {ProjectStatus} from '../model/ProjectStatus';
import {MainNprdbReport} from '../model/MainNprdbReport';

@Component({
  selector: 'app-project-status-bar',
  templateUrl: './project-status-bar.component.html',
  styleUrls: ['./project-status-bar.component.css']
})
export class ProjectStatusBarComponent implements OnInit {
  @Input() report: MainNprdbReport;
  STATUSES: string[];
  selectedStatus: string;
  selectedStatusForUpdate: string;
  uniqueCode: string;
  closer = false;
  projectStatus = new ProjectStatus('this.reportId');
  private codeIt = '1282';
  private codeSales = '2812';

  constructor(private modalService: NgbModal,
              private appRef: ApplicationRef,
              private statusService: ProjectStatusService) {
  }

  ngOnInit() {
    this.STATUSES =  [
      'Pildoma',
      'Paruošta pateikimui',
      'Teikiama',
      'Pateikta',
      'Naujinama',
      'Atnaujinta',
      'Uždaryta'
    ];
    this.selectedStatus = this.report.status;
    this.selectedStatusForUpdate = this.report.status;
  }

  getColor() {
    const colors = {
      'pildoma': this.selectedStatus === this.STATUSES[0],
      'paruosta_pateikimui': this.selectedStatus === this.STATUSES[1],
      'teikiama': this.selectedStatus === this.STATUSES[2],
      'pateikta': this.selectedStatus === this.STATUSES[3],
      'naujinama': this.selectedStatus === this.STATUSES[4],
      'atnaujinta': this.selectedStatus === this.STATUSES[5],
      'uzdaryta': this.selectedStatus === this.STATUSES[6],
    };
    return colors;
  }

  updateStatus() {
    console.log(this.selectedStatusForUpdate);
    this.closer = false;
    if (this.uniqueCode === this.codeIt || this.uniqueCode === this.codeSales) {
      this.projectStatus.reportId = this.report.reportId;
      this.projectStatus.status = this.selectedStatusForUpdate;
      this.projectStatus.validationCode = this.uniqueCode;
      this.statusService.updateProjectStatus(this.projectStatus)
        .subscribe(data => console.log(data));
      this.selectedStatus = this.selectedStatusForUpdate;
    } else {
      this.closer = true;
    }
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.appRef.tick();
  }
}
