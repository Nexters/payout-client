import React from "react";
import { SectorInsightsItem } from "./sector-insights-item";
import { StockDividendYieldResponse, UpcomingDividendResponse } from "../../../../../api/generated/endpoint.schemas";

interface SectorInsightsProps {
  comingDividendStocks?: UpcomingDividendResponse[];
  biggestDividendYieldStocks?: StockDividendYieldResponse[];
}

export const SectorInsights = React.memo(
  ({ comingDividendStocks, biggestDividendYieldStocks }: SectorInsightsProps) => {
    if (!comingDividendStocks && !biggestDividendYieldStocks) return null;

    return (
      <>
        <div className="flex w-full flex-col gap-2 border-b border-b-gray-200 px-5 py-8">
          <h2 className="text-h2 text-grey-900">Sector Insights</h2>
          <p className="text-body3 text-grey-600">
            {`Last updated `}
            <span className="text-main-700">{`${"2024/01/27 21:38"}`}</span>{" "}
          </p>
        </div>

        <div className="flex w-full flex-col gap-10 py-8">
          {comingDividendStocks && (
            <SectorInsightsItem title={"Approaching Ex-Dividend dates"} stocks={comingDividendStocks} type="Date" />
          )}
          {biggestDividendYieldStocks && (
            <SectorInsightsItem title={"Top Recent Dividend Yields"} stocks={biggestDividendYieldStocks} type="Rate" />
          )}
        </div>
      </>
    );
  }
);
