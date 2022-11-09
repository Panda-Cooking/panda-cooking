import styled from "styled-components";

interface iMainProps {
  disabled: Boolean;
}

export const Container = styled.div`
  max-width: 100vw;
  color: var(--Color-gray-3);
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 20px;
  max-width: 1024px;
  padding: 32px 16px;

  @media (min-width: 1024px) {
    padding: 32px 0;
  }

  .firstRecipeSection {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    img {
      border-radius: 4px;
      height: 296px;
      object-fit: cover;
      width: 100%;
      object-position: 10% 66%;
    }

    .recipeOwner {
      display: flex;
      justify-content: space-between;
      align-items: center;

      flex-wrap: wrap;

      div {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      div > div > img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
      }
    }

    .recipeText {
      width: 100%;
      p {
        font-weight: 400;
        font-size: 0.9rem;
      }
    }

    @media screen and (min-width: 443px) {
      .recipeText {
        width: 80%;
      }
    }
  }
  .secondRecipeSection {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;

    ul > li {
      list-style: initial;
    }

    ol > li {
      list-style: decimal;
    }

    ol {
      display: flex;
      flex-direction: column;
      padding-left: 20px;
    }

    ul {
      display: flex;
      flex-direction: column;
      padding-left: 20px;
    }

    ul > li:nth-child(1),
    ol > li:nth-child(1) {
      padding-top: 10px;
    }

    h2 {
      font-weight: 700;
      font-size: 1.5rem;
    }

    li {
      font-weight: 400;
      font-size: 1rem;
    }

    @media screen and (min-width: 443px) {
      flex-direction: row;
      gap: 30%;

      ol {
        width: 100%;
      }
      ul {
        width: 100%;
      }
    }
  }

  .thirdRecipeSection {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;

    .comentsContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;

      .coment {
        width: 100%;
        p {
          font-weight: 400;
          font-size: 0.9rem;
        }

        ul {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
      }
      ul > li {
        display: flex;
        flex-direction: column;
        align-items: center;

        justify-content: space-between;

        gap: 16px;

        background-color: var(--Color-brand-2);

        padding: 16px;

        border-radius: 4px;
      }

      ul > li > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
      }
      ul > li > div > img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
      }

      ul > li > p {
        align-self: flex-end;
      }
    }
    @media (min-width: 600px) {
      .coment {
        ul > li {
          flex-direction: row;
        }
        ul > li > div {
          flex-direction: row;
        }
      }
    }
  }

  .addComentContainer {
    background-color: var(
      ${({ disabled }: iMainProps) =>
        disabled ? "--Color-gray-1" : "--Color-brand-2"}
    );
    border-radius: 4px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;

    cursor: ${({ disabled }: iMainProps) =>
      disabled ? "not-allowed" : "text"};

    textarea {
      border: none;
      outline: none;
      resize: none;
      background: none;
      width: 95%;
      padding-top: 16px;
      color: var(--Color-gray-3);
      font-family: "Inter", sans-serif;
      cursor: ${({ disabled }: iMainProps) =>
        disabled ? "not-allowed" : "text"};
    }
    button {
      border: none;
      background: none;
      cursor: ${({ disabled }: iMainProps) =>
        disabled ? "not-allowed" : "pointer"};
    }

    button > svg {
      color: var(--Color-gray-3);
      width: 24px;
      height: 24px;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
  }
`;
