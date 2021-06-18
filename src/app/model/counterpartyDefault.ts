export class CounterpartyDefault {
  constructor(reportId: string) {
    this.reportId = reportId;
  }

  id: number;
  reportId: string;
  rprtngAgnCd: string;
  obsrvdAgntCd: string;
  enttyPrdbCd: string;
  dfltStts: string;
}
