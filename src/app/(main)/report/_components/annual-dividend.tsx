import BubbleChart from "@/components/common/bubble-chart/bubble-chart";
import { Button } from "@/components/common/button/button";
import { useRouter } from "next/navigation";
import React from "react";

interface AnnualDividendProps {}

const bubbleStyles = ["absolute bottom-3 left-0", "absolute right-0 top-0", "absolute bottom-0 right-3"];

const data = ["", "", ""];

export const AnnualDividend = ({}: AnnualDividendProps) => {
  const router = useRouter();

  const handleButtonClick = React.useCallback(() => {
    router.push("/report/dividend/yearly");
  }, [router]);

  if (data.length === 1) {
    return (
      <div className="flex size-full flex-col items-center justify-start gap-14 px-5 py-8">
        <div className="flex w-full flex-col items-start">
          <p className=" text-h5 text-grey-600">Annual Dividend Income</p>
          <p className=" text-h1 text-grey-900">{`$${2000}`}</p>
        </div>

        <BubbleChart rank={0} />

        <Button variant={"secondary"} size={"max"} onClick={() => {}}>
          Check Overall Rankings
        </Button>
      </div>
    );
  }

  return (
    <div className="flex size-full flex-col items-center justify-start gap-6 px-5 py-8">
      <div className="flex w-full flex-col items-start">
        <p className=" text-h5 text-grey-600">Annual Dividend Income</p>
        <p className=" text-h1 text-grey-900">{`$${2000}`}</p>
      </div>
      <div className="relative h-[300px] w-full max-w-[335px] shrink-0">
        {data.map((_, idx) => (
          <BubbleChart key={idx} rank={idx} className={bubbleStyles[idx]} />
        ))}
      </div>
      <Button className="shrink-0" variant={"secondary"} size={"max"} onClick={handleButtonClick}>
        Check Overall Rankings
      </Button>
    </div>
  );
};
