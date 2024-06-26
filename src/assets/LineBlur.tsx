import { useTheme } from "styled-components";

export const LineBlur = () => {
  const theme = useTheme();
  return (
    <div style={{ position: "absolute", bottom: -6 }}>
      <svg
        width="1315"
        height="273"
        viewBox="0 0 1315 273"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_401_616)">
          <rect
            x="212"
            y="212"
            width="891"
            height="52"
            fill={theme.colors.primary}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_401_616"
            x="0"
            y="0"
            width="1315"
            height="476"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="106"
              result="effect1_foregroundBlur_401_616"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
