export class ProtectionReceived {
  constructor(reportId: string) {
    this.reportId = reportId;
  }

  id: number;
  reportId: string;
  rprtngAgnCd: string;
  obsrvdAgntCd: string;
  prtctnId: string;
  unqPrprtNmbrPrtctn: string;
  isinCdPrtctn: string;
  typPrtctn: string;
  prtctnVl: string;
  typPrtctnVl: string;
  prtctnVltnApprch: string;
  iso3166NutsDsjnt: string;
  dtMtrtyPrtctn: string;
  orgnlPrtctnVl: string;
  prprtValuerId: string;
  addInfClltrl: string;
}
