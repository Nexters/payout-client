import FirstImage from "@/app/(landing)/_assets/1.png";
import Image from "next/image";
import React from "react";
import NavigationBar from "@/components/common/navigation-bar/navigation-bar";

const Intro = () => {
  return (
    <div
      style={{
        background: "linear-gradient(0deg, #EFF1FC 21.47%, rgba(239, 241, 252, 0.00) 53.7%)",
      }}
      className="flex w-full flex-col items-center gap-[20px]"
    >
      <NavigationBar />
      <header className="flex w-full max-w-[375px] flex-col items-center justify-center gap-4 px-5">
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
      <div className="flex w-full items-center justify-center pb-10">
        <Image src={FirstImage} alt="A chart on a phone" width={335} />
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
