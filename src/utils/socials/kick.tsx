import React from "react";

interface MySVGProps {
  fillColor: string;
  url: string;
}

const kick: React.FC<MySVGProps> = ({ fillColor, url }) => (
  <a href={url} target="_blank" rel="noreferrer">
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.0400391" width="5.15167" height="15.3686" fill="white" />
      <rect
        x="5.19141"
        y="3.40576"
        width="1.6596"
        height="8.5573"
        fill="white"
      />
      <rect
        x="6.85156"
        y="1.67676"
        width="1.74604"
        height="12.0148"
        fill="white"
      />
      <rect x="8.59766" width="1.74604" height="15.3686" fill="white" />
      <rect x="10.3438" width="1.74604" height="6.88042" fill="white" />
      <rect
        width="1.74604"
        height="6.88042"
        transform="matrix(1 0 0 -1 10.3438 15.4033)"
        fill="white"
      />
      <rect x="12.0898" width="1.74604" height="5.15167" fill="white" />
      <rect
        width="1.74604"
        height="5.15167"
        transform="matrix(1 0 0 -1 12.0898 15.4033)"
        fill={fillColor}
      />
    </svg>
  </a>
);

export default kick;
