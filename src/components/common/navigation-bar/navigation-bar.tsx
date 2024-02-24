import React from "react";
import Logo from "../logo/logo";

const NavigationBar = () => {
  return (
    <a href="/" className="flex w-full items-center justify-start bg-transparent px-5 py-2.5">
      <Logo />
    </a>
  );
};

export default NavigationBar;
