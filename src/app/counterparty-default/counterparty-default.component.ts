import {Component, Input, OnInit} from '@angular/core';
import {CounterpartyDefault} from '../model/counterpartyDefault';
import {CounterpartyDefaultService} from '../service/counterparty-default.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalConfirm} from '../modal/modal.component';
import {CounterpartyReferenceService} from '../service/counterpartyReference.service';

@Component({
  selector: 'app-counterparty-default',
  templateUrl: './counterparty-default.component.html',
  styleUrls: ['./counterparty-default.component.css']
})
export class CounterpartyDefaultComponent implements OnInit {
  @Input() reportId: string;
  counterpartyDefault: CounterpartyDefault = new CounterpartyDefault(this.reportId);
  submitted = false;
  exists = false;

  constructor(private service: CounterpartyDefaultService,
              private modalService: NgbModal,
              private counterpartyReferenceService: CounterpartyReferenceService) {
  }

  ngOnInit() {
    this.onSpinner();
    this.service.getCounterpartyDefault(this.reportId)
      .subscribe( data => {
        this.counterpartyDefault = data;
        this.exists = true;
        this.updateData();
        this.offSpinner();
        // tslint:disable-next-line:align
      }, error => this.counterpartyDefault = new CounterpartyDefault(this.reportId)); this.offSpinner();
    this.updateData();
  }

  save() {
    this.onSpinner();
    if (this.exists) {
      this.service.updateCounterpartyDefault(this.reportId, this.counterpartyDefault)
        .subscribe(data => { this.counterpartyDefault = data;
          this.offSpinner();
        }, error => console.log(error)); this.offSpinner();
    } else {
      this.service.createCounterpartyDefault(this.counterpartyDefault)
        .subscribe(data => {
          this.offSpinner();
          this.counterpartyDefault = data;
          this.exists = true;
        }, error => console.log(error)); this.offSpinner();
    }
    this.modalService.open(NgbdModalConfirm);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  updateData() {
    this.onSpinner();
    this.counterpartyReferenceService.getCounterpartyReference(this.reportId)
      .subscribe( data => {
        this.counterpartyDefault.rprtngAgnCd = data.rprtngAgnCd;
        this.counterpartyDefault.obsrvdAgntCd = data.rprtngAgnCd;
        this.counterpartyDefault.enttyPrdbCd = data.entityPrdbCd;
        console.log('Received data');
        this.offSpinner();
      }, error => console.log('error while updating data')); this.offSpinner();
  }

  onSpinner() {
    document.getElementById("overlay").style.display = "flex";
  }

  offSpinner() {
    document.getElementById("overlay").style.display = "none";
  }


}
