import { css } from "@emotion/react";
export const theme = {
  colors: {
    primary: "#547792",
    dark: "#213448",
    soft: "#E8F9FF",
  },
  font: {
    bold: css`
      font-size: 2.2rem;
      font-weight: 700;
      line-height: 145%;
      letter-spacing: 0px;
    `,
    normal: css`
      font-size: 1rem;
      font-weight: 500;
      line-height: 130%;
      letter-spacing: 0px;
    `,
    medium: css`
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 140%;
      letter-spacing: 0px;
    `,
  },
};
