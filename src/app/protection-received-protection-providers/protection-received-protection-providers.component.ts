import {Component, Input, OnInit} from '@angular/core';
import {ProtectionReceivedProtectionProviders} from '../model/protectionReceivedProtectionProviders';
import {ProtectionReceivedProtectionProvidersService} from '../service/protection-received-protection-providers.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalConfirm} from '../modal/modal.component';
import {CounterpartyReferenceService} from '../service/counterpartyReference.service';

@Component({
  selector: 'app-protection-received-protection-providers',
  templateUrl: './protection-received-protection-providers.component.html',
  styleUrls: ['./protection-received-protection-providers.component.css']
})
export class ProtectionReceivedProtectionProvidersComponent implements OnInit {
  @Input() reportId: string;

  protectionReceivedProtectionProviders: ProtectionReceivedProtectionProviders = new ProtectionReceivedProtectionProviders(this.reportId);
  submitted = false;
  exists = false;

  constructor(private service: ProtectionReceivedProtectionProvidersService,
              private modalService: NgbModal,
              private counterpartyReferenceService: CounterpartyReferenceService) {
  }

  ngOnInit() {
    this.onSpinner();

    this.service.getProtectionReceivedProtectionProviders(this.reportId)
      .subscribe( data => {
        this.protectionReceivedProtectionProviders = data;
        this.exists = true;
        this.updateData();
        this.offSpinner();
      }, error =>  {
        this.createNew();
        this.offSpinner();
      });
  }

  createNew() {
    this.protectionReceivedProtectionProviders = new ProtectionReceivedProtectionProviders(this.reportId);
    this.updateData();
  }

  save() {
    this.onSpinner();

    if (this.exists) {
      this.service.updateProtectionReceivedProtectionProviders(this.reportId, this.protectionReceivedProtectionProviders)
        .subscribe(data => {
          this.protectionReceivedProtectionProviders = data;
          this.offSpinner();
          }, error => {
          console.log(error);
          this.offSpinner();
        });
    } else {
      this.service.createProtectionReceivedProtectionProviders(this.protectionReceivedProtectionProviders)
        .subscribe(data => {
          this.protectionReceivedProtectionProviders = data;
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
        this.protectionReceivedProtectionProviders.rprtngAgnCd = data.rprtngAgnCd;
        this.protectionReceivedProtectionProviders.obsrvdAgntCd = data.rprtngAgnCd;
        console.log('Received data');
        this.offSpinner();
      }, error => {
        console.log('error while updating data');
        this.offSpinner();
      });
  }

  onSpinner() {
    document.getElementById('overlay').style.display = "flex";
  }

  offSpinner() {
    document.getElementById('overlay').style.display = "none";
  }

}
