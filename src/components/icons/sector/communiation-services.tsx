import React from "react";

export interface CommunicationServicesIconProps extends React.SVGProps<SVGSVGElement> {}

const CommunicationServicesIcon = React.memo(({ ...props }: CommunicationServicesIconProps) => {
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
        d="M12.8504 22.7187C15.3965 22.6833 17.5273 20.1301 18.4708 16.4073H22.5253C22.7375 15.9293 22.916 15.4324 23.0588 14.9196H18.7703C18.9141 14.0101 18.9955 13.054 18.9955 12.0573C18.9955 11.0595 18.9141 10.1044 18.7703 9.19497H23.0588C22.916 8.68222 22.7375 8.18533 22.5253 7.70728H18.4708C17.5207 3.95731 15.3665 1.39551 12.7968 1.39551C10.227 1.39551 8.07284 3.95731 7.12271 7.70728H3.06825C2.85601 8.18533 2.67749 8.68222 2.53467 9.19497H6.82318C6.67937 10.1044 6.59805 11.0595 6.59805 12.0573C6.59805 13.054 6.67937 14.0101 6.82318 14.9196H2.53467C2.67749 15.4324 2.85601 15.9293 3.06825 16.4073H7.12271C8.06617 20.1299 10.1968 22.683 12.7426 22.7187C6.88826 22.6892 2.13538 17.9182 2.13538 12.057C2.13538 6.17769 6.9174 1.39551 12.7968 1.39551C18.6761 1.39551 23.4589 6.17769 23.4589 12.057C23.4589 17.9186 18.7054 22.6899 12.8504 22.7187Z"
        fill="currentColor"
      />
      <path
        d="M13.5409 14.9196H17.2601C17.4188 14.0131 17.5081 13.0521 17.5081 12.0573C17.5081 11.0615 17.4188 10.1005 17.2601 9.19497H13.5409V14.9196Z"
        fill="currentColor"
      />
      <path d="M13.5409 16.4073V21.0995C14.9839 20.6313 16.2306 18.8431 16.9239 16.4073H13.5409Z" fill="currentColor" />
      <path d="M16.9239 7.70723C16.2306 5.27138 14.9839 3.48318 13.5409 3.01406V7.70723H16.9239Z" fill="currentColor" />
      <path d="M8.67019 7.70723H12.0532V3.01406C10.6101 3.48318 9.36346 5.27138 8.67019 7.70723Z" fill="currentColor" />
      <path
        d="M8.33391 14.9196H12.0531V9.19497H8.33391C8.17522 10.1005 8.08596 11.0615 8.08596 12.0573C8.08596 13.0521 8.17522 14.0131 8.33391 14.9196Z"
        fill="currentColor"
      />
      <path d="M8.67019 16.4073C9.36346 18.8431 10.6101 20.6313 12.0532 21.0995V16.4073H8.67019Z" fill="currentColor" />
    </svg>
  );
});

export default CommunicationServicesIcon;
