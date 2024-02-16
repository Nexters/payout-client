import React from "react";

const IcXCircle = ({ title = "", color = "#6E6E6E" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <title>{title}</title>
    <path d="M10.5 3.5L3.5 10.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.5 3.5L10.5 10.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default React.memo(IcXCircle);
