import { css } from "styled-components";

export const mobile = (style) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${style}
    }
  `;
};
