import { ActionFunction, redirect, Link } from "remix";
import Layout from "~/components/layout";
import { http } from "~/utils";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const name = form.get("name");
  const county = form.get("county");
  const state = form.get("state");
  const arn = form.get("arn");
  const amount = form.get("amount");
  const terms = form.get("terms");
  const downPayment = form.get("down_payment");
  const processingFee = form.get("processing_fee");
  const interest = form.get("interest");
  const monthlyTaxes = form.get("monthly_taxes");
  const lateFeeType = form.get("late_fee_type");
  const lateFeeAmount = form.get("late_fee_amount");
  const gracePeriod = form.get("grace_period");
  const defaultAfter = form.get("default_after");
  const servicingFee = form.get("servicing_fee");
  const startDate = form.get("start_date");
  console.log("Submitted the form!");

  const fields = {
    name,
    county,
    state,
    arn,
    amount,
    terms,
    downPayment,
    processingFee,
    interest,
    monthlyTaxes,
    lateFeeType,
    lateFeeAmount,
    gracePeriod,
    defaultAfter,
    servicingFee,
    startDate,
  };
  console.log("Fields", fields);

  const res = await http.post("/loans", fields);
  console.log("json", res.data);

  return redirect("/loans");
  // return redirect("/loans/new");
};

export default function NewLoan() {
  return (
    <form method="POST" className="space-y-6">
      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Loan Information
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Specify payment terms, interest, and payment methods. These are
              just estimates and can be changed before finalizing the loan.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Loan Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="5.108 Acres with Trees, Peace, and Quiet"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="county"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Property County
                  </label>
                  <input
                    type="text"
                    name="county"
                    id="county"
                    placeholder="Travis"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Property State
                  </label>
                  <select
                    id="state"
                    name="state"
                    defaultValue="Texas"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Alabama</option>
                    <option>Alaska</option>
                    <option>Arizona</option>
                    <option>Arkansas</option>
                    <option>California</option>
                    <option>Colorado</option>
                    <option>Connecticut</option>
                    <option>Delaware</option>
                    <option>Florida</option>
                    <option>Georgia</option>
                    <option>Hawaii</option>
                    <option>Idaho</option>
                    <option>Illinois</option>
                    <option>Indiana</option>
                    <option>Iowa</option>
                    <option>Kansas</option>
                    <option>Kentucky</option>
                    <option>Louisiana</option>
                    <option>Maine</option>
                    <option>Maryland</option>
                    <option>Massachusetts</option>
                    <option>Michigan</option>
                    <option>Minnesota</option>
                    <option>Mississippi</option>
                    <option>Missouri</option>
                    <option>Montana</option>
                    <option>Nebraska</option>
                    <option>Nevada</option>
                    <option>New Hampshire</option>
                    <option>New Jersey</option>
                    <option>New Mexico</option>
                    <option>New York</option>
                    <option>North Carolina</option>
                    <option>North Dakota</option>
                    <option>Ohio</option>
                    <option>Oklahoma</option>
                    <option>Oregon</option>
                    <option>Pennsylvania</option>
                    <option>Rhode Island</option>
                    <option>South Carolina</option>
                    <option>South Dakota</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Utah</option>
                    <option>Vermont</option>
                    <option>Virginia</option>
                    <option>Washington</option>
                    <option>West Virginia</option>
                    <option>Wisconsin</option>
                    <option>Wyoming</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="arn"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Property ARN
                  </label>
                  <input
                    type="text"
                    name="arn"
                    id="arn"
                    placeholder="10223474"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="listing_link"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Listing Link (Optional)
                  </label>
                  <input
                    type="text"
                    name="listing_link"
                    id="listing_link"
                    placeholder="https://www.landsofamerica.com/property/5.108-acres-with-trees-peace-quiet/10344612/"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 lg:col-span-3">
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Loan Amount (Financed Only)
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      min={0.0}
                      step={0.01}
                      type="number"
                      name="amount"
                      id="amount"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0.00"
                      aria-describedby="price-currency"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span
                        className="text-gray-500 sm:text-sm"
                        id="price-currency"
                      >
                        USD
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 lg:col-span-3">
                  <label
                    htmlFor="terms"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Loan Terms
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      min={0}
                      step={1}
                      type="number"
                      name="terms"
                      id="terms"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-16 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0"
                      aria-describedby="terms-unit"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span
                        className="text-gray-500 sm:text-sm"
                        id="terms-unit"
                      >
                        Months
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 lg:col-span-3">
                  <label
                    htmlFor="down_payment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Down Payment
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      min={0.0}
                      step={0.01}
                      type="number"
                      name="down_payment"
                      id="down_payment"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0.00"
                      aria-describedby="price-currency"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span
                        className="text-gray-500 sm:text-sm"
                        id="price-currency"
                      >
                        USD
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 lg:col-span-3">
                  <label
                    htmlFor="processing_fee"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Processing Fee
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      min={0.0}
                      step={0.01}
                      type="number"
                      name="processing_fee"
                      id="processing_fee"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0.00"
                      aria-describedby="price-currency"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span
                        className="text-gray-500 sm:text-sm"
                        id="price-currency"
                      >
                        USD
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 lg:col-span-3">
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Interest Rate
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      min={0}
                      step={0.1}
                      type="number"
                      name="interest"
                      id="interest"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-8 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0.0"
                      aria-describedby="terms-unit"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span
                        className="text-gray-500 sm:text-sm"
                        id="terms-unit"
                      >
                        %
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 lg:col-span-3">
                  <label
                    htmlFor="monthly_taxes"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Monthly Taxes
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      min={0.0}
                      step={0.01}
                      type="number"
                      name="monthly_taxes"
                      id="monthly_taxes"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0.00"
                      aria-describedby="price-currency"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span
                        className="text-gray-500 sm:text-sm"
                        id="price-currency"
                      >
                        USD
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="late_fee_type"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Late Fee Type
                  </label>
                  <select
                    id="late_fee_type"
                    name="late_fee_type"
                    defaultValue="flat"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="flat">Flat</option>
                  </select>
                </div>

                <div className="col-span-6 lg:col-span-3">
                  <label
                    htmlFor="late_fee_amount"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Late Fee Amount
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      min={0.0}
                      step={0.01}
                      type="number"
                      name="late_fee_amount"
                      id="late_fee_amount"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0.00"
                      aria-describedby="price-currency"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span
                        className="text-gray-500 sm:text-sm"
                        id="price-currency"
                      >
                        USD
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 lg:col-span-3">
                  <label
                    htmlFor="grace_period"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Grace Period
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      min={0}
                      step={1}
                      type="number"
                      name="grace_period"
                      id="grace_period"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0"
                      aria-describedby="terms-unit"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span
                        className="text-gray-500 sm:text-sm"
                        id="terms-unit"
                      >
                        Days
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 lg:col-span-3">
                  <label
                    htmlFor="default_after"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Loan Default After
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      min={0}
                      step={1}
                      type="number"
                      name="default_after"
                      id="default_after"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0"
                      aria-describedby="terms-unit"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span
                        className="text-gray-500 sm:text-sm"
                        id="terms-unit"
                      >
                        Days
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 lg:col-span-3">
                  <label
                    htmlFor="servicing_fee"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Loan Servicing Fee
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      min={8.0}
                      step={0.01}
                      type="number"
                      name="servicing_fee"
                      id="servicing_fee"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="8.00"
                      aria-describedby="price-currency"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span
                        className="text-gray-500 sm:text-sm"
                        id="price-currency"
                      >
                        USD
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 lg:col-span-3">
                  <label
                    htmlFor="start_date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Loan Start Date
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="date"
                      name="start_date"
                      id="start_date"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      aria-describedby="price-currency"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Notifications
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Decide which communications you'd like to receive and how.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form className="space-y-6" action="#" method="POST">
              <fieldset>
                <legend className="text-base font-medium text-gray-900">
                  By Email
                </legend>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start">
                    <div className="h-5 flex items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-700"
                      >
                        Comments
                      </label>
                      <p className="text-gray-500">
                        Get notified when someones posts a comment on a posting.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="candidates"
                        className="font-medium text-gray-700"
                      >
                        Candidates
                      </label>
                      <p className="text-gray-500">
                        Get notified when a candidate applies for a job.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-700"
                      >
                        Offers
                      </label>
                      <p className="text-gray-500">
                        Get notified when a candidate accepts or rejects an
                        offer.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <div>
                  <legend className="text-base font-medium text-gray-900">
                    Push Notifications
                  </legend>
                  <p className="text-sm text-gray-500">
                    These are delivered via SMS to your mobile phone.
                  </p>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      htmlFor="push-everything"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Everything
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      htmlFor="push-email"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Same as email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="push-nothing"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      htmlFor="push-nothing"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      No push notifications
                    </label>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div> */}

      <div className="flex justify-end">
        <Link
          to="/dashboard"
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
  );
}
