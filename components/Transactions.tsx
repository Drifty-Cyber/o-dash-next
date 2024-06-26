import React from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Transaction {
  type: "visa" | "mastercard" | "stripe" | "paypal" | "applepay";
  amount: number;
  endingIn?: string;
  email?: string;
  expiry?: string;
}

const transactions: Transaction[] = [
  { type: "visa", amount: -2440, endingIn: "1234", expiry: "06/2024" },
  { type: "mastercard", amount: 32000, endingIn: "5678", expiry: "06/2024" },
  { type: "stripe", amount: 6280, email: "billing@untitledui.com" },
  { type: "visa", amount: -15000, endingIn: "1234", expiry: "06/2024" },
  { type: "paypal", amount: 42500, email: "alma@untitledui.com" },
  { type: "applepay", amount: 11440, email: "molly@untitledui.com" },
  { type: "visa", amount: 11440, endingIn: "1234", expiry: "06/2024" },
  { type: "stripe", amount: 11440, email: "billing@untitledui.com" },
  { type: "mastercard", amount: 32000, endingIn: "5678", expiry: "06/2024" },
  { type: "stripe", amount: 6280, email: "billing@untitledui.com" },
];

const getImageSrc = (type: string) => {
  switch (type) {
    case "visa":
      return "/visa-logo.png";
    case "mastercard":
      return "/mastercard-logo.png";
    case "stripe":
      return "/stripe-logo.png";
    case "paypal":
      return "/paypal-logo.png";
    case "applepay":
      return "/apple-pay-logo.png";
    default:
      return "";
  }
};

export default function Transactions() {
  return (
    <section className="flex flex-col gap-3 overflow-y-auto no-scrollbar max-h-[50vh] sm:max-h-[60vh] lg:max-h-[70vh] xl:max-h-[620px]">
      {/* Transaction Header */}
      <section className="flex justify-between border-b">
        <h2 className="text-[#101828] text-lg font-bold pb-5">
          Recent Transactions
        </h2>
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 11.3333C10.4602 11.3333 10.8333 10.9602 10.8333 10.4999C10.8333 10.0397 10.4602 9.66659 10 9.66659C9.53976 9.66659 9.16667 10.0397 9.16667 10.4999C9.16667 10.9602 9.53976 11.3333 10 11.3333Z"
                  stroke="#98A2B3"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 5.49992C10.4602 5.49992 10.8333 5.12682 10.8333 4.66659C10.8333 4.20635 10.4602 3.83325 10 3.83325C9.53976 3.83325 9.16667 4.20635 9.16667 4.66659C9.16667 5.12682 9.53976 5.49992 10 5.49992Z"
                  stroke="#98A2B3"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 17.1666C10.4602 17.1666 10.8333 16.7935 10.8333 16.3333C10.8333 15.873 10.4602 15.4999 10 15.4999C9.53976 15.4999 9.16667 15.873 9.16667 16.3333C9.16667 16.7935 9.53976 17.1666 10 17.1666Z"
                  stroke="#98A2B3"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
              <DropdownMenuLabel>Filter</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      {/* Transaction History */}
      <section className="overflow-y-auto no-scrollbar">
        <div className="bg-white">
          <ul>
            {transactions.map((transaction, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-2 border-b last:border-none"
              >
                <div className="flex items-center">
                  <div className="h-8 w-8 mr-6 relative">
                    <div className="">
                      <Image
                        src={getImageSrc(transaction.type)}
                        alt={transaction.type}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#101828] leading-5">
                      {transaction.type.charAt(0).toUpperCase() +
                        transaction.type.slice(1)}{" "}
                      {transaction.endingIn &&
                        `ending in ${transaction.endingIn}`}
                    </p>
                    {transaction.expiry && (
                      <p className="text-[#667085] text-sm">
                        Expiry {transaction.expiry}
                      </p>
                    )}
                    {transaction.email && (
                      <p className="text-sm text-[#667085]">
                        {transaction.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <p
                    className={`text-sm font-bold ${
                      transaction.amount > 0
                        ? "text-[#039855]"
                        : "text-[#EB1313]"
                    }`}
                  >
                    {transaction.amount > 0 ? `+` : ``}
                    {transaction.amount.toLocaleString()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-left">
            <button className="text-blue-600 hover:underline">Show more</button>
          </div>
        </div>
      </section>
    </section>
  );
}
