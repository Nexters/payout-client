import React from "react";
import Image from "next/image";

interface HeaderProps {
  tickerCount: number;
}

export const Header = React.memo(({ tickerCount }: HeaderProps) => {
  return (
    <div className="w-full border-b border-b-gray-200 p-5 pb-8">
      <div className="mb-6 flex w-full items-center justify-between gap-0.5">
        <div>
          <h2 className="text-h5 text-grey-600">In Financial Services</h2>
          <p className=" text-h1 text-grey-900">{`You Invested ${32}%`}</p>
        </div>
        <Image src={"/next.svg"} alt={"section-logo"} width={56} height={56} />
      </div>

      <div className="inline-block rounded-2xl bg-gray-100 px-2.5 py-1.5 text-h6">{`${tickerCount} Stocks`}</div>
    </div>
  );
});
