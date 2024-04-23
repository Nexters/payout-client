"use client";
import React from "react";
import Logo from "../logo/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Toast from "@/components/common/toast/toast";
import { toast } from "sonner";
import { event } from "@/utils/gtag";

const ShareData = {
  title: "Payout",
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
    event({
      action: "Share Button Click",
    });
    try {
      if (isShareSupported()) {
        navigator.share({ ...ShareData, url: window.location.href });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.custom((t) => <Toast t={t} title={`copied to clipboard`} />);
      }
    } catch (e) {
      toast.custom((t) => <Toast t={t} title={`Sharing is not supported on this device`} />);
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
