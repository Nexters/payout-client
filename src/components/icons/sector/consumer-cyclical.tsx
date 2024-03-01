import React from "react";

export interface ConsumerCyclicalIconProps extends React.SVGProps<SVGSVGElement> {}

const ConsumerCyclicalIcon = React.memo(({ ...props }: ConsumerCyclicalIconProps) => {
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
        d="M4.54667 10.4352C5.12636 6.82654 8.25464 4.06982 12.0268 4.06982C13.8482 4.06982 15.5178 4.71164 16.8245 5.78217C17.1449 6.04467 17.6175 5.99772 17.88 5.6773C18.1425 5.35688 18.0955 4.88433 17.7751 4.62183C16.2101 3.33974 14.2074 2.56982 12.0268 2.56982C7.50304 2.56982 3.75228 5.8793 3.06354 10.2092L2.4052 9.48634C2.12629 9.18011 1.65193 9.15795 1.3457 9.43687C1.03946 9.71578 1.01731 10.1901 1.29622 10.4964L3.06167 12.4348C3.30858 12.7059 3.71533 12.7587 4.0233 12.5596L6.26185 11.1127C6.60971 10.8878 6.70943 10.4235 6.48458 10.0756C6.25972 9.72777 5.79543 9.62805 5.44756 9.85291L4.54667 10.4352ZM20.6242 11.111C20.9322 10.9119 21.3389 10.9647 21.5858 11.2359L23.3513 13.1743C23.6302 13.4805 23.608 13.9548 23.3018 14.2338C22.9956 14.5127 22.5212 14.4905 22.2423 14.1843L21.5437 13.4172C21.0172 17.9289 17.182 21.4303 12.5289 21.4303C10.3483 21.4303 8.34559 20.6604 6.78059 19.3783C6.46017 19.1158 6.41322 18.6432 6.67571 18.3228C6.93821 18.0024 7.41076 17.9554 7.73117 18.2179C9.03793 19.2885 10.7075 19.9303 12.5289 19.9303C16.4039 19.9303 19.5995 17.0212 20.0507 13.2678L19.1999 13.8177C18.8521 14.0426 18.3878 13.9429 18.1629 13.595C17.9381 13.2471 18.0378 12.7828 18.3857 12.558L20.6242 11.111ZM14.541 9.57951C14.541 10.8015 13.5508 11.7922 12.3283 11.7922C11.1067 11.7922 10.1161 10.8015 10.1161 9.57951C10.1161 8.35747 11.1067 7.36682 12.3283 7.36682C13.5508 7.36682 14.541 8.35747 14.541 9.57951ZM12.3279 12.4686C9.14217 12.4686 7.90295 14.496 7.90295 15.4392C7.90295 16.382 10.5409 16.6332 12.3279 16.6332C14.1148 16.6332 16.7528 16.382 16.7528 15.4392C16.7528 14.496 15.5136 12.4686 12.3279 12.4686Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default ConsumerCyclicalIcon;
