import ChevronRightIcon from "@/components/icons/chevron-right";
import React from "react";
import { Sector } from "./sector-focus";
import { Button } from "@/components/common/button/button";

export interface SectorRowProps extends Omit<Sector, "stockShares"> {
  onClick?: () => void;
  color: string;
  icon: React.ReactNode;
}

export const SectorRow = React.memo(
  ({ sectorName, sectorRatio, onClick, color, isShowingMore, icon }: SectorRowProps) => {
    return (
      <div onClick={onClick} className="flex w-full cursor-pointer items-center gap-4 py-3.5">
        <div className="shrink-0">
          <div className="rounded-full p-1.5 text-white" style={{ backgroundColor: `var(--color-${color})` }}>
            {icon}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <p className="text-h5 text-gray-900">{sectorName}</p>
          <p className="text-body2 text-gray-600">{sectorRatio}%</p>
        </div>
        {isShowingMore ? (
          <Button variant={"secondary"} size={"fit"} className="h-[38px]">
            More
          </Button>
        ) : (
          <div className="shrink-0">
            <ChevronRightIcon />
          </div>
        )}
      </div>
    );
  }
);
