export type Loan = {
  id: string;
  lenderId: string;
  borrowerId?: string;
  name: string;
  county: string;
  state: string;
  arn: string;
  amount: number;
  terms: number;
  downPayment: number;
  processingFee: number;
  interest: number;
  monthlyTaxes: number;
  lateFeeType: "flat";
  lateFeeAmount: number;
  gracePeriod: number;
  defaultAfter: number;
  servicingFee: number;
  startDate: string;
};
