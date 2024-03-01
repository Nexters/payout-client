import { SingleYearlyDividendResponse } from "@/api/generated/endpoint.schemas";
import { cn } from "@/utils/cn";
import React from "react";

export interface BubbleChartProps extends React.HTMLAttributes<HTMLDivElement> {
  rank: number;
  dividend: SingleYearlyDividendResponse;
}

const STYLE_BY_RANK = [
  { backgroundColor: "#283773", textColor: "#FFF", size: 210 },
  { backgroundColor: "#D6EBFF", textColor: "#005FBD", size: 150 },
  { backgroundColor: "#D8F3F6", textColor: "#0B5B60", size: 100 },
];

const BubbleChart = React.memo(({ rank, dividend, ...props }: BubbleChartProps) => {
  return (
    <div
      style={{
        backgroundColor: STYLE_BY_RANK[rank].backgroundColor,
        width: STYLE_BY_RANK[rank].size,
        height: STYLE_BY_RANK[rank].size,
      }}
      className={cn("relative flex shrink-0 items-center justify-center rounded-full", props.className)}
    >
      {rank === 0 && (
        <div className="absolute left-1/2 top-10 -translate-x-1/2 rounded bg-navy-600 px-2.5 py-1 text-h6 text-navy-200">
          Top 1
        </div>
      )}
      <div className="flex flex-col items-center justify-center">
        <p
          style={{ color: STYLE_BY_RANK[rank].textColor }}
          className={cn("flex text-[32px]", rank !== 0 && "text-[28px]")}
        >
          <span className=" opacity-40">$</span>
          {dividend.totalDividend.toFixed(2)}
        </p>
        <p style={{ color: STYLE_BY_RANK[rank].textColor }} className="text-body3 opacity-70">
          {dividend.ticker}
        </p>
      </div>
    </div>
  );
});

export default BubbleChart;
