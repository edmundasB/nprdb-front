import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-confirm',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Patvirtinimas</h4>
      <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Duomenys išsaugoti sėkmingai
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-success" (click)="modal.close('Ok click')">Ok</button>
    </div>
  `
})
// tslint:disable-next-line:component-class-suffix
export class NgbdModalConfirm {
  constructor(public modal: NgbActiveModal) {}
}
