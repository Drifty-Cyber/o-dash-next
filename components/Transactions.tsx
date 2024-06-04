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
      <div>
        <svg
          width="33"
          height="11"
          viewBox="0 0 33 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.33366 10.6444H5.58734L3.52793 2.55655C3.43019 2.18451 3.22264 1.8556 2.91734 1.70059C2.15544 1.31102 1.31588 1.00099 0.399994 0.844625V0.533243H4.8241C5.43469 0.533243 5.89264 1.00099 5.96896 1.54422L7.03749 7.37824L9.78248 0.533243H12.4525L8.33366 10.6444ZM13.979 10.6444H11.3853L13.521 0.533243H16.1147L13.979 10.6444ZM19.4703 3.33433C19.5466 2.78975 20.0045 2.47837 20.5388 2.47837C21.3784 2.40019 22.2929 2.55655 23.0561 2.94477L23.5141 0.767795C22.7509 0.456414 21.9113 0.300049 21.1494 0.300049C18.632 0.300049 16.8003 1.70059 16.8003 3.64437C16.8003 5.12309 18.0978 5.89952 19.0137 6.36727C20.0045 6.83367 20.3861 7.14505 20.3098 7.61145C20.3098 8.31105 19.5466 8.62243 18.7847 8.62243C17.8688 8.62243 16.9529 8.38923 16.1147 7.99966L15.6567 10.178C16.5726 10.5662 17.5635 10.7226 18.4794 10.7226C21.302 10.7994 23.0561 9.40021 23.0561 7.30007C23.0561 4.65535 19.4703 4.50033 19.4703 3.33433ZM32.1333 10.6444L30.0739 0.533243H27.8619C27.4039 0.533243 26.946 0.844625 26.7933 1.31102L22.9798 10.6444H25.6498L26.1827 9.167H29.4633L29.7686 10.6444H32.1333ZM28.2435 3.25616L29.0054 7.06688H26.8697L28.2435 3.25616Z"
            fill="#172B85"
          />
        </svg>
      </div>

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
