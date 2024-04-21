"use client";

import React from "react";
import { SectorList } from "./_components/sector-list";
import { useStocksSectorRatioMutation } from "@/state/queries/use-stocks-sector-ratio-mutation";
import { Loader2Icon } from "lucide-react";
import { useParams } from "next/navigation";

const SectorListPage = React.memo(() => {
  const { id } = useParams<{ id: string }>();

  const { data, mutate } = useStocksSectorRatioMutation(id);

  React.useEffect(() => {
    mutate();
  }, [mutate]);

  if (!data) {
    return (
      <div className="flex size-full items-center justify-center">
        <Loader2Icon className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex size-full flex-col items-center justify-start gap-5">
      <SectorList sectorList={data.data} />
    </div>
  );
});

export default SectorListPage;
