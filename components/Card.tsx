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
  };

  return (
    <CardContent style={contentCardStyle}>
      <section className="flex justify-between items-center gap-2">
        <div className="flex h-[40px] w-[40px] bg-white rounded-lg items-center justify-center">
          {/* Icon */}
          <span>
            <props.icon className="text-gray-400" color={props.cardColor} />
          </span>
        </div>

        {/* Interest */}
        <div className="flex flex-row w-[85px] h-[24px] items-center justify-center rounded-2xl px-[2px] pl-[8px] pr-[10px] leading-5 text-sm text-[black] bg-[#e8ebe8cc]">
          <span className="">
            <props.interestIcon size={12} />
          </span>
          <span className="items-center justify-items-center py-2">
            <p className="text-[12px] leading-[20px] font-bold">
              {props.interest}
            </p>
          </span>
        </div>
      </section>

      {/* Amount Label and Amount */}
      <section className="border text-white border-white/50 rounded-lg bg-white/30">
        <section className="p-4">
          <section>
            {/* Label */}
            <p className="text-sm">{props.label}</p>
          </section>
          <section className="flex flex-col gap-1">
            <section className="mb-5 border-b-white/50">
              <h2 className="text-2xl font-semibold">{props.amount}</h2>
            </section>
            <p className="text-xs text-gray-500">{props.description}</p>
          </section>
        </section>
      </section>
    </CardContent>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "h-[232.5px] flex flex-col gap-[24px] w-full rounded-xl border p-5 shadow",
        props.className
      )}
    />
  );
}
