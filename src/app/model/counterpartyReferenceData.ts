export class CounterpartyReferenceData {
  constructor(reportId: string) {
    this.reportId = reportId;
  }

  id: number;
  reportId: string;
  rprtngAgnCd: string;
  entityPrdbCd: string;
  lei: string;
  typNtlId: string;
  dscrptnOntnlId: string;
  ntnlId: string;
  typEntity: string;
  nmEntity: string;
  strt: string;
  cty: string;
  pstlCd: string;
  cntry: string;
  lglFrm: string;
  instttnlSctr: string;
  ecnmcActvty: string;
  lglPrcdngStts: string;
}
