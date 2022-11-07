import styled from 'styled-components'

export const HambStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  svg {
    cursor: pointer;
  }

  section {
    background-color: var(--Color-brand-1);
    color: var(--Color-white);
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
        color: var(--Color-white);
        margin: 0;
      }
    }

    div:hover {
      cursor: pointer;
    }
  }

  @media screen and (min-width: 768px) {
    section {
      background-color: var(--Color-brand-1);
      color: var(--Color-white);
      width: 450%;
      top: -14px;
      right: 46px;
      z-index: 1;
      border-radius: 12px;

      .myProfile {
        border-bottom: 1px solid var(--Color-border-0);
      }

      div {
        a,
        span {
          color: var(--Color-white);
        }
      }
    }
  }
`
