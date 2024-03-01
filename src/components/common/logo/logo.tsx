import Image from "next/image";
import React from "react";

const Logo = () => {
  return <Image src={"/logo.svg"} alt="Payout Logo" width={68} height={20} />;
};

export default Logo;
