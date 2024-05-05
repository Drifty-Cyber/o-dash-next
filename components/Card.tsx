import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  description: string;
  interest: string;
  interestIcon: LucideIcon;
  cardColor: string;
};

export default function Card(props: CardProps) {
  const contentCardStyle = {
    backgroundColor: props.cardColor,
    // color: props.cardColor,
  };

  return (
    <CardContent style={contentCardStyle}>
      {/* // <CardContent className={`bg-[${props.cardColor}]`}> */}
      <section className="flex justify-between gap-2">
        <div className="flex h-[40px] w-[40px] bg-white rounded-lg items-center justify-center">
          {/* Icon */}
          <span>
            <props.icon className="text-gray-400" color={props.cardColor} />
          </span>
        </div>

        {/* Interest */}
        <div className="flex flex-col w-[85px] h-[24px] items-center justify-center rounded-2xl px-[2px] pl-[8px] pr-[10px] leading-5 text-sm">
          <span>
            <props.interestIcon />
          </span>
          <p className="text-xs text-gray-500">{props.interest}</p>
        </div>
      </section>

      <section>
        {/* Label */}
        <p className="text-sm">{props.label}</p>
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">{props.amount}</h2>
        <p className="text-xs text-gray-500">{props.description}</p>
      </section>
    </CardContent>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "h-[232.5px] flex flex-col gap-3 w-full rounded-xl border p-5 shadow",
        props.className
      )}
    />
  );
}
