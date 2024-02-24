import React from "react";
import Logo from "../logo/logo";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <Link href="/" className="flex w-full items-center justify-start bg-transparent px-5 py-2.5">
      <Logo />
    </Link>
  );
};

export default NavigationBar;
