import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CounterpartyReferenceData} from '../model/counterpartyReferenceData';
import {CounterpartyReferenceService} from '../service/counterpartyReference.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalConfirm} from '../modal/modal.component';

@Component({
  selector: 'app-counterparty-reference',
  templateUrl: './counterparty-reference.component.html',
  styleUrls: ['./counterparty-reference.component.css']
})
export class CounterpartyReferenceComponent implements OnInit {
  @Input() reportId: string;
  counterpartyReference: CounterpartyReferenceData = new CounterpartyReferenceData(this.reportId);
  submitted = false;
  exists = false;

  constructor(private service: CounterpartyReferenceService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.onSpinner();
    this.service.getCounterpartyReference(this.reportId)
      .subscribe( data => {
        this.counterpartyReference = data;
        this.exists = true;
        this.offSpinner();
        // tslint:disable-next-line:align
      }, error => this.counterpartyReference = new CounterpartyReferenceData(this.reportId)); this.offSpinner();
  }

  save() {
    this.onSpinner();
    if (this.exists) {
      this.service.updateCounterpartyReference(this.reportId, this.counterpartyReference)
        .subscribe(data => { this.counterpartyReference = data;
                             this.offSpinner();
        }, error => console.log(error)); this.offSpinner();
    } else {
    this.service.createCounterpartyReference(this.counterpartyReference)
      .subscribe(data => {
        this.counterpartyReference = data;
        this.exists = true;
        this.offSpinner();
        // tslint:disable-next-line:align
      }, error => console.log(error)); this.offSpinner();
    }
    this.modalService.open(NgbdModalConfirm);
  }

  onSubmit() {

    this.submitted = true;
    this.save();
  }

   onSpinner() {
    document.getElementById("overlay").style.display = "flex";
  }

   offSpinner() {
    document.getElementById("overlay").style.display = "none";
  }
}
