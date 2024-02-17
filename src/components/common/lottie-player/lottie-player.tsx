import React from "react";

export interface LottiePlayerProps extends React.HTMLAttributes<HTMLDivElement> {}

const LottiePlayer = ({ ...props }: LottiePlayerProps) => {
  return <div {...props}></div>;
};

export default LottiePlayer;
