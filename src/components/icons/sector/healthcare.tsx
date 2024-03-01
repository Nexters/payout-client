import React from "react";

export interface HealthcareIconProps extends React.SVGProps<SVGSVGElement> {}

const HealthcareIcon = React.memo(({ ...props }: HealthcareIconProps) => {
  return (
    <svg
      {...props}
      width={props.width ?? 20}
      height={props.height ?? 20}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7666 3.51245C13.9024 3.51245 12.737 7.05397 12.737 7.05397C12.737 7.05397 11.5715 3.51245 7.70587 3.51245C3.84171 3.51245 0.915321 8.19075 3.4075 12.8811C3.51158 13.0773 3.62327 13.2723 3.74175 13.466H6.37917L7.49657 9.80064C7.79102 8.83475 9.16543 8.85503 9.43127 9.82917L10.7101 14.515L11.6843 11.9839C11.9999 11.1641 13.1405 11.1131 13.5279 11.9015L14.2966 13.466H16.0877C16.5019 13.466 16.8377 13.8018 16.8377 14.216C16.8377 14.6302 16.5019 14.966 16.0877 14.966H13.9895C13.6056 14.966 13.2551 14.7476 13.0858 14.4031L12.7799 13.7806C12.7415 13.7024 12.6282 13.7074 12.5968 13.7888L11.57 16.4567C11.2206 17.3644 9.91479 17.2984 9.65871 16.3601L8.52476 12.2049C8.49836 12.1082 8.36187 12.1062 8.33263 12.2021L7.70751 14.2526C7.57832 14.6764 7.18733 14.966 6.74428 14.966H4.80723C4.80791 14.9668 4.8086 14.9677 4.80928 14.9685H1.58057C1.16635 14.9685 0.830566 15.3043 0.830566 15.7185C0.830566 16.1327 1.16635 16.4685 1.58057 16.4685H6.15282C9.08994 19.455 12.737 21.6045 12.737 21.6045C12.737 21.6045 19.5758 17.573 22.0664 12.8811C24.5571 8.19075 21.6307 3.51245 17.7666 3.51245Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default HealthcareIcon;
