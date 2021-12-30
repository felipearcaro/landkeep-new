import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import { Link, LoaderFunction, useLoaderData } from "remix";
import { Loan } from "~/types";
import { classNames, http, toUSD } from "~/utils";
import { useState } from "react";
import Layout from "~/components/layout";

const candidates = [
  {
    name: "Emily Selman",
    email: "emilyselman@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    applied: "January 7, 2020",
    appliedDatetime: "2020-07-01T15:34:56",
    status: "Completed phone screening",
  },
  // More candidates...
];

const countAll = (loans: Loan[]) => loans.length;
const countLate = (loans: Loan[]) =>
  loans.filter((l) => l.status === "late").length;
const countDefaulted = (loans: Loan[]) =>
  loans.filter((l) => l.status === "defaulted").length;
const countGoodStanding = (loans: Loan[]) =>
  loans.filter((l) => l.status === "active").length;

export const loader: LoaderFunction = async () => {
  const res = await http.get(`/loans`);
  return res.data;
};

export default function LoanDetails() {
  const loans = useLoaderData<Loan[]>();
  const [tab, setTab] = useState(0);
  console.log("loans", loans);

  const tabs = [
    { name: "All", count: countAll(loans), current: tab === 0 },
    { name: "Late", count: countLate(loans), current: tab === 1 },
    { name: "Defaulted", count: countDefaulted(loans), current: tab === 2 },
    {
      name: "Good Standing",
      count: countGoodStanding(loans),
      current: tab === 3,
    },
  ];

  return (
    <Layout>
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <h2 className="text-lg font-medium text-gray-900">Loans</h2>

            {/* Tabs */}
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">
                Select a tab
              </label>
              {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
              <select
                id="tabs"
                name="tabs"
                className="mt-4 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                defaultValue={tabs.find((tab) => tab.current).name}
              >
                {tabs.map((tab) => (
                  <option key={tab.name}>{tab.name}</option>
                ))}
              </select>
            </div>
            <div className="hidden sm:block">
              <div className="border-b border-gray-200">
                <nav className="mt-2 -mb-px flex space-x-8" aria-label="Tabs">
                  {tabs
                    .filter((t) => t.count)
                    .map((tab, index) => (
                      <button
                        key={tab.name}
                        onClick={() => setTab(index)}
                        className={classNames(
                          tab.current
                            ? "border-purple-500 text-purple-600"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200",
                          "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                        )}
                      >
                        {tab.name}
                        {tab.count ? (
                          <span
                            className={classNames(
                              tab.current
                                ? "bg-purple-100 text-purple-600"
                                : "bg-gray-100 text-gray-900",
                              "hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                            )}
                          >
                            {tab.count}
                          </span>
                        ) : null}
                      </button>
                    ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Stacked list */}
          <ul
            role="list"
            className="mt-5 border-t border-gray-200 divide-y divide-gray-200 sm:mt-0 sm:border-t-0"
          >
            {loans
              .filter((loan) => {
                switch (tab) {
                  case 0:
                    return true;
                  case 1:
                    return loan.status === "late";
                  case 2:
                    return loan.status === "defaulted";
                  case 3:
                    return loan.status === "active";
                  default:
                    return false;
                }
              })
              .map((loan) => (
                <li key={loan.id}>
                  <Link to={`/loans/${loan.id}`} className="group block">
                    <div className="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                      <div className="min-w-0 flex-1 flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-12 w-12 rounded-full group-hover:opacity-75"
                            src={candidates[0].imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <p className="text-sm font-medium text-purple-600 truncate">
                              {loan.name}
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-500">
                              <LocationMarkerIcon
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="truncate">ARN: {loan.arn}</span>
                            </p>
                          </div>
                          <div className="hidden md:block">
                            <div>
                              <p className="text-sm text-gray-900">
                                {toUSD(loan.amount)}
                              </p>
                              <p className="mt-2 flex items-center text-sm text-gray-500">
                                <CheckCircleIcon
                                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                  aria-hidden="true"
                                />
                                {/* TODO: FIX THIS */}
                                {loan.status ?? "pending"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <ChevronRightIcon
                          className="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>

          {/* Pagination */}
          <nav
            className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0"
            aria-label="Pagination"
          >
            <div className="-mt-px w-0 flex-1 flex">
              <a
                href="#"
                className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-200"
              >
                <ArrowNarrowLeftIcon
                  className="mr-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Previous
              </a>
            </div>
            <div className="hidden md:-mt-px md:flex">
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                1
              </a>
              {/* Current: "border-purple-500 text-purple-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200" */}
              <a
                href="#"
                className="border-purple-500 text-purple-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                aria-current="page"
              >
                2
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                3
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                4
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                5
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                6
              </a>
            </div>
            <div className="-mt-px w-0 flex-1 flex justify-end">
              <a
                href="#"
                className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-200"
              >
                Next
                <ArrowNarrowRightIcon
                  className="ml-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </a>
            </div>
          </nav>
        </div>
      </main>
    </Layout>
  );
}
