import styled from "styled-components";

export const SectionPresentationsStyled = styled.section`
  min-height: 544px;
  width: 100%;

  background: url("/src/assets/img/bg-landingPage.jpg");
  background-size: 148%;
  background-position: center;
  background-repeat: no-repeat;

  .container {
    min-height: 544px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 16px;
  }

  .box-infos {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .box-infos > p {
    line-height: 32px;
  }

  .box-infos > a {
    background-color: var(--Color-brand-1);
    text-transform: uppercase;
    color: var(--Color-white);
    padding: 8px;
    border-radius: 56px;
  }

  @media (min-width: 1024px) {
    .container {
      padding: 0;
      max-width: 1024px;
      margin: 0 auto;
    }

    background-size: 120%;
  }
`;
