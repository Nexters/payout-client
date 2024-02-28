"use client";

import React from "react";
import { SectorList } from "./_components/sector-list";
import { useQueryClient } from "@tanstack/react-query";
import { enteredStocksQueryKeys } from "@/state/queries/use-stocks-sector-ratio";
import { SectorRatioResponse } from "@/api/generated/endpoint.schemas";
import { Loader2Icon } from "lucide-react";

const SectorListPage = React.memo(() => {
  const queryClient = useQueryClient();

  const data = React.useMemo(
    () =>
      queryClient
        .getQueriesData({})
        .find(([queryKey]) => enteredStocksQueryKeys._def === queryKey)?.[1] as SectorRatioResponse[],
    [queryClient]
  );

  if (!data) {
    return (
      <div className="flex size-full items-center justify-center">
        <Loader2Icon className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex size-full flex-col items-center justify-start gap-5">
      <SectorList sectorList={data} />
    </div>
  );
});

export default SectorListPage;
