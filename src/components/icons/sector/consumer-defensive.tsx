import React from "react";

export interface ConsumerDefensiveIconProps extends React.SVGProps<SVGSVGElement> {}

const ConsumerDefensiveIcon = React.memo(({ ...props }: ConsumerDefensiveIconProps) => {
  return (
    <svg {...props} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.99414 11.5175V13.8919C2.99414 17.5484 7.77409 21.1017 12.062 23.2092C16.3509 21.1017 21.1309 17.5484 21.1309 13.8919V11.5175V6.9582C21.1309 6.13669 20.6285 5.39872 19.8642 5.0975L12.0625 2.02271L4.2608 5.0975C3.4965 5.39872 2.99414 6.13669 2.99414 6.9582V11.5175ZM14.276 9.55705C14.276 10.7791 13.2858 11.7697 12.0633 11.7697C10.8417 11.7697 9.85107 10.7791 9.85107 9.55705C9.85107 8.33501 10.8417 7.34436 12.0633 7.34436C13.2858 7.34436 14.276 8.33501 14.276 9.55705ZM12.0629 12.4462C8.87715 12.4462 7.63794 14.4736 7.63794 15.4168C7.63794 16.3595 10.2759 16.6108 12.0629 16.6108C13.8498 16.6108 16.4878 16.3595 16.4878 15.4168C16.4878 14.4736 15.2486 12.4462 12.0629 12.4462Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default ConsumerDefensiveIcon;
