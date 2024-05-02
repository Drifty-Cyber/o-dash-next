import Card, { CardProps } from "@/components/Card";
import MenuBar from "@/components/MenuBar";
import PageTitle from "@/components/PageTitle";
import TabbedButtons from "@/components/TabbedButtons";
import {
  Activity,
  ArrowUp,
  BarChart,
  BarChart2,
  Gem,
  Search,
} from "lucide-react";

const cardData: CardProps[] = [
  {
    label: "Total Savings",
    icon: Gem,
    amount: "$64,240.60",
    description: "View report",
    interest: "3.4% p.a",
    interestIcon: ArrowUp,
    cardColor: "#0052CC",
  },
  {
    label: "Current Balance",
    icon: Gem,
    amount: "$41,382.80",
    description: "View report",
    interest: "3.4% p.a",
    interestIcon: ArrowUp,
    cardColor: "#EF8B15",
  },
  {
    label: "Trading Balance",
    icon: BarChart2,
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
  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Name and Search */}
      <section className="grid grid-cols-2">
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

        <section className="w-1/2 h-14 py-[10px] px-[14px] gap-2 flex items-center border border-gray-[#D0D5DD] rounded-[8px] justify-self-end bg-[white]">
          <span>
            {/* <CiSearch className="text-xl  " /> */}
            <Search />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full py-[10px] px-[14px]"
          ></input>
        </section>

        {/* Tabs/Filters */}
        <section>
          <TabbedButtons />
        </section>
      </section>

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
    </div>
  );
}
