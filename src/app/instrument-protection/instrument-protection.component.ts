import {Component, Input, OnInit} from '@angular/core';
import {InstrumentProtection} from '../model/instrumentProtection';
import {InstrumentProtectionService} from '../service/instrument-protection.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalConfirm} from '../modal/modal.component';
import {CounterpartyReferenceService} from '../service/counterpartyReference.service';
import {InstrumentService} from '../service/instrument.service';

@Component({
  selector: 'app-instrument-protection',
  templateUrl: './instrument-protection.component.html',
  styleUrls: ['./instrument-protection.component.css']
})
export class InstrumentProtectionComponent implements OnInit {
  @Input() reportId: string;

  instrumentProtection: InstrumentProtection = new InstrumentProtection(this.reportId);
  submitted = false;
  exists = false;

  constructor(private service: InstrumentProtectionService,
              private modalService: NgbModal,
              private counterpartyReferenceService: CounterpartyReferenceService,
              private instrumentService: InstrumentService) {
  }

  ngOnInit() {
    this.onSpinner();
    this.service.getInstrumentProtection(this.reportId)
      .subscribe( data => {
        this.instrumentProtection = data;
        this.exists = true;
        this.updateData();
        this.offSpinner();
      }, error => {
        this.instrumentProtection = new InstrumentProtection(this.reportId);
        this.offSpinner();
      });
    this.updateData();
  }

  save() {
    this.onSpinner();
    if (this.exists) {
      this.service.updateInstrumentProtection(this.reportId, this.instrumentProtection)
        .subscribe(data => {
          this.instrumentProtection = data;
          this.offSpinner();
        }, error => {
          console.log(error);
          this.offSpinner(); } );
    } else {
      this.service.createInstrumentProtection(this.instrumentProtection)
        .subscribe(data => {
          this.instrumentProtection = data;
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
        this.instrumentProtection.rprtngAgnCd = data.rprtngAgnCd;
        this.instrumentProtection.obsrvdAgntCd = data.rprtngAgnCd;
        console.log('Received data');
        p2 = true;
        this.turnOffIfReceived(p1, p2);
      }, error => {
        console.log('error while updating data');
        p1 = true;
        this.turnOffIfReceived(p1, p2);
      });

    this.instrumentService.getInstrument(this.reportId)
      .subscribe( data => {
        this.instrumentProtection.cntrctId = data.cntrctCd;
        this.instrumentProtection.instrmntId = data.instrmntId;
        console.log('Received data financial');
        p1 = true;
        this.turnOffIfReceived(p1, p2);
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
