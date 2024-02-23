"use client";
import { SectorRatioResponse } from "@/api/generated/endpoint.schemas";
import ChevronRightIcon from "@/components/icons/chevron-right";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export interface SectorRatio extends Required<SectorRatioResponse> {}

export const SectorRow = React.memo(({ sector }: { sector: SectorRatio }) => {
  const router = useRouter();

  const handleSectorClick = () => {
    // @TODO 수정 필요
    router.push(`/`);
  };
  return (
    <div className="flex h-full w-full flex-1 items-center gap-4" onClick={handleSectorClick}>
      <Image src={"/next.svg"} alt={sector.sectorName} width={32} height={32} />
      <div className="flex w-full items-center justify-between  gap-1">
        <div>
          <p className="text-h5 text-grey-900">{sector.sectorName}</p>
          <p className="mt-1 text-body2 text-grey-600">{(sector.sectorRatio * 100).toFixed(0) + "%"}</p>
        </div>

        <ChevronRightIcon className="text-grey-500" />
      </div>
    </div>
  );
});
