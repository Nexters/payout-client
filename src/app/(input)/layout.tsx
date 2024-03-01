import { Viewport } from "next";
import Link from "next/link";
import React from "react";
import Logo from "@/components/common/logo/logo";

export const viewport: Viewport = {
  themeColor: "var(--color-white)",
};

const InputLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex size-full flex-col">
      <div className="sticky top-0 z-10 flex h-11 w-full shrink-0 items-center justify-start bg-white px-5">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="h-[calc(100%-50px)] w-full">{children}</div>
    </div>
  );
};

export default InputLayout;
