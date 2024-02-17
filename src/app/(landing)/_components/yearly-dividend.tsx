import LottiePlayer from "@/components/common/lottie-player/lottie-player";
import React from "react";

const YearlyDividend = () => {
  return (
    <div className="flex w-full max-w-[375px] flex-col items-center gap-10 px-5">
      <div className="flex w-full flex-col items-start justify-center gap-2">
        <p className="whitespace-pre-wrap text-h3-semibold">{`How Much is Your\nDividend Payout This Year?`}</p>
        <p className=" whitespace-pre-wrap text-h5 font-normal text-grey-600">{`Calculate Your Annual Dividend Payout\nalong with the Ranking of your Dividend.`}</p>
      </div>
      <LottiePlayer className="h-[180px] w-full rounded-lg bg-[#F2F4F6]" />
    </div>
  );
};

export default YearlyDividend;
