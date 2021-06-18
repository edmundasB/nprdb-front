import {Component, Input, OnInit} from '@angular/core';
import {ProtectionReceived} from '../model/protectionReceived';
import {ProtectionReceivedService} from '../service/protection-received.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalConfirm} from '../modal/modal.component';
import {CounterpartyReferenceService} from '../service/counterpartyReference.service';

@Component({
  selector: 'app-protection-received',
  templateUrl: './protection-received.component.html',
  styleUrls: ['./protection-received.component.css']
})
export class ProtectionReceivedComponent implements OnInit {
  @Input() reportId: string;

  protectionReceivedList: ProtectionReceived[];
  submitted = false;
  exists = false;

  constructor(private service: ProtectionReceivedService,
              private modalService: NgbModal,
              private counterpartyReferenceService: CounterpartyReferenceService) {
  }

  // @ts-ignore
  ngOnInit() {
    this.onSpinner();

    this.service.getProtectionReceived(this.reportId)
      .subscribe( data => {
        this.protectionReceivedList = data;
        this.exists = true;
        this.updateData();
        this.offSpinner();
      }, error => {
        this.protectionReceivedList.push(new ProtectionReceived(this.reportId));
        this.offSpinner();
      });
    this.updateData();
  }

  save() {
    this.onSpinner();

    if (this.exists) {
      this.service.updateProtectionReceived(this.reportId, this.protectionReceivedList)
        .subscribe(data => {
          this.protectionReceivedList = data;
          this.offSpinner();
        }, error => {
          console.log(error);
          this.offSpinner();
        });
    } else {
      this.service.createProtectionReceived(this.protectionReceivedList)
        .subscribe(data => {
          this.protectionReceivedList = data;
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

  addOneMore() {
    this.protectionReceivedList.push(new ProtectionReceived(this.reportId));
    this.updateData();
  }

  removeOneMore(itemToRemove: ProtectionReceived) {
    this.protectionReceivedList = this.protectionReceivedList.filter(obj => obj !== itemToRemove);
  }

  updateData() {
    this.counterpartyReferenceService.getCounterpartyReference(this.reportId)
      .subscribe( data => {
        this.protectionReceivedList.forEach( protection => {
          protection.rprtngAgnCd = data.rprtngAgnCd;
          protection.obsrvdAgntCd = data.rprtngAgnCd;
        } );
        console.log('Received data');
      }, error => console.log('error while updating data'));
  }

  onSpinner() {
    document.getElementById("overlay").style.display = "flex";
  }

  offSpinner() {
    document.getElementById("overlay").style.display = "none";
  }
}
