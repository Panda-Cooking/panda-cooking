import styled from 'styled-components';

export const MenuHamburguerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  svg {
    cursor: pointer;
  }

  section {
    background-color: var(--Color-brand-1);
    width: 100%;
    position: absolute;
    top: 53px;

    div {
      padding: 4px 0;
      display: flex;
      justify-content: center;

      a,
      span {
        text-decoration: none;
        color: #ffffff;
        margin: 0;
      }
    }

    div:hover {
      cursor: pointer;
    }
  }

  @media screen and (min-width: 768px) {
    section {
      background-color: #ffffff;
      width: 450%;
      top: -14px;
      right: 46px;
      z-index: 1;
      border-radius: 12px;

      .myProfile {
        border-bottom: 1px solid var(--Color-gray-3);
      }

      div {
        a,
        span {
          color: var(--Color-gray-3);
        }
      }
    }
  }
`;
