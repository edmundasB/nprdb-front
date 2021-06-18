import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportListComponent} from './report-list/report-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InstrumentComponent } from './instrument/instrument.component';
import { FinancialComponent } from './financial/financial.component';
import { CounterpartyInstrumentComponent } from './counterparty-instrument/counterparty-instrument.component';
import { JointLiabilitiesComponent } from './joint-liabilities/joint-liabilities.component';
import { AccountingComponent } from './accounting/accounting.component';
import { ProtectionReceivedComponent } from './protection-received/protection-received.component';
import { InstrumentProtectionComponent } from './instrument-protection/instrument-protection.component';
import { CounterpartyDefaultComponent } from './counterparty-default/counterparty-default.component';
// tslint:disable-next-line:max-line-length
import { ProtectionReceivedProtectionProvidersComponent } from './protection-received-protection-providers/protection-received-protection-providers.component';
import { CreateNprdbReportComponent } from './create-nprdb-report/create-nprdb-report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CounterpartyReferenceComponent} from './counterparty-reference/counterparty-reference.component';
import {NgbdModalConfirm} from './modal/modal.component';
import { ProjectStatusBarComponent } from './project-status-bar/project-status-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportListComponent,
    CounterpartyReferenceComponent,
    InstrumentComponent,
    FinancialComponent,
    CounterpartyInstrumentComponent,
    JointLiabilitiesComponent,
    AccountingComponent,
    ProtectionReceivedComponent,
    InstrumentProtectionComponent,
    CounterpartyDefaultComponent,
    ProtectionReceivedProtectionProvidersComponent,
    CreateNprdbReportComponent,
    NgbdModalConfirm,
    ProjectStatusBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModalConfirm]
}) export class AppModule { }
