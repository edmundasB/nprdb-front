export class Instrument {
  constructor(reportId: string) {
    this.reportId = reportId;
  }
  id: number;
  reportId: string;
  rprtngAgnCd: string;
  obsrvdAgnCd: string;
  cntrctCd: string;
  instrmntId: string;
  typInstrmnt: string;
  typAmrtstn: string;
  iso4217: string;
  dtIncpt: string;
  dtEndIntrstOnly: string;
  intrstRtCp: string;
  intrstRtFlr: string;
  frqncyIntrstRtRst: string;
  intrstRtSprd: string;
  typIntrstRt: string;
  dtLglFnlMtrty: string;
  cmmtmntIncptn: string;
  pymntFrqncy: string;
  prjctFnncLn: string;
  prps: string;
  addInfLoanPrps: string;
  rfrncRtIndx: string;
  rfrncRtMtrt: string;
  dtSttlmnt: string;
  rpymntRghts: string;
  crdPrchId: string;
}
