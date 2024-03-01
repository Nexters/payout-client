import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";

const FAQ = () => {
  return (
    <div className="flex w-full max-w-[375px] flex-col items-center gap-10 px-5">
      <p className="w-full whitespace-pre-wrap text-h3-semibold text-grey-900">{`Frequently\nAsked Questions`}</p>
      <Accordion type="single" collapsible className="flex w-full flex-col gap-3">
        <AccordionItem value="item-1" className="rounded border border-grey-100 p-4">
          <AccordionTrigger>Which stocks does Payout support?</AccordionTrigger>
          <AccordionContent>
            Payout currently supports stocks listed on the three major U.S exchanges: NYSE, NASDAQ, and AMEX.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="rounded border border-grey-100 p-4">
          <AccordionTrigger>Are stock data updated real-time?</AccordionTrigger>
          <AccordionContent>
            Stock data are updated daily at midnight UTC, and dividend data are estimated based on the data of the
            preceding year.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="rounded border border-grey-100 p-4">
          <AccordionTrigger>How can I suggest ideas for Payout?</AccordionTrigger>
          <AccordionContent>
            Idea suggestions are always appreciated! Please contact us at payout.developer@gmail.com
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
