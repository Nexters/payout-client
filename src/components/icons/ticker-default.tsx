import React from "react";

export interface TickerDefaultProps extends React.SVGProps<SVGSVGElement> {}

const TickerDefault = React.memo(({ ...props }: TickerDefaultProps) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="20" fill="#EFF1FC" />
      <path d="M9.04102 25.2097L14.8493 19.4016L19.942 24.4944L29.719 14.7174" stroke="#BDC7FC" strokeWidth="1.5" />
      <path d="M29.7717 20.1609V14.7192H24.624" stroke="#BDC7FC" strokeWidth="1.5" />
    </svg>
  );
});

export default TickerDefault;
