export type Loan = {
  id: string;
  lenderId: string;
  borrowerId?: string;
  status: "pending" | "active" | "late" | "defaulted"; // TODO: UPDATE THESE
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

export type User = {
  id: string;
  role: "lender" | "borrower";
  email: string;
  subscriptionPlan?: "basic" | "pro";
  subscriptionStatus?: "active" | "cancelled";
  createdAt: string;
  deleteAt: string;
};
