import React from "react";

interface MySVGProps {
  fillColor: string;
  url: string;
}

const ttv: React.FC<MySVGProps> = ({ fillColor, url }) => (
  <a href={url} target="_blank" rel="noreferrer">
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.33857 8.20157H10.8789V4.35079H9.33857V8.20157ZM5.48778 8.20157H7.0281V4.35079H5.48778V8.20157ZM13.1894 9.20827V2.04031H2.40715V11.2822H5.48778V13.5566L7.45938 11.2822H11.1407L13.1894 9.20827ZM10.8073 13.5927H7.79286L5.78583 15.9031H3.94747V13.5927H0.0966797V3.18013L1.09789 0.5H14.7297V9.87501L10.8073 13.5927Z"
        fill={fillColor}
      />
    </svg>
  </a>
);

export default ttv;
