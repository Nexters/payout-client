import React from "react";

export interface ETFIconProps extends React.SVGProps<SVGSVGElement> {}

const ETFIcon = React.memo(({ ...props }: ETFIconProps) => {
  return (
    <svg
      {...props}
      width={props.width ?? 20}
      height={props.height ?? 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.8562 13.8963V6H19.0001V7.22956H15.3791V9.339H18.2781V10.5347H15.3791V13.8963H13.8562Z"
        fill="currentColor"
      />
      <path d="M9.18968 13.8963V7.22956H6.8772V6H13.0025V7.22956H10.7013V13.8963H9.18968Z" fill="currentColor" />
      <path
        d="M1 13.8963V6H6.18899V7.22956H2.52285V9.29388H5.85057V10.4783H2.52285V12.6667H6.18899V13.8963H1Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default ETFIcon;
