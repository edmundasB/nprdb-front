import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportListComponent } from './report-list/report-list.component';
import { CreateNprdbReportComponent } from './create-nprdb-report/create-nprdb-report.component';


const routes: Routes = [
  { path: '', redirectTo: 'reports', pathMatch: 'full' },
  { path: 'reports', component: ReportListComponent },
  { path: 'add/:id', component: CreateNprdbReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
