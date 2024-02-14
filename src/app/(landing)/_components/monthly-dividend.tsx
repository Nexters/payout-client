import LottiePlayer from "@/components/lottie-player/lottie-player";
import React from "react";

const MonthlyDividend = () => {
  return (
    <div className="flex w-full max-w-[375px] flex-col items-center gap-10 px-5">
      <div className="flex w-full flex-col items-start justify-center gap-2">
        <p className="whitespace-pre-wrap text-h3-semibold">{`Is My Monthly\nDividend Balanced?`}</p>
        <p className=" whitespace-pre-wrap text-h5 font-normal text-grey-600">
          {`Check expected `}
          <span className=" text-h5 text-main-700">{`average dividend\n`}</span>
          {`and `}
          <span className=" text-h5 text-main-700">{`dividend schedule`}</span>
        </p>
      </div>
      <LottiePlayer className="h-[180px] w-full rounded-lg bg-[#F2F4F6]" />
    </div>
  );
};

export default MonthlyDividend;
