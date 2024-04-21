"use client";
import { Button } from "@/components/ui/button";
import { usePortfolioMutation } from "@/state/mutations/use-portfolio-mutation";
import { useStocksStore } from "@/state/stores/stocks-store";
import { sendGAEvent } from "@next/third-parties/google";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function TickerFooter() {
  const { stocks } = useStocksStore();
  const router = useRouter();

  const { mutateAsync, isPending } = usePortfolioMutation();

  const handleTickerSubmit = React.useCallback(async () => {
    sendGAEvent({
      event: "Analyzie My Portfolio Button Click",
    });
    const response = await mutateAsync({
      tickerShares: stocks.map((stock) => {
        return {
          share: stock.count,
          ticker: stock.ticker,
        };
      }),
    });
    router.push(`/report/${response.data.id}`);
  }, [mutateAsync, router, stocks]);

  if (stocks.length === 0) return null;

  return (
    <div
      className="fixed bottom-0 flex w-full justify-center p-5 pb-4 pt-0 "
      style={{
        backgroundImage: "linear-gradient(0deg, var(--color-white) 52.78%, rgba(255, 255, 255, 0.00) 100%)",
        maxWidth: 768,
      }}
    >
      <Button
        disabled={isPending}
        variant={"default"}
        className="mt-14 h-14 w-full rounded-lg bg-main-700 p-4"
        style={{
          backgroundColor: "#4F6AFC",
          color: "#fff",
        }}
        onClick={handleTickerSubmit}
      >
        {isPending ? (
          <Loader2Icon className="animate-spin" />
        ) : (
          <p className="text-h5 text-white">Analyze My Portfolio</p>
        )}
      </Button>
    </div>
  );
}
