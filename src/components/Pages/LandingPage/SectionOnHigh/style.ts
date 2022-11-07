import styled from "styled-components";

export const SectionOnHighStyled = styled.section`
  background-color: var(--Color-brand-2);

  padding-top: 32px;

  .container {
    min-height: 320px;

    padding: 0 16px;

    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .swiper-slide {
    background-color: var(--Color-white);

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 16px;

    border-radius: 8px;
    padding-bottom: 16px;
  }
  .swiper-slide > img {
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 1024px) {
    .container {
      padding: 0;
      max-width: 1024px;
      margin: 0 auto;
    }
  }
`;
