import {Component, Input, OnInit} from '@angular/core';
import {Financial} from '../model/financial';
import {FinancialService} from '../service/financial.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalConfirm} from '../modal/modal.component';
import {CounterpartyReferenceService} from '../service/counterpartyReference.service';
import {InstrumentService} from '../service/instrument.service';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {
  @Input() reportId: string;

  financial: Financial = new Financial(this.reportId);
  submitted = false;
  exists = false;

  constructor(private service: FinancialService,
              private modalService: NgbModal,
              private counterpartyReferenceService: CounterpartyReferenceService,
              private instrumentService: InstrumentService) {
  }

  ngOnInit() {
    this.onSpinner();
    this.service.getFinancial(this.reportId)
      .subscribe( data => {
        this.financial = data;
        this.exists = true;
        this.updateData();
        this.offSpinner();
      }, error => {
        this.financial = new Financial(this.reportId);
        this.offSpinner();
        this.updateData();
      });
  }

  save() {
    this.onSpinner();
    if (this.exists) {
      this.service.updateFinancial(this.reportId, this.financial)
        .subscribe(data => {
          this.financial = data;
          this.offSpinner();
        }, error => {
          console.log(error);
          this.offSpinner();
        });
    } else {
      this.service.createFinancial(this.financial)
        .subscribe(data => {
          this.financial = data;
          this.exists = true;
          this.offSpinner();
        }, error => {
          console.log(error);
          this.offSpinner();
        } );
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
        this.financial.rprtngAgnCd = data.rprtngAgnCd;
        this.financial.obsrvdAgntCd = data.rprtngAgnCd;
        console.log('Received data financial');
        p2 = true;
        this.turnOffIfReceived(p1, p2);
      }, error => {
        console.log('error while updating data');
        p2 = true;
        this.turnOffIfReceived(p1, p2);
      });

    this.instrumentService.getInstrument(this.reportId)
      .subscribe( data => {
        this.financial.cntrctId = data.cntrctCd;
        this.financial.instrmntId = data.instrmntId;
        this.financial.typScrtstn = data.typScrtstn;
        p1 = true;
        this.turnOffIfReceived(p1, p2);
        console.log('Received data financial');
      }, error => {
        console.log('error while updating data financial');
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
