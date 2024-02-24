"use client";

import React from "react";
import { DonutChart } from "@tremor/react";
import { SectorRow } from "./sector-row";
import { SectorRatioResponse } from "@/api/generated/endpoint.schemas";

const data: SectorRatioResponse[] = [
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
    sectorName: "Others",
    sectorRatio: 6,
    stocks: [],
  },
];

const COLORS = ["navy-700", "purple-500", "blue-600", "green-500"];

const dataFormatter = (number: number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export const SectorFocus = React.memo(() => {
  return (
    <div className="flex flex-col gap-6 p-5">
      <div className="flex w-full flex-col items-start">
        <p className=" text-h5 text-grey-600">Your portfolio focuses on</p>
        <p className=" text-h1 text-grey-900">Financial Services</p>
      </div>
      <DonutChart
        data={data.map((sector) => {
          return {
            name: sector.sectorName,
            value: sector.sectorRatio,
          };
        })}
        className="h-[180px]"
        variant="donut"
        showLabel={false}
        showAnimation={true}
        colors={COLORS}
        valueFormatter={dataFormatter}
        onValueChange={(v) => console.log(v)}
      />
      <div className="flex w-full flex-col items-center justify-center">
        {data.map((sector, idx) => {
          return (
            <SectorRow
              color={COLORS[idx]}
              key={sector.sectorName}
              sectorName={sector.sectorName}
              sectorRatio={sector.sectorRatio}
            />
          );
        })}
      </div>
    </div>
  );
});
