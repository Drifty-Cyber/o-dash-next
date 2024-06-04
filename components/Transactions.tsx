import React from "react";

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
    <div>
      <h2>Recent Transaction</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.type === "visa" && (
              <div>
                <span>VISA ending in {transaction.endingIn}</span>
                <span>Expiry {transaction.expiry}</span>
              </div>
            )}
            {transaction.type === "mastercard" && (
              <div>
                <span>Mastercard ending in {transaction.endingIn}</span>
                <span>Expiry {transaction.expiry}</span>
              </div>
            )}
            {transaction.type === "stripe" && (
              <div>
                <span>Stripe deposit</span>
                <span>{transaction.email}</span>
              </div>
            )}
            {transaction.type === "paypal" && (
              <div>
                <span>PayPal deposit</span>
                <span>{transaction.email}</span>
              </div>
            )}
            {transaction.type === "applepay" && (
              <div>
                <span>Apply Pay</span>
                <span>{transaction.email}</span>
              </div>
            )}
            <span>{transaction.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
