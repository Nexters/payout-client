"use client";

import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MonthlyDividendIncome } from "../page";
import { DividendRow } from "../../_components/dividend-row";
import { cn } from "@/utils/cn";

export const DividendAccordion = ({ monthlyDividendList }: { monthlyDividendList: MonthlyDividendIncome[] }) => {
  return (
    <Accordion type="single" collapsible className="flex w-full flex-col gap-3 overflow-y-auto px-5 pb-9">
      {monthlyDividendList.map((monthDividend, idx) => {
        const isOpenable = monthDividend.dividendList.length > 0;
        if (!isOpenable) {
          return (
            <div
              key={`${monthDividend.date.toDateString()}-${idx}`}
              className={cn(
                "flex w-full items-center justify-between rounded-lg border border-grey-200 p-5",
                isOpenable && "pr-4"
              )}
            >
              <p className=" text-h4 text-grey-900">{monthDividend.date.toDateString()}</p>
              <p className=" text-h4 text-grey-900">{monthDividend.totalIncome}</p>
            </div>
          );
        }
        return (
          <AccordionItem
            key={`${monthDividend.date.toDateString()}-${idx}`}
            value={`item-${idx}`}
            className={cn("rounded-lg border border-grey-200 p-5")}
          >
            <AccordionTrigger>
              <div className={cn("flex w-full items-center justify-between", isOpenable && "pr-4")}>
                <p className=" text-h4 text-grey-900">{monthDividend.date.toDateString()}</p>
                <p className=" text-h4 text-grey-900">{monthDividend.totalIncome}</p>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <div className="flex w-full flex-col items-center justify-center gap-6 border-t border-t-grey-200 pt-6">
                {monthDividend.dividendList.map((dividend, idx) => (
                  <DividendRow dividend={dividend} key={`${dividend.ticker}-${idx}`} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
