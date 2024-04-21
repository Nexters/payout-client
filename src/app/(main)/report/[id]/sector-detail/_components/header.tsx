import React from "react";
import { useSearchParams } from "next/navigation";
import { DONUT_CHART_COLORS, LARGE_ICONS } from "../../../_data";

interface HeaderProps {
  sectorName: string;
  sectorRatio: number;
  tickerCount: number;
}

export const Header = React.memo(({ sectorName, sectorRatio, tickerCount }: HeaderProps) => {
  const searchParams = useSearchParams();

  const icon = LARGE_ICONS[(sectorName ?? "ETC") as keyof typeof LARGE_ICONS];
  const color = DONUT_CHART_COLORS[Math.min(Number(searchParams.get("i") ?? 0), 3)];

  return (
    <div className="w-full border-b border-b-grey-200 p-5 pb-8">
      <div className="mb-6 flex w-full items-center justify-between gap-0.5">
        <div>
          <h2 className="text-h5 text-grey-600">In {sectorName}</h2>
          <p className=" text-h1 text-grey-900">{`You Invested ${sectorRatio}%`}</p>
        </div>
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full p-1.5 text-white"
          style={{ backgroundColor: `var(--color-${color})` }}
        >
          {icon}
        </div>
      </div>

      <div className="inline-block rounded-2xl bg-grey-100 px-2.5 py-1.5 text-h6">{`${tickerCount} Stock${
        tickerCount > 1 ? "s" : ""
      }`}</div>
    </div>
  );
});
