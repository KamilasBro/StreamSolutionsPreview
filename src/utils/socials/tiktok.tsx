import React from "react";

interface MySVGProps {
  fillColor: string;
  url: string;
}

const tiktok: React.FC<MySVGProps> = ({ fillColor, url }) => (
  <a href={url} target="_blank" rel="noreferrer">
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3138 2.35C9.74704 1.69969 9.43471 0.864527 9.43495 0H6.87309V10.3333C6.85333 10.8925 6.61845 11.4222 6.21792 11.8108C5.81738 12.1994 5.28245 12.4166 4.72576 12.4167C3.54847 12.4167 2.57015 11.45 2.57015 10.25C2.57015 8.81667 3.94643 7.74167 5.36416 8.18333V5.55C2.50383 5.16667 0 7.4 0 10.25C0 13.025 2.28827 15 4.71747 15C7.32079 15 9.43495 12.875 9.43495 10.25V5.00833C10.4738 5.75821 11.721 6.16054 13 6.15833V3.58333C13 3.58333 11.4413 3.65833 10.3138 2.35Z"
        fill={fillColor}
      />
    </svg>
  </a>
);

export default tiktok;
