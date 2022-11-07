import styled from 'styled-components';
import { GlobalStyle } from '../../../styles/Global';

export const Container = styled.div`
  max-width: 100vw;
  color: var(--Color-gray-3);
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 20px;
  max-width: 920px;
  padding: 20px;

  .firstRecipeSection {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    img {
      border-radius: 4px;
      height: 211px;
      width: 100%;
    }

    h2 {
      text-align: left;
      font-weight: 700;
      font-size: 1.4rem;
    }

    .recipeOwner {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;

      p {
        font-weight: 700;
        font-size: 1.3rem;
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
      position: relative;
      img {
        height: 451px;
        max-width: 1300px;
        width: 100%;
        border-radius: 4px;
      }
      .recipeOwner {
        position: absolute;
        top: 490px;
        left: 85%;
      }
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
    width: 90%;
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
          li {
            display: flex;
            gap: 10px;
          }
        }
      }

      p {
        font-weight: 400;
        font-size: 0.9rem;
      }
    }

    .addComentContainer {
      position: relative;
      textarea,
      textarea:hover,
      textarea:focus {
        background-color: transparent;
        border: none;
        outline: none;
        width: 100%;
        padding-bottom: 20px;

        p {
          font-weight: 400;
          font-size: 0.9rem;
        }
      }
    }

    h2 {
      font-weight: 700;
      font-size: 1.5rem;
    }

    @media screen and (min-width: 443px) {
      .comentsContainer {
        flex-direction: row;

        .coment {
          width: 75%;
        }
      }

      textarea {
        resize: none;
      }

      .addComentContainer {
        width: 60%;
      }
    }
  }
`;
