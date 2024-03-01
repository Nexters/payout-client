import Intro from "./_components/intro";
import MonthlyDividend from "./_components/monthly-dividend";
import SectorBalanced from "./_components/sector-balanced";
import TargetUser from "./_components/target-user";
import YearlyDividend from "./_components/yearly-dividend";
import FAQ from "./_components/faq";
import Footer from "./_components/footer";
import FloatingFooter from "./_components/floating-footer";
import NavigationBar from "@/components/common/navigation-bar/navigation-bar";

export default function Home() {
  return (
    <div className="flex size-full flex-col items-start justify-start">
      <NavigationBar />
      <div className="flex size-full flex-1 flex-col items-center justify-start overflow-auto pt-5">
        <Intro />
        <div className="flex w-full flex-col items-center justify-center gap-20 pb-32 pt-10">
          <TargetUser />
          <SectorBalanced />
          <MonthlyDividend />
          <YearlyDividend />
          <FAQ />
          <Footer />
        </div>
        <FloatingFooter />
      </div>
    </div>
  );
}
