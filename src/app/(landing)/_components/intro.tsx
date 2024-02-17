import LottiePlayer from "@/components/common/lottie-player/lottie-player";
import React from "react";

const Intro = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(180deg, var(--color-purple-100) 0%, var(--color-white) 61.58%)",
      }}
      className="flex h-[478px] w-full flex-col items-center gap-[60px] pt-11"
    >
      <header className="flex w-full max-w-[375px] flex-col items-center justify-center gap-4 px-5 pt-5">
        <div className="flex w-full items-center justify-center gap-2">
          <Tag title="Free" />
          <Tag title="1 Min" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h1 className="whitespace-pre-wrap text-h1 text-grey-900">{`Self-Check Your\nDividend Portfolio`}</h1>
          <h5 className="text-h5 font-normal text-grey-700">
            <span className="text-h5 text-main-700">No Bank Integration</span> Required
          </h5>
        </div>
      </header>
      <div className="flex w-full items-center justify-center">
        <LottiePlayer className="h-[158px] w-[165px] bg-grey-100" />
      </div>
    </div>
  );
};

const Tag = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-center rounded bg-main-100 px-2 py-1 text-body3 text-main-700">
      {title}
    </div>
  );
};

export default Intro;
