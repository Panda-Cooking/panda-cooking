import styled from "styled-components";

export const RecipesListContainer = styled.div`
  margin-top: 26px;

  #div1 {
    background: rgb(255, 119, 135);
    background: radial-gradient(
      circle,
      rgba(255, 119, 135, 1) 0%,
      rgba(255, 210, 210, 1) 100%
    );
    width: 100%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
      color: white;
    }
  }

  ul {
    margin-top: 22px;
    padding-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 26px;
    justify-content: center;

    li {
      height: 264px;
      width: 321px;
      border-radius: 12px;
      background-color: #ffffff;
      box-shadow: 4px 5px 6px gray;
      cursor: pointer;

      img {
        height: 190px;
        width: 100%;
        border-radius: 12px 12px 0 0;
        margin-bottom: 5px;
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3px;
      }
    }

    li:hover {
      transition: 500ms;
      transform: scale(1.03);
    }

    li:not(:hover) {
      transition: 500ms;
    }
  }

  @media screen and (min-width: 768px) {
    #div1 {
      margin-top: 50px;
      margin-bottom: 35px;
    }
  }
`;
