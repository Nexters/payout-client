import { SectorRatioResponse } from "@/api/generated/endpoint.schemas";
import ChevronRightIcon from "@/components/icons/chevron-right";
import BasicMaterialsIcon from "@/components/icons/sector/basic-materials";
import React from "react";

export interface SectorRowProps extends SectorRatioResponse {
  onClick?: () => void;
  color: string;
}

export const SectorRow = React.memo(({ sectorName, sectorRatio, onClick, color }: SectorRowProps) => {
  return (
    <div onClick={onClick} className="flex w-full items-center gap-4 py-3.5">
      <div className="shrink-0">
        <div className="rounded-full p-1.5 text-white" style={{ backgroundColor: `var(--color-${color})` }}>
          <BasicMaterialsIcon />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <p className="text-h5 text-gray-900">{sectorName}</p>
        <p className="text-vody2 text-gray-600">{sectorRatio}%</p>
      </div>
      <div className="shrink-0">
        <ChevronRightIcon />
      </div>
    </div>
  );
});
