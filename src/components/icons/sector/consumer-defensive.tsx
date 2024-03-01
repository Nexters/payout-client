import React from "react";

export interface ConsumerDefensiveIconProps extends React.SVGProps<SVGSVGElement> {}

const ConsumerDefensiveIcon = React.memo(({ ...props }: ConsumerDefensiveIconProps) => {
  return (
    <svg
      {...props}
      width={props.width ?? 20}
      height={props.height ?? 20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.50549 9.56906V11.5477C2.50549 14.5949 6.48878 17.5559 10.0621 19.3121C13.6361 17.5559 17.6194 14.5949 17.6194 11.5477V9.56906V5.76965C17.6194 5.08506 17.2008 4.47009 16.5639 4.21907L10.0625 1.65674L3.56105 4.21907C2.92413 4.47009 2.50549 5.08506 2.50549 5.76965V9.56906ZM11.907 7.93536C11.907 8.95372 11.0819 9.77926 10.0631 9.77926C9.04514 9.77926 8.2196 8.95372 8.2196 7.93536C8.2196 6.91699 9.04514 6.09145 10.0631 6.09145C11.0819 6.09145 11.907 6.91699 11.907 7.93536ZM10.0628 10.343C7.408 10.343 6.37533 12.0324 6.37533 12.8184C6.37533 13.6041 8.57362 13.8135 10.0628 13.8135C11.5519 13.8135 13.7502 13.6041 13.7502 12.8184C13.7502 12.0324 12.7175 10.343 10.0628 10.343Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default ConsumerDefensiveIcon;
