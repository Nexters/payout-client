import React from "react";
import Logo from "../logo/logo";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <div className="flex h-11 w-full shrink-0 items-center justify-start bg-transparent px-5">
      <Link href="/">
        <Logo />
      </Link>
    </div>
  );
};

export default NavigationBar;
