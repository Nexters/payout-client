import React from "react";
import { SectorRatio, SectorRow } from "./sector-row";

export const SectorList = React.memo(({ sectorList }: { sectorList: SectorRatio[] }) => {
  return (
    <div className="mt-5 flex w-full flex-col items-center justify-start gap-6 overflow-y-auto px-5 pb-8">
      {sectorList.map((sector, idx) => (
        <div className="flex h-10 w-full items-center justify-between gap-2" key={`${sector.sectorName}-${idx}`}>
          <SectorRow sector={sector} />
        </div>
      ))}
    </div>
  );
});
