export class JointLiabilities {
  constructor(reportId: string) {
    this.reportId = reportId;
  }

  id: number;
  reportId: string;
  rprtngAgnCd: string;
  obsrvdAgntCd: string;
  enttyPrdbCd: string;
  cntrctId: string;
  instrmntId: string;
  jntLbltyAmnt: string;
}
