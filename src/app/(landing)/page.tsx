import Intro from "./_components/intro";
import MonthlyDividend from "./_components/monthly-dividend";
import SectorBalanced from "./_components/sector-balanced";
import TargetUser from "./_components/target-user";
import YearlyDividend from "./_components/yearly-dividend";

export default function Home() {
  return (
    <>
      <Intro />
      <div className="flex w-full flex-col items-center justify-center gap-20 pb-20 pt-10">
        <TargetUser />
        <SectorBalanced />
        <MonthlyDividend />
        <YearlyDividend />
      </div>
    </>
  );
}
