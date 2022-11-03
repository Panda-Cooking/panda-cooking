import styled from 'styled-components'

export const LoginStyle = styled.section`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    96deg,
    rgba(255, 255, 255, 1) 30%,
    rgba(255, 135, 135, 1) 100%
  );
  .pandaStyle {
  }
  .divLogin {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    padding: 1rem;
    background: var(--Color-gray-0);
    border-radius: 16px;
    gap: 1rem;

    .logoHeader {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      svg {
        font-size: 60px;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      a {
        text-align: center;
        font-weight: 700;
        color: var(--Color-gray-3);
        transition: 0.3s;

        &:hover {
          color: var(--Color-brand-1);
        }
      }

      input {
        width: 100%;
        border: 2px solid var(--Color-border-0);
        border-radius: 10px;
        padding: 0.7rem 1rem;
        font-size: 1rem;
        background-color: var(--Color-brand-3);        

        &:hover {
          border: 2px solid var(--Color-brand-1);
        }

        &::placeholder {
          font-weight: 700;
          font-size: 1rem;
        }
      }

      button {
        background: var(--Color-brand-1);
        color: var(--Color-gray-0);
        border-radius: 10px;
        width: 100%;
        padding: 0.5rem 0;
        font-size: 30px;
        font-weight: 700;
        border: 1px solid var(--Color-brand-1);
        transition: 0.4s;

        &:hover {
          background-color: var(--Color-brand-3);
          color: var(--Color-brand-1);
        }
      }
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 1rem;
    .divLogin {
      max-width: 460px;
      margin: 0;
      padding: 2rem 0;
      .logoHeader {
        svg {
          font-size: 100px;
        }
      }
      form {
        gap: 2rem;
        padding: 1rem;
      }
    }
    .pandaStyle {
      img {
        height: 475px;
      }
    }
  }
  @media (min-width: 1440px) {
    .divLogin {
      max-width: 500px;
    }
    .pandaStyle {
      img {
        width: 100%;
        height: 600px;
      }
    }
  }
  @media (min-width: 1940px) {
    .divLogin {
      max-width: 600px;
      padding: 4.5rem 0;
    }
    .pandaStyle {
      img {
        width: 100%;
        height: 600px;
      }
    }
  }
`
