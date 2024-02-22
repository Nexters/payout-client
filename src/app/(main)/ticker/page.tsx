import TickerContent from "./_components/ticker-content";
import React from "react";
import TickerFooter from "./_components/ticker-footer";

export default function TickerPage() {
  return (
    <div className="mt-10">
      <TickerContent />
      <TickerFooter />
    </div>
  );
}
