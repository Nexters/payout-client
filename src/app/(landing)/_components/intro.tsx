import LottiePlayer from "@/components/lottie-player/lottie-player";
import React from "react";

const Intro = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(180deg, var(--color-purple-100) 0%, var(--color-white) 61.58%)",
      }}
      className="flex h-[522px] w-full flex-col items-center gap-[60px] pt-11"
    >
      <div className="flex w-full flex-col items-center justify-center gap-4 pt-5">
        <div className="flex w-full items-center justify-center gap-2">
          <Tag title="Free" />
          <Tag title="1 Min" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h1 className="whitespace-pre-wrap text-[28px] font-semibold leading-[120%] tracking-[-0.56px] text-grey-900">{`Self-Check Your\nDividend Portfolio`}</h1>
          <h5 className=" font-normal leading-[120%] text-grey-700">
            <span className="font-semibold text-main-700">No Bank Integration</span> Required
          </h5>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <LottiePlayer className="h-[158px] w-[165px] bg-grey-100" />
      </div>
    </div>
  );
};

const Tag = ({ title }: { title: string }) => {
  return <div className="flex items-center justify-center rounded bg-main-100 px-2 py-1 text-main-700">{title}</div>;
};

export default Intro;
