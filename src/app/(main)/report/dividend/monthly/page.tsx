import React from "react";
import { Header } from "./_components/header";
import { DividendAccordion } from "./_components/dividend-accordion";
import { Dividend } from "../_components/dividend-row";

export interface MonthlyDividendIncome {
  date: Date;
  totalIncome: number;
  dividendList: Dividend[];
}

const dummyMonthlyDividendList: MonthlyDividendIncome[] = [
  {
    date: new Date(),
    totalIncome: 20,
    dividendList: [
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
    ],
  },
  {
    date: new Date(),
    totalIncome: 20,
    dividendList: [
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
    ],
  },
  {
    date: new Date(),
    totalIncome: 20,
    dividendList: [
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
    ],
  },
  {
    date: new Date(),
    totalIncome: 20,
    dividendList: [
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
    ],
  },
  {
    date: new Date(),
    totalIncome: 20,
    dividendList: [
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
    ],
  },
  {
    date: new Date(),
    totalIncome: 20,
    dividendList: [
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
    ],
  },
  {
    date: new Date(),
    totalIncome: 20,
    dividendList: [
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
    ],
  },
  {
    date: new Date(),
    totalIncome: 20,
    dividendList: [
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
    ],
  },
  {
    date: new Date(),
    totalIncome: 20,
    dividendList: [
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
    ],
  },
  {
    date: new Date(),
    totalIncome: 20,
    dividendList: [
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
    ],
  },
  {
    date: new Date(),
    totalIncome: 20,
    dividendList: [
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
    ],
  },
  {
    date: new Date(),
    totalIncome: 20,
    dividendList: [
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
    ],
  },
];

const MonthlyDividendPage = React.memo(() => {
  return (
    <div className="flex size-full flex-col items-center justify-start gap-5">
      <Header />
      <DividendAccordion monthlyDividendList={dummyMonthlyDividendList} />
    </div>
  );
});

export default MonthlyDividendPage;
