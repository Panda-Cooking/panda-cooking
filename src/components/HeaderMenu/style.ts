import styled from 'styled-components';

export const HeaderStyle = styled.header`
  background-color: var(--Color-brand-2);
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 16px;

  svg,
  a {
    margin: 8px 26px;
  }

  div {
    display: flex;

    h2 {
      display: none;
    }
  }

  #goToLogin {
    text-decoration: none;
    color: var(--Color-gray-3);
    background-color: var(--Color-brand-1);
    padding: 6px;
    border-radius: 4px;

    &:hover {
      background-color: var(--Color-brand-3);
      color: var(--Color-brand-1);
      transition: 650ms;
    }

    &:not(:hover) {
      transition: 650ms;
    }
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 26px;
    height: 90px;

    svg,
    a {
      margin: 0;
    }

    .mainPandaLogo {
      transform: scale(1.6);
    }

    div {
      h2 {
        display: block;
        color: white;
        font-size: 34px;
        margin-left: 34px;
      }
    }
  }
  @media screen and (min-width: 1921px) {
    margin-bottom: 26px;
    height: 90px;
    padding: 0 23.35%;

    a {
      margin: 0;
    }
  }
`;
