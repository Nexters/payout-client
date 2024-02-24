import React from "react";
import { formatDateStringToMonthDay } from "@/utils/data";
import InfoCalendar from "@/components/icons/info-calendar";
import InfoDate from "@/components/icons/info-date";

interface InvestmentTipProps {
  exDividendDate?: string;
  earliestPaymentDate?: string;
}

export const InvestmentTip = React.memo(({ exDividendDate, earliestPaymentDate }: InvestmentTipProps) => {
  return (
    <div className="flex w-full flex-col border-b border-grey-200 px-5 py-8">
      <h4 className="mb-7 text-h4 text-grey-800">Investment Tip</h4>

      <div className="flex w-full flex-col gap-5">
        <div className="flex items-center justify-between">
          {exDividendDate && (
            <>
              <div className="flex items-center gap-3">
                <InfoCalendar />
                <h6 className="text-h6 text-grey-500">{"Ex-Dividend Date"}</h6>
              </div>
              <p className="text-h5 text-grey-800">{formatDateStringToMonthDay(exDividendDate)}</p>
            </>
          )}
        </div>
        <div className="flex items-center justify-between">
          {earliestPaymentDate && (
            <>
              <div className="flex items-center gap-3">
                <InfoDate />
                <h6 className="text-h6 text-grey-500">{"Approaching Payment Date"}</h6>
              </div>
              <p className="text-h5 text-grey-800">{formatDateStringToMonthDay(earliestPaymentDate)}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
});
