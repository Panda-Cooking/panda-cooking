import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--Color-gray-0);
  a {
    text-decoration: none;
  }

  header {
    background-color: var(--Color-brand-1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    svg {
      margin: 8px 26px;
    }

    div {
      display: flex;

      h2 {
        display: none;
      }
    }
  }

  main {
    padding: 0 26px;

    .filterSection {
      #fs1 {
        background: rgb(255, 119, 135);
        background: linear-gradient(
          180deg,
          rgba(255, 119, 135, 1) 0%,
          rgba(255, 208, 208, 1) 100%
        );
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 6px;
        margin-bottom: 14px;
        border-radius: 14px;

        #miniLogo {
          display: none;
        }
      }

      #fs2 a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 10px;

        svg {
          color: var(--Color-gray-3);
        }

        p {
          font-weight: 600;
          font-size: 16px;
        }
      }

      #fs3 {
        display: flex;
        justify-content: space-between;

        input {
          height: 40px;
          border-radius: 30px;
          border: none;
          padding: 14px;
          margin-right: 10px;
        }

        button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: white;
          border: none;
          background-color: var(--Color-brand-1);
        }
      }

      #fs4 {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 8px;

        li {
          background: rgb(255, 119, 135);
          background: linear-gradient(
            180deg,
            rgba(255, 119, 135, 1) 0%,
            rgba(188, 100, 255, 1) 100%
          );
          height: 28px;
          width: 100px;
          border-radius: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 700;
          font-size: 14px;
          color: white;
        }

        .filterAll {
          background: rgb(0, 0, 0);
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(152, 69, 168, 1) 100%
          );
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    header {
      margin-bottom: 26px;
      height: 90px;
      padding: 0 14%;

      svg {
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

    main {
      padding: 0 14%;
      min-height: 87vh;

      .filterSection {
        #fs1 {
          height: 152px;
          position: relative;

          #miniLogo {
            display: block;
            margin-top: 8px;
          }
        }

        #fs2 {
          width: 16%;
          display: flex;
          justify-content: center;

          #fs2 a {
            width: 100px;
            height: 64px;
            display: flex;
          }
        }

        #fs2:hover {
          transition: 500ms;
          background: rgb(255, 119, 135);
          background: radial-gradient(
            circle,
            rgba(255, 119, 135, 1) 0%,
            rgba(255, 215, 215, 1) 100%
          );
          border-radius: 12px;
          padding: 6px 0;
        }

        #fs3 {
          width: 80%;
          justify-content: space-around;
          align-items: center;
          margin-left: 20px;

          input {
            width: 92%;
            border: 2px solid var(--Color-brand-1);
          }
        }

        #fs3 button:hover {
          background-color: var(--Color-brand-2);
          transition: 500ms;

          .searchIcon {
            color: var(--Color-gray-3);
          }
        }

        #fs4 {
          background-color: white;
          padding: 0 20px;
          width: 97%;
          height: 80px;
          border-radius: 18px;
          position: absolute;
          bottom: 16px;
          align-items: center;
        }
      }
    }

    ul {
      li:hover {
        transition: 500ms;
        transform: scale(1.1);
        cursor: pointer;
      }

      li:not(:hover) {
        transition: 500ms;
      }
    }
  }
`;
