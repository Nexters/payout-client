"use client";

import React from "react";
import { SectorRow } from "../../_components/sector-row";
import { DONUT_CHART_COLORS, ICONS } from "../../_data";
import { Sector } from "../../_components/sector-focus";
import { useRouter } from "next/navigation";

export const SectorList = React.memo(({ sectorList }: { sectorList: Sector[] }) => {
  const router = useRouter();

  const onSectorClick = React.useCallback(
    (sector: Sector) => {
      router.push(`/report/sector-detail/${sector.sectorName}`);
    },
    [router]
  );

  return (
    <div className="mt-5 flex w-full flex-col items-center justify-start gap-6 overflow-y-auto px-5 pb-8">
      {sectorList.sort((a, b) => b.sectorRatio - a.sectorRatio)?.map((sector, idx) => (
        <div className="flex h-10 w-full items-center justify-between gap-2" key={`${sector.sectorName}-${idx}`}>
          <SectorRow
            icon={ICONS[(sector.isShowingMore ? "ETC" : sector.sectorName ?? "ETC") as keyof typeof ICONS]}
            color={DONUT_CHART_COLORS[idx] ?? "green-500"}
            key={sector.sectorName}
            sectorName={sector.sectorName}
            sectorRatio={Number((sector.sectorRatio * 100).toFixed(2))}
            isShowingMore={sector.isShowingMore}
            onClick={() => onSectorClick(sector)}
          />
        </div>
      ))}
    </div>
  );
});
