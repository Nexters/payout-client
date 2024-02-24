import { SectorRatioResponse } from "@/api/generated/endpoint.schemas";
import React from "react";

export interface SectorRowProps extends SectorRatioResponse {
  onClick?: () => void;
}

export const SectorRow = React.memo(({ sectorName, sectorRatio, onClick }: SectorRowProps) => {
  return (
    <div onClick={onClick} className="flex w-full items-center gap-4 px-5 py-3.5">
      <div className="shrink-0"></div>
      <div className="flex flex-1 flex-col gap-1">
        <p></p>
      </div>
      <div className="shrink-0"></div>
    </div>
  );
});
