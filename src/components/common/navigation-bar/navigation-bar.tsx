import React from "react";
import Logo from "../logo/logo";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <div className="flex w-full items-center justify-start bg-transparent px-5 py-2.5">
      <Link href="/">
        <Logo />
      </Link>
    </div>
  );
};

export default NavigationBar;
