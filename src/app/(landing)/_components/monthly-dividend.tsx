import FourthImage from "@/app/(landing)/_assets/4.png";
import Image from "next/image";
import React from "react";

const MonthlyDividend = () => {
  return (
    <div className="flex w-full max-w-[375px] flex-col items-center gap-10 px-5">
      <div className="flex w-full flex-col items-start justify-center gap-2">
        <p className="whitespace-pre-wrap text-h3-semibold">{`Is Your Monthly\nDividend Even?`}</p>
        <p className=" whitespace-pre-wrap text-body1 font-normal text-grey-600">
          {`Check your dividend schedule\nwith the estimated monthly dividend payout.`}
        </p>
      </div>
      <Image src={FourthImage} alt="A calendar with a stack of coins in front of it" width={335} />
    </div>
  );
};

export default MonthlyDividend;
