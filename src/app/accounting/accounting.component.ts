import {Component, Input, OnInit} from '@angular/core';
import {Accounting} from '../model/accounting';
import {AccountingService} from '../service/accounting.service';
import {NgbdModalConfirm} from '../modal/modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CounterpartyReferenceService} from '../service/counterpartyReference.service';
import {InstrumentService} from '../service/instrument.service';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent implements OnInit {

  constructor(private service: AccountingService,
              private modalService: NgbModal,
              private counterpartyReferenceService: CounterpartyReferenceService,
              private instrumentService: InstrumentService) {
  }
  @Input() reportId: string;
  accounting: Accounting = new Accounting(this.reportId);
  submitted = false;
  exists = false;

  ngOnInit() {
    this.onSpinner();
    this.service.getAccounting(this.reportId)
      .subscribe( data => {
        this.accounting = data;
        this.exists = true;
        this.updateData();
        this.offSpinner();
      }, error => this.accounting = new Accounting(this.reportId));
    this.offSpinner();
    this.updateData();
  }

  save() {
    this.onSpinner();
    if (this.exists) {
      this.service.updateAccounting(this.reportId, this.accounting)
        .subscribe(data => { this.accounting = data;
                             this.offSpinner();
          // tslint:disable-next-line:align
        }, error => console.log(error)); this.offSpinner();
    } else {
      this.service.createAccounting(this.accounting)
        .subscribe(data => {
          this.accounting = data;
          this.exists = true;
          this.offSpinner();
        }, error => console.log(error));
      this.offSpinner();
    }
    this.modalService.open(NgbdModalConfirm);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  updateData() {
    let counterpartyReferenceReceived = false;
    let instrumentReceived = false;

    this.onSpinner();
    this.counterpartyReferenceService.getCounterpartyReference(this.reportId)
      .subscribe( data => {
        this.accounting.rprtngAgnCd = data.rprtngAgnCd;
        this.accounting.obsrvAgntCd = data.rprtngAgnCd;
        this.accounting.entityPrdbCd = data.entityPrdbCd;
        counterpartyReferenceReceived = true;
        this.turnOffIfReceived(counterpartyReferenceReceived, instrumentReceived);

        console.log('Received data');
        // tslint:disable-next-line:align max-line-length
      }, error => console.log('error while updating data')); instrumentReceived = true; this.turnOffIfReceived(counterpartyReferenceReceived, instrumentReceived);

    this.instrumentService.getInstrument(this.reportId)
      .subscribe( data => {
        this.accounting.cntrctId = data.cntrctCd;
        this.accounting.instrmntId = data.instrmntId;
        instrumentReceived = true;
        this.turnOffIfReceived(counterpartyReferenceReceived, instrumentReceived);
        console.log('Received data financial');
        // tslint:disable-next-line:align max-line-length
      }, error => console.log('error while updating data financial' )); instrumentReceived = true; this.turnOffIfReceived(counterpartyReferenceReceived, instrumentReceived);
  }

  private turnOffIfReceived(cr: boolean, ir: boolean) {
    if (cr && ir) { this.offSpinner(); }
  }

  onSpinner() {
    document.getElementById('overlay').style.display = 'flex';
  }

  offSpinner() {
    document.getElementById('overlay').style.display = 'none';
  }

}
