export class Accounting {
  constructor(reportId: string) {
    this.reportId = reportId;
  }

  id: number;
  reportId: string;
  rprtngAgnCd: string;
  obsrvAgntCd: string;
  entityPrdbCd: string;
  cntrctId: string;
  instrmntId: string;
  accmltdWrtffsPrncpl: string;
  accmltdWrtffsIntrst: string;
  frbrncStts: string;
}
