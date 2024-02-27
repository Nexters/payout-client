import React from "react";
import Image from "next/image";

interface HeaderProps {
  sectorName: string;
  sectorRatio: number;
  tickerCount: number;
}

export const Header = React.memo(({ sectorName, sectorRatio, tickerCount }: HeaderProps) => {
  return (
    <div className="w-full border-b border-b-grey-200 p-5 pb-8">
      <div className="mb-6 flex w-full items-center justify-between gap-0.5">
        <div>
          <h2 className="text-h5 text-grey-600">In {sectorName}</h2>
          <p className=" text-h1 text-grey-900">{`You Invested ${sectorRatio}%`}</p>
        </div>
        <Image src={"/next.svg"} alt={"section-logo"} width={56} height={56} />
      </div>

      <div className="inline-block rounded-2xl bg-grey-100 px-2.5 py-1.5 text-h6">{`${tickerCount} Stocks`}</div>
    </div>
  );
});
