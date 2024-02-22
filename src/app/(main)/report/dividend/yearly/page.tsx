import React from "react";
import { Header } from "./_components/header";
import { DividendList } from "./_components/dividend-list";
import { Dividend } from "../_components/dividend-row";

const dummyDividendList: Dividend[] = [
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
  {
    logo: "/next.svg",
    income: 12,
    shares: 18,
    ticker: "AAPL",
  },
];

const YearlyDividendPage = React.memo(() => {
  return (
    <div className="flex size-full flex-col items-center justify-start gap-5">
      <Header />
      <DividendList dividendList={dummyDividendList} />
    </div>
  );
});

export default YearlyDividendPage;
