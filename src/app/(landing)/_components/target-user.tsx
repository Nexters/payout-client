import LottiePlayer from "@/components/lottie-player/lottie-player";
import React from "react";

const TargetUser = () => {
  return (
    <div className="flex w-full max-w-[375px] flex-col items-center gap-10 px-5">
      <div className="flex w-full flex-col items-start justify-center gap-2">
        <p className=" text-h3-semibold">Who is Payout for?</p>
        <p className=" whitespace-pre-wrap text-h5 font-normal text-grey-600">
          {`Anyone in need of a dividend portfolio check\n`}
          <span className=" text-h5 text-main-700">{`without exposing any sensitive info.`}</span>
        </p>
      </div>
      <LottiePlayer className="h-[180px] w-full rounded-lg bg-[#F2F4F6]" />
    </div>
  );
};

export default TargetUser;
