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
  return (
    // <CardContent className={cn(props.cardColor)}>
    <CardContent className={`bg-[${props.cardColor}]`}>
      <section className="flex justify-between gap-2">
        {/* Icon */}
        <props.icon className="h-4 w-4 text-gray-400" />

        {/* Interest */}
        <p className="text-xs text-gray-500">{props.interest}</p>
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
        "flex flex-col gap-3 w-full rounded-xl border p-5 shadow bg-[red]",
        props.className
      )}
    />
  );
}
