import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 64px;

  background-color: var(--Color-brand-2);

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: 17px;
    padding-left: 16px;
    padding-right: 16px;
  }

  & > div > button {
    border: none;
    background: none;
    font-size: 24px;
    color: var(--Color-gray-3);
  }

  @media (min-width: 1024px) {
    & > div {
      padding-left: 0;
      padding-right: 0;
      margin: 0 auto;
      max-width: 1024px;
    }
  }
`;
