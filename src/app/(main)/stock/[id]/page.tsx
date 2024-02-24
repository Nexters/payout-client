import React from "react";
import { Header } from "./_components/header";
import { InvestmentTip } from "./_components/investment-tip";
import { StockDetailResponse } from "@/api/generated/endpoint.schemas";
import { DividendInfo } from "./_components/dividend-info";

const dummyStock: StockDetailResponse = {
  stockId: "41b8b18f-6f4f-460c-a978-ff300c1a08f1",
  ticker: "AAPL",
  companyName: "Apple Inc.",
  sectorName: "Technology",
  exchange: "NASDAQ",
  industry: "Consumer Electronics",
  price: 182.32,
  volume: 39054026,
  logoUrl: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l476432a3e85a0aa21c23f5abd2975a89b6820d63.png",
  dividendPerShare: 0,
  exDividendDate: "2024-02-24",
  earliestPaymentDate: "2024-02-24",
  dividendYield: 0,
  dividendMonths: ["FEBRUARY", "MAY", "AUGUST", "NOVEMBER"],
};

export default function StockPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <Header stock={dummyStock} />
      <div className="h-4 bg-gray-100" />
      {dummyStock.exDividendDate && dummyStock.earliestPaymentDate && (
        <InvestmentTip
          exDividendDate={dummyStock.exDividendDate}
          earliestPaymentDate={dummyStock.earliestPaymentDate}
        />
      )}
      {dummyStock.dividendPerShare !== undefined &&
        dummyStock.dividendYield !== undefined &&
        dummyStock.dividendMonths !== undefined && (
          <DividendInfo
            dividendPerShare={dummyStock.dividendPerShare}
            dividendYield={dummyStock.dividendYield}
            dividendMonths={dummyStock.dividendMonths}
          ></DividendInfo>
        )}
    </div>
  );
}
