import {Component, Input, OnInit} from '@angular/core';
import {Instrument} from '../model/instrument';
import {InstrumentService} from '../service/instrument.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalConfirm} from '../modal/modal.component';
import {CounterpartyReferenceService} from '../service/counterpartyReference.service';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent implements OnInit {
  @Input() reportId: string;
  instrument: Instrument = new Instrument(this.reportId);
  submitted = false;
  exists = false;

  constructor(private service: InstrumentService,
              private modalService: NgbModal,
              private counterpartyReferenceService: CounterpartyReferenceService) {
  }

  ngOnInit() {
    this.onSpinner();
    this.service.getInstrument(this.reportId)
      .subscribe( data => {
        this.instrument = data;
        this.exists = true;
        this.updateData();
        this.offSpinner();
      }, error => {
        this.instrument = new Instrument(this.reportId);
        this.offSpinner();
        this.updateData();
      });
  }

  save() {
    this.onSpinner();
    if (this.exists) {
      this.service.updateInstrument(this.reportId, this.instrument)
        .subscribe(data => {
          this.instrument = data;
          this.offSpinner();
        }, error => {
          console.log(error);
          this.offSpinner();
        });
    } else {
      this.service.createInstrument(this.instrument)
        .subscribe(data => {
          this.instrument = data;
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
    this.onSpinner();
    this.counterpartyReferenceService.getCounterpartyReference(this.reportId)
      .subscribe( data => {
        this.instrument.rprtngAgnCd = data.rprtngAgnCd;
        this.instrument.obsrvdAgnCd = data.rprtngAgnCd;
        console.log('Received data');
        this.offSpinner();
      }, error => {
        console.log('error while updating data');
        this.offSpinner();
      });
  }

  onSpinner() {
    document.getElementById('overlay').style.display = 'flex';
  }

  offSpinner() {
    document.getElementById('overlay').style.display = 'none';
  }
}
