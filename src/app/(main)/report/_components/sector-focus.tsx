"use client";

import React from "react";
import { DonutChart } from "@tremor/react";
import { SectorRow } from "./sector-row";
import { SectorRatioResponse } from "@/api/generated/endpoint.schemas";
import { useRouter } from "next/navigation";
import { DONUT_CHART_COLORS, ICONS } from "../_data";

export interface Sector extends SectorRatioResponse {
  isShowingMore?: boolean;
  onClick?: () => void;
}

const data: Sector[] = [
  {
    sectorName: "Financial Services",
    sectorRatio: 64,
    stocks: [],
  },
  {
    sectorName: "Communication Services",
    sectorRatio: 20,
    stocks: [],
  },
  {
    sectorName: "Consumer Cyclical",
    sectorRatio: 10,
    stocks: [],
  },
  {
    sectorName: "Energy",
    sectorRatio: 4,
    stocks: [],
  },
  {
    sectorName: "Financial Services",
    sectorRatio: 2,
    stocks: [],
  },
];

export const SectorFocus = React.memo(() => {
  const router = useRouter();

  const sectors = React.useMemo(() => {
    if (data.length > 4)
      return [
        ...data.slice(0, 3),
        {
          sectorName: `${data.length - 3} Others`,
          sectorRatio: data.slice(3).reduce((prev, cur) => {
            return prev + (cur.sectorRatio ?? 0);
          }, 0),
          isShowingMore: true,
        },
      ];
    return data;
  }, [data]);

  const onSectorClick = React.useCallback(
    (sector: Sector) => {
      router.push(`/report/sector-detail/${sector.sectorName}`);
    },
    [router]
  );

  const onExtraSectorClick = React.useCallback(() => {
    router.push("/report/sector-list");
  }, [router]);

  return (
    <div className="flex flex-col gap-6 p-5">
      <div className="flex w-full flex-col items-start">
        <p className="text-h5 text-grey-600">Your portfolio focuses on</p>
        <p className="text-h1 text-grey-900">Financial Services</p>
      </div>
      <DonutChart
        data={sectors.map((sector) => {
          return {
            name: sector.sectorName,
            value: sector.sectorRatio,
          };
        })}
        className="h-[180px]"
        variant="donut"
        showLabel={false}
        showAnimation={true}
        colors={DONUT_CHART_COLORS}
        valueFormatter={(number: number) => `${Intl.NumberFormat("us").format(number).toString()}%`}
        onValueChange={(v) => console.log(v)}
      />
      <div className="flex w-full flex-col items-center justify-center">
        {sectors.map((sector, idx) => {
          return (
            <SectorRow
              icon={ICONS[(sector.isShowingMore ? "ETC" : sector.sectorName ?? "ETC") as keyof typeof ICONS]}
              color={DONUT_CHART_COLORS[idx]}
              key={sector.sectorName}
              sectorName={sector.sectorName}
              sectorRatio={sector.sectorRatio}
              isShowingMore={sector.isShowingMore}
              onClick={sector.isShowingMore ? onExtraSectorClick : () => onSectorClick(sector)}
            />
          );
        })}
      </div>
    </div>
  );
});
