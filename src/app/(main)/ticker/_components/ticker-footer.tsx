"use client";
import { TickerShare } from "@/api/generated/endpoint.schemas";
import { Button } from "@/components/ui/button";
import { useStocksSectorRatioMutation } from "@/state/queries/use-stocks-sector-ratio";
import { useStocksSectorRatioStore } from "@/state/stores/stocks-sector-ratio";
import { useStocksStore } from "@/state/stores/stocks-store";
import React from "react";

export default function TickerFooter() {
  const { stocks } = useStocksStore();
  const { setStockSectorRatio } = useStocksSectorRatioStore();
  const { mutate } = useStocksSectorRatioMutation();

  const isSubmittable = stocks.length > 0;

  const handleTickerSubmit = React.useCallback(async () => {
    const tickerShares: TickerShare[] = stocks
      .filter((stock) => !!stock.ticker) // ticker가 있는 경우만 필터링
      .map((stock) => {
        const { ticker, count } = stock;
        return {
          ticker: ticker as string,
          share: count,
        };
      });

    try {
      await mutate(tickerShares, {
        onSuccess: (data) => {
          data && setStockSectorRatio(data);
        },
      });

      // @TODO Router 추가 작업
      // router.push(`/report`);
    } catch (error) {
      throw Error("제출 실패");
    }
  }, [mutate, setStockSectorRatio, stocks]);

  return (
    <div
      className="fixed bottom-4 flex w-full justify-center pt-12"
      style={{
        backgroundImage: "linear-gradient(0deg, var(--color-white) 52.78%, rgba(255, 255, 255, 0.00) 100%)",
        maxWidth: 768,
      }}
    >
      <Button
        disabled={!isSubmittable}
        variant={"default"}
        className="mx-5 h-14 w-full rounded-lg bg-main-700 p-4"
        style={{
          backgroundColor: isSubmittable ? "#4F6AFC" : "#7692DA",
          color: isSubmittable ? "#fff" : "rgba(255, 255, 255, 0.40)",
        }}
        onClick={handleTickerSubmit}
      >
        <p className="text-h5 text-white">Analyze My Portfolio</p>
      </Button>
    </div>
  );
}
