import Header from "./_components/header";
import Intro from "./_components/intro";
import MonthlyDividend from "./_components/monthly-dividend";
import SectorBalanced from "./_components/sector-balanced";
import TargetUser from "./_components/target-user";
import YearlyDividend from "./_components/yearly-dividend";
import FAQ from "./_components/faq";
import Footer from "./_components/footer";
import FloatingFooter from "./_components/floating-footer";

export default function Home() {
  return (
    <>
      <Header />
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
    </>
  );
}
