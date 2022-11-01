import styled from "styled-components";

export const SectionOnHighStyled = styled.section`
  min-height: 368px;
  background-color: var(--Color-brand-2);

  padding-top: 32px;

  .container {
    min-height: 368px;

    padding: 0 16px;

    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .list-products {
    overflow-x: scroll;
    display: flex;
    gap: 32px;
  }

  .list-products::-webkit-scrollbar {
    width: 0px;
  }
  .card-product {
    background-color: var(--Color-white);

    min-width: 240px;
    width: 240px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;

    padding-bottom: 16px;

    border-radius: 8px;
  }

  .card-product > p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 16px;
    max-height: 32px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding: 0 16px;
  }

  @media (min-width: 1024px) {
    .container {
      padding: 0;
      max-width: 1024px;
      margin: 0 auto;
    }

    .list-products::-webkit-scrollbar {
      height: 10px;
    }
    .list-products::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px var(--Color-gray-2);
      border-radius: 10px;
    }
    .list-products::-webkit-scrollbar-thumb {
      background: var(--Color-gray-3);
      border-radius: 10px;
    }
  }
`;
