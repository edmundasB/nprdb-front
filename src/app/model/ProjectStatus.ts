export class ProjectStatus {
  constructor(reportId: string) {
    this.reportId = reportId;
  }
  reportId: string;
  status: string;
  validationCode: string;
}
