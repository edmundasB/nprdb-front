import {Component, Input, OnInit} from '@angular/core';
import {JointLiabilities} from '../model/jointLiabilities';
import {JointLiabilitiesService} from '../service/joint-liabilities.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalConfirm} from '../modal/modal.component';
import {CounterpartyReferenceService} from '../service/counterpartyReference.service';
import {InstrumentService} from '../service/instrument.service';

@Component({
  selector: 'app-joint-liabilities',
  templateUrl: './joint-liabilities.component.html',
  styleUrls: ['./joint-liabilities.component.css']
})
export class JointLiabilitiesComponent implements OnInit {
  @Input() reportId: string;
  jointLiabilities: JointLiabilities = new JointLiabilities(this.reportId);

  submitted = false;
  exists = false;

  constructor(private service: JointLiabilitiesService,
              private modalService: NgbModal,
              private counterpartyReferenceService: CounterpartyReferenceService,
              private instrumentService: InstrumentService) {
  }

  ngOnInit() {
    this.onSpinner();
    this.service.getJointLiabilities(this.reportId)
      .subscribe( data => {
        this.jointLiabilities = data;
        this.exists = true;
        this.updateData();
        this.offSpinner();
      }, error => {
        this.jointLiabilities = new JointLiabilities(this.reportId);
        this.offSpinner();
      });
    this.updateData();
  }

  save() {
    this.onSpinner();

    if (this.exists) {
      this.service.updateJointLiabilities(this.reportId, this.jointLiabilities)
        .subscribe(data => {
          this.jointLiabilities = data;
          this.offSpinner();
        }, error => {
          console.log(error);
          this.offSpinner();
        });
    } else {
      this.service.createJointLiabilities(this.jointLiabilities)
        .subscribe(data => {
          this.jointLiabilities = data;
          this.exists = true;
          this.offSpinner();
        }, error => {
          console.log(error);
          this.offSpinner();
        });
    }
    this.modalService.open(NgbdModalConfirm);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  updateData() {
    let p1 = false;
    let p2 = false;
    this.onSpinner();

    this.counterpartyReferenceService.getCounterpartyReference(this.reportId)
      .subscribe( data => {
        this.jointLiabilities.rprtngAgnCd = data.rprtngAgnCd;
        this.jointLiabilities.obsrvdAgntCd = data.rprtngAgnCd;
        this.jointLiabilities.enttyPrdbCd = data.entityPrdbCd;
        console.log('Received data');
        p2 = true;
        this.turnOffIfReceived(p1, p2);
      }, error => {
        console.log('error while updating data');
        p2 = true;
        this.turnOffIfReceived(p1, p2);
      });

    this.instrumentService.getInstrument(this.reportId)
      .subscribe( data => {
        this.jointLiabilities.cntrctId = data.cntrctCd;
        this.jointLiabilities.instrmntId = data.instrmntId;
        console.log('Received data financial');
        p1 = true;
        this.turnOffIfReceived(p1, p2);
        console.log('Received data financial');
      }, error => {
        console.log('error while updating data');
        p1 = true;
        this.turnOffIfReceived(p1, p2);
      });
  }

  onSpinner() {
    document.getElementById('overlay').style.display = 'flex';
  }

  offSpinner() {
    document.getElementById('overlay').style.display = 'none';
  }

  private turnOffIfReceived(cr: boolean, ir: boolean) {
    if (cr && ir) { this.offSpinner(); }
  }

}
