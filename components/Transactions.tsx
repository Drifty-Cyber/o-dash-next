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
];

export default function Transactions() {
  return (
    <section className="flex flex-col gap-5">
      {/* Transaction Header */}
      <section className="flex justify-between border-b">
        <h2 className="text-[#101828] text-lg font-bold pb-5">
          Recent Transactions
        </h2>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
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
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 5.49992C10.4602 5.49992 10.8333 5.12682 10.8333 4.66659C10.8333 4.20635 10.4602 3.83325 10 3.83325C9.53976 3.83325 9.16667 4.20635 9.16667 4.66659C9.16667 5.12682 9.53976 5.49992 10 5.49992Z"
                  stroke="#98A2B3"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 17.1666C10.4602 17.1666 10.8333 16.7935 10.8333 16.3333C10.8333 15.873 10.4602 15.4999 10 15.4999C9.53976 15.4999 9.16667 15.873 9.16667 16.3333C9.16667 16.7935 9.53976 17.1666 10 17.1666Z"
                  stroke="#98A2B3"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
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
      <section>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Recent Transactions
          </h2>
          <ul>
            {transactions.map((transaction, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-2 border-b last:border-none"
              >
                <div className="flex items-center">
                  {transaction.type === "Visa" && (
                    <img
                      src="/visa-logo.png"
                      alt="Visa"
                      className="h-6 w-6 mr-2"
                    />
                  )}
                  {transaction.type === "Mastercard" && (
                    <img
                      src="/mastercard-logo.png"
                      alt="Mastercard"
                      className="h-6 w-6 mr-2"
                    />
                  )}
                  {transaction.type === "Stripe" && (
                    <img
                      src="/stripe-logo.png"
                      alt="Stripe"
                      className="h-6 w-6 mr-2"
                    />
                  )}
                  {transaction.type === "PayPal" && (
                    <img
                      src="/paypal-logo.png"
                      alt="PayPal"
                      className="h-6 w-6 mr-2"
                    />
                  )}
                  {transaction.type === "Apple Pay" && (
                    <img
                      src="/apple-pay-logo.png"
                      alt="Apple Pay"
                      className="h-6 w-6 mr-2"
                    />
                  )}
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {transaction.type}{" "}
                      {transaction.number && `ending in ${transaction.number}`}
                    </p>
                    {transaction.expiry && (
                      <p className="text-xs text-gray-500">
                        Expiry {transaction.expiry}
                      </p>
                    )}
                    {transaction.email && (
                      <p className="text-xs text-gray-500">
                        {transaction.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <p
                    className={`text-sm font-medium ${
                      transaction.color === "green"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.amount > 0 ? `+` : ``}$
                    {transaction.amount.toLocaleString()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-center">
            <button className="text-blue-600 hover:underline">Show more</button>
          </div>
        </div>
      </section>
    </section>
  );
}
