import React from "react";
import { Header } from "./_components/header";
import { DividendList } from "./_components/dividend-list";
import { Dividend } from "../dividend/_components/dividend-row";
import { SectorInsights } from "./_components/sector-insights";

const dummyDividendList: Dividend[] = [
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "JPM",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 12,
    ticker: "V",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 8,
    ticker: "WFC",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 4,
    ticker: "BAC",
  },
];
const SectorDetailPage = React.memo(() => {
  return (
    <div>
      <Header tickerCount={4} />
      <DividendList dividendList={dummyDividendList} />
      <div className="h-4 bg-gray-100" />
      <SectorInsights />
    </div>
  );
});

export default SectorDetailPage;
