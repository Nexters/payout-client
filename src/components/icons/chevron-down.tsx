import React from "react";

export interface ChevronDownIconProps extends React.SVGProps<SVGSVGElement> {}

const ChevronDownIcon = React.memo(({ ...props }: ChevronDownIconProps) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        stroke-width="0.866667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});

export default ChevronDownIcon;
