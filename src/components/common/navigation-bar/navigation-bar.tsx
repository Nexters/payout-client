"use client";
import React from "react";
import Logo from "../logo/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Toast from "@/components/common/toast/toast";
import { toast } from "sonner";

const ShareData = {
  title: "Payout",
  text: "Self-check Your Dividend Portfolio",
};

function validateReportUrl(url: string) {
  const pattern = /^\/report\/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;
  return pattern.test(url);
}

const NavigationBar = () => {
  const pathname = usePathname();

  const isShareSupported = () => {
    // navigator.canShare()는 옵션 데이터가 제공되면 그 데이터를 검사합니다.
    return navigator.canShare && navigator.canShare({ ...ShareData, url: window.location.href });
  };

  const handleShareClick = async () => {
    try {
      if (isShareSupported()) {
        navigator.share({ ...ShareData, url: window.location.href });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.custom((t) => <Toast t={t} title={`copied`} />);
      }
    } catch (e) {
      toast.custom((t) => <Toast t={t} title={`Sharing not supported or data not shareable.`} />);
    }
  };

  return (
    <div className="flex h-11 w-full shrink-0 items-center justify-between bg-transparent px-5">
      <Link href="/">
        <Logo />
      </Link>
      {validateReportUrl(pathname) && (
        <div onClick={handleShareClick} className="cursor-pointer text-body3 text-grey-900">
          Share
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
