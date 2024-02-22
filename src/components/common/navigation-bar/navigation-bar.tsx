import React from "react";
import Logo from "../logo/logo";

const NavigationBar = () => {
  return (
    <div className="flex w-full items-center justify-start bg-transparent px-5 py-2.5">
      <Logo />
    </div>
  );
};

export default NavigationBar;
