import LottiePlayer from "@/components/common/lottie-player/lottie-player";
import React from "react";

const SectorBalanced = () => {
  return (
    <div className="flex w-full max-w-[375px] flex-col items-center gap-10">
      <div className="flex w-full flex-col items-start justify-center gap-2 px-5">
        <p className="whitespace-pre-wrap text-h3-semibold">{`Is Your Portfolio\nSector-Balanced?`}</p>
        <p className=" whitespace-pre-wrap text-h5 font-normal text-grey-600">{`Discover your favorite sector among the 11.`}</p>
      </div>
      <LottiePlayer className="h-[140px] w-full bg-[#F2F4F6]" />
    </div>
  );
};

export default SectorBalanced;
