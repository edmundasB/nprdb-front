export class Financial {
  constructor(reportId: string) {
    this.reportId = reportId;
  }

  id: number;
  reportId: string;
  rprtngAgnCd: string;
  obsrvdAgntCd: string;
  cntrctId: string;
  instrmntId: string;
  dtNxtIntrstRtRst: string;
  appldRt: string;
  trnsfrrdAmnt: string;
  arrrs: string;
  dtPstD: string;
  typScrtstn: string;
  otstndngNmnlAmnt: string;
  typChngOtstndngNmnlAmnt: string;
  amntChngotstndngNmnlAmnt: string;
  offBlncShtAmnt: string;
  finalStatus: string;
}
