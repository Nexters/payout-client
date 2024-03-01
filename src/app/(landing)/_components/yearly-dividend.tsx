import FifthImage from "@/app/(landing)/_assets/5.png";
import Image from "next/image";
import React from "react";

const YearlyDividend = () => {
  return (
    <div className="flex w-full max-w-[375px] flex-col items-center gap-10 px-5">
      <div className="flex w-full flex-col items-start justify-center gap-2">
        <p className="whitespace-pre-wrap text-h3-semibold">{`How Much Is Your\nDividend Payout This Year?`}</p>
        <p className=" whitespace-pre-wrap text-h5 font-normal text-grey-600">{`Calculate your annual dividend payout\nalong with the ranking of your dividends.`}</p>
      </div>
      <Image src={FifthImage} alt="A stack of cash" width={335} />
    </div>
  );
};

export default YearlyDividend;
