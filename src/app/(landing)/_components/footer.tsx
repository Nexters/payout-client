import Logo from "@/components/common/logo/logo";
import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-5 bg-grey-50 px-5 py-8">
      <Logo />
      <p className="text-left text-body3 text-grey-600">
        The investment information provided by Payout is solely for reference purposes and is not intended for any kind
        of financial advices. Stock Data are updated daily at midnight UTC, and Dividend Data are estimated based on the
        data of the preceding year.
      </p>
      <p className="text-body4 text-grey-500">© 2024 Payout. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
