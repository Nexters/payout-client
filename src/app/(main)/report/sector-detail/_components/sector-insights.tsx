import React from "react";
import { InsightsStock, SectorInsightsItem } from "./sector-insights-item";

const dummyExDividendList: InsightsStock[] = [
  {
    stockId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    ticker: "string",
    logoUrl: "string",
    exDividendDate: "2024-02-23T07:21:48.256Z",
  },
  {
    stockId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    ticker: "string",
    logoUrl: "string",
    exDividendDate: "2024-02-23T07:21:48.256Z",
  },
  {
    stockId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    ticker: "string",
    logoUrl: "string",
    exDividendDate: "2024-02-23T07:21:48.256Z",
  },
  {
    stockId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    ticker: "string",
    logoUrl: "string",
    exDividendDate: "2024-02-23T07:21:48.256Z",
  },
];
const dummyTopDividendList: InsightsStock[] = [
  {
    stockId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    ticker: "string",
    logoUrl: "string",
    exDividendDate: "2024-02-23T07:21:48.256Z",
    sectorRatio: 0.49,
  },
  {
    stockId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    ticker: "string",
    logoUrl: "string",
    exDividendDate: "2024-02-23T07:21:48.256Z",
    sectorRatio: 0.49,
  },
  {
    stockId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    ticker: "string",
    logoUrl: "string",
    exDividendDate: "2024-02-23T07:21:48.256Z",
    sectorRatio: 0.49,
  },
  {
    stockId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    ticker: "string",
    logoUrl: "string",
    exDividendDate: "2024-02-23T07:21:48.256Z",
    sectorRatio: 0.49,
  },
];

export const SectorInsights = React.memo(() => {
  return (
    <div>
      <div className="flex w-full flex-col gap-2 border-b border-b-grey-200 px-5 py-8">
        <h2 className="text-h2 text-grey-900">Sector Insights</h2>
        <p className="text-body3 text-grey-600">
          {`Last updated `}
          <span className="text-main-700">{`${"2024/01/27 21:38"}`}</span>{" "}
        </p>
      </div>

      <div className="flex w-full flex-col gap-10 py-8">
        <SectorInsightsItem title={"Approaching Ex-Dividend dates"} stocks={dummyExDividendList} type="Date" />
        <SectorInsightsItem title={"Top Recent Dividend Yields"} stocks={dummyTopDividendList} type="Rate" />
      </div>
    </div>
  );
});
