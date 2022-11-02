import styled from 'styled-components';

export const MenuHamburguerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  svg {
    cursor: pointer;
  }

  section {
    background: rgb(255, 119, 135);
    background: linear-gradient(
      180deg,
      rgba(255, 119, 135, 1) 0%,
      rgba(188, 100, 255, 1) 100%
    );
    width: 100%;
    position: absolute;
    top: 53px;

    div {
      border-bottom: 1px solid black;
      padding: 4px 0;
      display: flex;
      justify-content: center;

      a,
      span {
        text-decoration: none;
        color: #ffffff;
      }
    }

    div:hover {
      cursor: pointer;
    }
  }

  @media screen and (min-width: 768px) {
    section {
      width: 450%;
      top: -14px;
      right: 46px;
      z-index: 1;
      border-radius: 12px;

      div {
        border-radius: 12px;
      }
    }
  }
`;
