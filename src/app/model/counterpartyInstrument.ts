export class CounterpartyInstrument {
  constructor(reportId: string) {
    this.reportId = reportId;
  }

  id: number;
  reportId: string;
  rprtngAgntCd: string;
  obsrvdAgntCd: string;
  entityPrdbCd: string;
  cntrctId: string;
  instrmntId: string;
  enttyRl: string;
}
