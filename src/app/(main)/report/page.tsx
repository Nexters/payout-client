import React from "react";
import { SectorFocus } from "./_components/sector-focus";
import { MonthlyDividend } from "./_components/monthly-dividend";

const ReportPage = () => {
  return (
    <div className="size-full">
      <div className="flex size-full flex-col">
        <SectorFocus />
        <MonthlyDividend />
        <Divider />
        <>div</>
        <Divider />
      </div>
    </div>
  );
};

const Divider = React.memo(() => {
  return <div className="h-4 w-full bg-grey-100" />;
});

export default ReportPage;
