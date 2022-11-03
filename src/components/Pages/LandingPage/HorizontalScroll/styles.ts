import styled from "styled-components";

interface iPropsHorizontalScrollContainer {
  height: number;
}

export const HorizontalScrollContainer = styled.div`
  height: ${({ height }: iPropsHorizontalScrollContainer) => height}px;

  .scroll-horizontal > div {
    display: flex;
    gap: 32px;
  }

  @media (max-width: 768px) {
    .scroll-horizontal {
      overflow-x: scroll !important;
    }
  }
`;
