import React, { useState } from "react";

const StarSVG = ({
  filled,
  onClick,
  style,
}: {
  filled: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}) => (
  <svg
    fill={filled ? "#ffd700" : "#ccc"}
    width="40px"
    height="40px"
    viewBox="0 0 1920 1920"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#000000"
    strokeWidth="0.0192"
    onClick={onClick}
    style={{ cursor: onClick ? "pointer" : "default", ...style }}
  >
    <path
      d="M1306.181 1110.407c-28.461 20.781-40.32 57.261-29.477 91.03l166.136 511.398-435.05-316.122c-28.686-20.781-67.086-20.781-95.66 0l-435.05 316.122 166.25-511.623c10.842-33.544-1.017-70.024-29.591-90.805L178.577 794.285h537.825c35.351 0 66.523-22.701 77.365-56.245l166.25-511.51 166.136 511.397a81.155 81.155 0 0 0 77.365 56.358h537.939l-435.276 316.122Zm609.77-372.819c-10.956-33.656-42.014-56.244-77.365-56.244h-612.141l-189.064-582.1C1026.426 65.589 995.367 43 960.017 43c-35.351 0-66.523 22.588-77.365 56.245L693.475 681.344H81.335c-35.351 0-66.41 22.588-77.366 56.244-10.842 33.657 1.017 70.137 29.591 90.918l495.247 359.718-189.29 582.211c-10.842 33.657 1.017 70.137 29.704 90.918 14.23 10.39 31.059 15.586 47.661 15.586 16.829 0 33.657-5.195 47.887-15.699l495.248-359.718 495.02 359.718c28.575 20.894 67.088 20.894 95.775.113 28.574-20.781 40.433-57.261 29.59-91.03l-189.289-582.1 495.247-359.717c28.687-20.781 40.546-57.261 29.59-90.918Z"
      fillRule="evenodd"
    />
  </svg>
);

type RatingStarsProps = {
  count?: number;
  value: number;
  isChangeable?: boolean;
  onChange?: (newValue: number) => void;
};

export function RatingStars({
  count = 5,
  value,
  isChangeable = false,
  onChange,
}: RatingStarsProps) {
  const [currentValue, setCurrentValue] = useState(value);

 const handleClick = (idx: number) => {
  if (!isChangeable) return;
  setCurrentValue(idx);
  onChange?.(idx);
};

  return (
    <div style={{ display: "flex", gap: 8 }}>
      {Array.from({ length: count }, (_, i) => {
        const starIndex = i + 1;
        const filled = starIndex <= currentValue;
        return (
          <StarSVG
            key={i}
            filled={filled}
            onClick={() => handleClick(starIndex)}
          />
        );
      })}
    </div>
  );
}
