import React from "react";

export interface ETFIconProps extends React.SVGProps<SVGSVGElement> {}

const ETFIcon = React.memo(({ ...props }: ETFIconProps) => {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.6274 16.6755V7.19995H22.8001V8.67543H18.4549V11.2068H21.9337V12.6416H18.4549V16.6755H16.6274Z"
        fill="currentColor"
      />
      <path d="M11.0277 16.6755V8.67543H8.25269V7.19995H15.603V8.67543H12.8416V16.6755H11.0277Z" fill="currentColor" />
      <path
        d="M1.20007 16.6755V7.19995H7.42686V8.67543H3.0275V11.1526H7.02076V12.5739H3.0275V15.2H7.42686V16.6755H1.20007Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default ETFIcon;
