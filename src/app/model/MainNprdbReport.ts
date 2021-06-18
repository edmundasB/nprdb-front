export class MainNprdbReport {
  constructor(reportId: string, reportName: string) {
    this.reportId = reportId;
    this.reportName = reportName;
  }

  id: number;
  reportId: string;
  reportName: string;
  status: string;
  msg1Delivered: boolean;
  msg2Delivered: boolean;
  msg3Delivered: boolean;
  msg4Delivered: boolean;
  createDateTime: Date;
  updateDateTime: Date;
}
