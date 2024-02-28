import { YearlyDividendResponse } from "@/api/generated/endpoint.schemas";
import BubbleChart from "@/components/common/bubble-chart/bubble-chart";
import { Button } from "@/components/common/button/button";
import { useRouter } from "next/navigation";
import React from "react";

interface AnnualDividendProps {
  data: YearlyDividendResponse;
}

const bubbleStyles = ["absolute bottom-3 left-0", "absolute right-0 top-0", "absolute bottom-0 right-3"];

export const AnnualDividend = ({ data }: AnnualDividendProps) => {
  const router = useRouter();

  const handleButtonClick = React.useCallback(() => {
    router.push("/report/dividend/yearly");
  }, [router]);

  if (data.dividends.length === 1) {
    return (
      <div className="flex size-full flex-col items-center justify-start gap-14 px-5 py-8">
        <div className="flex w-full flex-col items-start">
          <p className=" text-h5 text-grey-600">Annual Dividend Income</p>
          <p className=" text-h1 text-grey-900">{`$${data.totalDividend.toFixed(2)}`}</p>
        </div>
        <BubbleChart dividend={data.dividends[0]} rank={0} />
        <Button variant={"secondary"} size={"max"} onClick={handleButtonClick}>
          Check Overall Rankings
        </Button>
      </div>
    );
  }

  return (
    <div className="flex size-full flex-col items-center justify-start gap-6 px-5 py-8">
      <div className="flex w-full flex-col items-start">
        <p className=" text-h5 text-grey-600">Annual Dividend Income</p>
        <p className=" text-h1 text-grey-900">{`$${data.totalDividend.toFixed(2)}`}</p>
      </div>
      <div className="relative h-[300px] w-full max-w-[335px] shrink-0">
        {data.dividends.slice(0, 3).map((_, idx) => (
          <BubbleChart dividend={data.dividends[idx]} key={idx} rank={idx} className={bubbleStyles[idx]} />
        ))}
      </div>
      <Button className="shrink-0" variant={"secondary"} size={"max"} onClick={handleButtonClick}>
        Check Overall Rankings
      </Button>
    </div>
  );
};
