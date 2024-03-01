import React from "react";

export interface IndustrialsIconProps extends React.SVGProps<SVGSVGElement> {}

const IndustrialsIcon = React.memo(({ ...props }: IndustrialsIconProps) => {
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
        d="M3.79089 1.85156C3.56077 1.85156 3.37423 2.03811 3.37423 2.26823V7.60992L5.59304 6.23133V2.26823C5.59304 2.03811 5.4065 1.85156 5.17638 1.85156H3.79089Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.4844 9.36447V6.30965C8.4844 5.98289 8.12543 5.78329 7.84787 5.95571L2.2088 9.45862H2.18323V17.5662C2.18323 18.0264 2.55632 18.3995 3.01656 18.3995H18.0833C18.5435 18.3995 18.9166 18.0264 18.9166 17.5662V9.45862H18.9156V6.37995C18.9156 6.03915 18.5287 5.84248 18.2533 6.04331L13.6999 9.36458V6.37995C13.6999 6.03915 13.313 5.84248 13.0377 6.04331L8.4844 9.36447ZM4.08875 13.3029H6.76408V15.9782H4.08875V13.3029ZM11.8878 13.3029H9.21244V15.9782H11.8878V13.3029ZM14.3357 13.3029H17.0111V15.9782H14.3357V13.3029Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IndustrialsIcon;
