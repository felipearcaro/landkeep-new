import { ScaleIcon } from "@heroicons/react/outline";
import { CashIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { LoaderFunction, redirect } from "remix";
import Layout from "~/components/layout";
import { storage } from "~/utils/session.server";

const cards = [
  { name: "Account balance", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
  // More items...
];
const transactions = [
  {
    id: 1,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
];
const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Index() {
  return <div>Site home page</div>;
}
