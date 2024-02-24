"use client";

import React from "react";
import { Header } from "../_components/header";
import { DividendList } from "../_components/dividend-list";
import { Dividend } from "../../dividend/_components/dividend-row";
import { SectorInsights } from "../_components/sector-insights";
import { useStocksSectorRatioMutation } from "@/state/queries/use-stocks-sector-ratio";

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
const SectorDetailPage = React.memo(({ params }: { params: { sector: string } }) => {
  const { data } = useStocksSectorRatioMutation();

  const sectorName = React.useMemo(() => {
    return params.sector.split("%20").join(" ");
  }, [params.sector]);

  const sectorData = React.useMemo(() => {
    return data?.find((each) => each.sectorName === sectorName);
  }, [data, sectorName]);
  return (
    <div className="size-full">
      {sectorName}
      {JSON.stringify(sectorData)}
      <Header tickerCount={sectorData?.stocks?.length ?? 0} />
      <DividendList dividendList={dummyDividendList} />
      <div className="h-4 bg-gray-100" />
      <SectorInsights />
    </div>
  );
});

export default SectorDetailPage;
