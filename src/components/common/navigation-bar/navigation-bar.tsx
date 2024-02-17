import React from "react";
import Logo from "../logo/logo";

const NavigationBar = () => {
  return (
    <div className="absolute left-0 top-0 flex w-full items-center justify-start bg-transparent px-4 py-2.5">
      <Logo />
    </div>
  );
};

export default NavigationBar;
