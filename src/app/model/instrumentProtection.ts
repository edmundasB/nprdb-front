export class InstrumentProtection {
  constructor(reportId: string) {
    this.reportId = reportId;
  }

  id: number;
  reportId: string;
  rprtngAgnCd: string;
  obsrvdAgntCd: string;
  cntrctId: string;
  instrmntId: string;
  prtctnId: string;
  prtctnAllctdVl: string;
  thrdPrtyPrrtyClms: string;
  rankClltrl: string;
  mrtggIdPrtctn: string;
}
