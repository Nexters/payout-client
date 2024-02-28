import React from "react";
import { SectorInsightsItem } from "./sector-insights-item";
import { StockDividendYieldResponse, UpcomingDividendResponse } from "../../../../../api/generated/endpoint.schemas";

interface SectorInsightsProps {
  comingDividendStocks?: UpcomingDividendResponse;
  biggestDividendYieldStocks?: StockDividendYieldResponse;
}

function formatDate(dateString: string) {
  try {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${year}/${month}/${day} ${hours}:${minutes}`;
  } catch {
    return undefined;
  }
}

export const SectorInsights = React.memo(
  ({ comingDividendStocks, biggestDividendYieldStocks }: SectorInsightsProps) => {
    if (!comingDividendStocks && !biggestDividendYieldStocks) return null;

    return (
      <>
        <div className="flex w-full flex-col gap-2 border-b border-b-gray-200 px-5 py-8">
          <h2 className="text-h2 text-grey-900">Sector Insights</h2>
          {comingDividendStocks?.lastModifiedAt && (
            <p className="text-body3 text-grey-600">
              {`Last updated `}
              <span className="text-main-700">{`${formatDate(comingDividendStocks?.lastModifiedAt)}`}</span>
            </p>
          )}
        </div>

        <div className="flex w-full flex-col gap-10 py-8">
          {comingDividendStocks && (
            <SectorInsightsItem title={"Approaching Ex-Dividend dates"} data={comingDividendStocks} type="Date" />
          )}
          {biggestDividendYieldStocks && (
            <SectorInsightsItem title={"Top Recent Dividend Yields"} data={biggestDividendYieldStocks} type="Rate" />
          )}
        </div>
      </>
    );
  }
);
