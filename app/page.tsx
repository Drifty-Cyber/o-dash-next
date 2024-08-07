"use client";

import Card, { CardProps } from "@/components/Card";
import ChartTabButtons from "@/components/ChartTabButtons";
import AreaChart from "@/components/AreaChart";
import { DatePicker } from "@/components/DatePicker";
import { Filter } from "@/components/Filter";
import { FilterDropdown } from "@/components/FilterDropDown";
import MenuBar from "@/components/MenuBar";
import PageTitle from "@/components/PageTitle";
import TabedButtons from "@/components/TabbedButtons";

import TabbedButtons from "@/components/TabbedButtons";
import {
  Activity,
  ArrowUp,
  BarChart2 as BarChartIcon,
  Gem,
  Search,
  Coins,
} from "lucide-react";
import { useState } from "react";
import Transactions from "@/components/Transactions";
import PieChartComponent from "@/components/PieChart";

const cardData: CardProps[] = [
  {
    label: "Total Savings",
    icon: Coins,
    amount: "$64,240.60",
    description: "View report",
    interest: "3.4% p.a",
    interestIcon: ArrowUp,
    cardColor: "#0052CC",
  },
  {
    label: "Current Balance",
    icon: Coins,
    amount: "$41,382.80",
    description: "View report",
    interest: "3.4% p.a",
    interestIcon: ArrowUp,
    cardColor: "#EF8B15",
  },
  {
    label: "Trading Balance",
    icon: BarChartIcon,
    amount: "$2,220.42",
    description: "View report",
    interest: "3.4% p.a",
    interestIcon: ArrowUp,
    cardColor: "#AF0493",
  },
  {
    label: "RSC Balance",
    icon: Activity,
    amount: "$41,382.80",
    description: "View report",
    interest: "3.4% p.a",
    interestIcon: ArrowUp,
    cardColor: "#039855",
  },
];

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const chartTabs = ["12 months", "30 days", "7 days"];
  const tabbedButtonsOptions = ["12 Months", "30 Days", "24 Hours", "7 Days"];

  function handleFilterChange(filter: string) {
    setSelectedFilter(filter);
  }

  return (
    <div className="flex flex-col gap-[32px] w-full">
      {/* Name and Search */}
      <section className="grid grid-cols-2 gap-[20px]">
        <section className="flex flex-col justify-start">
          <PageTitle
            title="Welcome back, Mr Adeshina"
            classname="text-[16px] leading-[24px] font-bold text-[#667085]"
          />
          <PageTitle
            title="Pension Dashboard"
            classname="text-[30px] leading-[38px] font-bold tracking-wide text-[#101828] pt-2"
          />
        </section>

        <section className="w-1/2 h-12 py-[10px] px-[14px] gap-2 flex items-center border border-gray-[#D0D5DD] rounded-[8px] justify-self-end bg-[white]">
          <span>
            <Search />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full py-[10px] px-[14px]"
          ></input>
        </section>
      </section>

      {/* Tabs/Filters */}
      <section className="grid grid-cols-2">
        {/* <TabbedButtons /> */}
        <TabedButtons options={tabbedButtonsOptions} />

        <section className="justify-self-end grid grid-cols-2 gap-[32px]">
          <section>
            <DatePicker />
          </section>

          <section className="grid justify-self-end w-full">
            {/* <Filter onChange={handleFilterChange} /> */}
            <FilterDropdown />
          </section>
        </section>
      </section>

      {/* Cards and Account Info */}
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((card, i) => (
          <Card
            key={i}
            label={card.label}
            icon={card.icon}
            amount={card.amount}
            description={card.description}
            interest={card.interest}
            interestIcon={card.interestIcon}
            cardColor={card.cardColor}
          />
        ))}
      </section>

      {/* Balance and Days Filter */}
      <section className="grid grid-cols-3 gap-6">
        <section className="col-span-2">
          {/* Filter and Chart */}
          <section className="flex flex-row justify-between border-b pb-[20px]">
            <section className="text-[#101828] leading-[28px] text-[18px]">
              <p>Balance over time</p>
            </section>

            <section>
              <ChartTabButtons options={chartTabs} />
            </section>
          </section>

          <section className="border-t mt-6 w-auto">
            <AreaChart />
          </section>
        </section>

        {/* Transaction History */}
        <section className="bg-white rounded-lg shadow-sm border pl-6 pr-6 pt-6 pb-3">
          <Transactions />
        </section>
      </section>

      {/* Pie Chart &  */}
      {/* <section className="grid grid-cols-2 gap-3">
        <section className="bg-white rounded-lg shadow-sm border lg:h-[205px]">
          <section>
            <PieChartComponent />
          </section>
          <section>Left component, right side</section>
        </section>
        <section className="bg-white rounded-lg shadow-sm border">
          <section>
            <PieChartComponent />
          </section>
        </section>
      </section> */}

      <section className="grid grid-cols-2 gap-3">
        <section className="bg-white rounded-lg shadow-sm border lg:h-[205px]">
          <section className="flex items-center justify-between p-4">
            <section>
              <h3 className="text-lg font-medium">Total Contribution</h3>
              <p className="text-gray-500 text-sm">Current balance</p>
            </section>
            <section>
              <div className="text-right">
                <p className="text-2xl font-bold">$40,206.20</p>
                <p className="text-green-500 text-sm">+ 3.4%</p>
              </div>
            </section>
          </section>
          <section className="mx-4">
            <PieChartComponent />
          </section>
        </section>
        <section className="bg-white rounded-lg shadow-sm border">
          <section className="flex items-center justify-between p-4">
            <section>
              <h3 className="text-lg font-medium">
                Total Voluntary Contribution
              </h3>
              <p className="text-gray-500 text-sm">Current balance</p>
            </section>
            <section>
              <div className="text-right">
                <p className="text-2xl font-bold">$6,421.10</p>
                <p className="text-green-500 text-sm">+ 2.0%</p>
              </div>
            </section>
          </section>
          <section className="mx-4">
            <PieChartComponent />
          </section>
        </section>
      </section>
    </div>
  );
}
