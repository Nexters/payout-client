import SecondImage from "@/app/(landing)/_assets/2.png"
import Image from "next/image";
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
      <Image src={SecondImage} alt="A lock surrounded by paper walls" width={335}/>
    </div>
  );
};

export default TargetUser;
