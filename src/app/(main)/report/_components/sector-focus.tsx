"use client";

import React from "react";
import { DonutChart } from "@tremor/react";
import { SectorRow } from "./sector-row";

const data = [
  {
    name: "Financial Services",
    value: 64,
  },
  {
    name: "Communication Services",
    value: 20,
  },
  {
    name: "Consumer Cyclical",
    value: 10,
  },
  {
    name: "Others",
    value: 6,
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
        data={data}
        variant="donut"
        showLabel={false}
        showAnimation={true}
        colors={COLORS}
        valueFormatter={dataFormatter}
        onValueChange={(v) => console.log(v)}
      />
      <div className="flex w-full flex-col items-center justify-center">
        {data.map((sector) => {
          return <SectorRow key={sector.name} />;
        })}
      </div>
    </div>
  );
});
