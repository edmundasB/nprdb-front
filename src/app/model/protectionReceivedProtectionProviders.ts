export class ProtectionReceivedProtectionProviders {
  constructor(reportId: string) {
    this.reportId = reportId;
  }

  id: number;
  reportId: string;
  rprtngAgnCd: string;
  obsrvdAgntCd: string;
  prtctnId: string;
  prtctnPrvdrCd: string;
  prmrPrtctnPrvdr: string;
}
