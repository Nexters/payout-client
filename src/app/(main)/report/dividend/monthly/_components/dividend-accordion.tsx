"use client";

import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { DividendRow } from "../../_components/dividend-row";
import { cn } from "@/utils/cn";
import { MonthlyDividendResponse } from "@/api/generated/endpoint.schemas";

export const DividendAccordion = ({ monthlyDividendList }: { monthlyDividendList: MonthlyDividendResponse[] }) => {
  return (
    <Accordion
      type="single"
      defaultValue="item-0"
      collapsible
      className="flex w-full flex-col gap-3 overflow-y-auto px-5 pb-9 pt-5"
    >
      {monthlyDividendList.map((monthDividend, idx) => {
        const isOpenable = monthDividend.dividends.length > 0;
        const currentMonthDate = new Date(monthDividend.year, monthDividend.month - 1);

        const month = currentMonthDate.toLocaleString("en-US", { month: "short" });
        let year = "";
        if (idx === 0 || monthDividend.year !== monthlyDividendList[idx - 1]?.year) {
          year = ` ${monthDividend.year}`;
        }

        if (!isOpenable) {
          return (
            <div
              key={`${currentMonthDate.toDateString()}-${idx}`}
              className={cn(
                "flex w-full items-center justify-between rounded-lg border border-grey-200 p-5",
                isOpenable && "pr-5"
              )}
            >
              <p className=" text-h4 text-grey-900">{`${month}${year}`}</p>
              <p className=" text-h4 text-grey-900">${monthDividend.totalDividend.toFixed(2)}</p>
            </div>
          );
        }
        return (
          <AccordionItem
            key={`${currentMonthDate.toDateString()}-${idx}`}
            value={`item-${idx}`}
            className={cn("rounded-lg border border-grey-200 p-5")}
          >
            <AccordionTrigger>
              <div className={cn("flex w-full items-center justify-between", isOpenable && "pr-3")}>
                <p className=" text-h4 text-grey-900">{`${month}${year}`}</p>
                <p className=" text-h4 text-grey-900">${monthDividend.totalDividend.toFixed(2)}</p>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <div className="flex w-full flex-col items-center justify-center gap-6 border-t border-t-grey-200 pt-6">
                {monthDividend.dividends.map((dividend, idx) => (
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
