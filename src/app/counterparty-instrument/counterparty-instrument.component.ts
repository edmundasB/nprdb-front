import {Component, Input, OnInit} from '@angular/core';
import {CounterpartyInstrument} from '../model/counterpartyInstrument';
import {CounterpartyInstrumentService} from '../service/counterparty-instrument.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalConfirm} from '../modal/modal.component';
import {CounterpartyReferenceService} from '../service/counterpartyReference.service';
import {InstrumentService} from '../service/instrument.service';

@Component({
  selector: 'app-counterparty-instrument',
  templateUrl: './counterparty-instrument.component.html',
  styleUrls: ['./counterparty-instrument.component.css']
})
export class CounterpartyInstrumentComponent implements OnInit {
  @Input() reportId: string;

  counterpartyInstrument: CounterpartyInstrument = new CounterpartyInstrument(this.reportId);
  submitted = false;
  exists = false;

  constructor(private service: CounterpartyInstrumentService,
              private modalService: NgbModal,
              private counterpartyReferenceService: CounterpartyReferenceService,
              private instrumentService: InstrumentService) {
  }

  ngOnInit() {
    this.onSpinner();
    this.service.getCounterpartyInstrument(this.reportId)
      .subscribe( data => {
        this.counterpartyInstrument = data;
        this.exists = true;
        this.updateData();
        this.offSpinner();
      }, error => {
        this.counterpartyInstrument = new CounterpartyInstrument(this.reportId);
        this.offSpinner();
        this.updateData();
      });
  }

  save() {
    this.onSpinner();
    if (this.exists) {
      this.service.updateCounterpartyInstrument(this.reportId, this.counterpartyInstrument)
        .subscribe(data => {
          this.counterpartyInstrument = data;
          this.offSpinner();
        },  error => {
          console.log(error);
          this.offSpinner();
        });
    } else {
      this.service.createCounterpartyInstrument(this.counterpartyInstrument)
        .subscribe(data => {
          this.counterpartyInstrument = data;
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
        this.counterpartyInstrument.rprtngAgntCd = data.rprtngAgnCd;
        this.counterpartyInstrument.obsrvdAgntCd = data.rprtngAgnCd;
        this.counterpartyInstrument.entityPrdbCd = data.entityPrdbCd;
        console.log('Received data');
        p1 = true;
        this.turnOffIfReceived(p1, p2);
      }, error => {
        console.log('error while updating data');
        p1 = true;
        this.turnOffIfReceived(p1, p2);
      });


    this.instrumentService.getInstrument(this.reportId)
      .subscribe( data => {
        this.counterpartyInstrument.cntrctId = data.cntrctCd;
        this.counterpartyInstrument.instrmntId = data.instrmntId;
        console.log('Received data financial');
        p2 = true;
        this.turnOffIfReceived(p1, p2);
      }, error => {
        console.log('error while updating data');
        p2 = true;
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
