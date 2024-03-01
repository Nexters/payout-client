import React from "react";

export interface ChevronRightIconProps extends React.SVGProps<SVGSVGElement> {}

const ChevronRightIcon = React.memo(({ ...props }: ChevronRightIconProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 20}
      height={props.height ?? 20}
      viewBox="0 0 24 25"
      fill="none"
    >
      <path d="M9 18.5L15 12.5L9 6.5" stroke="#8B95A1" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
});

export default ChevronRightIcon;
