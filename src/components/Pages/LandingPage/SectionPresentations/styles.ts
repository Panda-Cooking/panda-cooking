import styled from "styled-components";
import bgLandingPage from "/src/assets/img/bg-landingPage.jpg";

export const SectionPresentationsStyled = styled.section`
  min-height: 544px;
  width: 100%;

  background: url(${bgLandingPage});
  background-size: 148%;
  background-position: center;
  background-repeat: no-repeat;

  .container {
    min-height: 544px;

    display: flex;

    align-items: center;

    gap: 32px;

    padding: 0 16px;
  }

  .container > img {
    display: none;
  }

  .box-infos {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    position: relative;
    width: 100%;
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
  .cookie-box {
    width: 100%;
    position: relative;
  }
  .cookie-icon {
    display: inline-block;
    width: 96px;
    position: absolute;
    z-index: 10;
    top: -88px;
    left: 0;
    background: none;
    border: none;
  }

  .cookie-message {
    display: inline-flex;
    background: #fff;
    border-radius: 8px 8px 64px 8px;
    padding: 8px;
    color: var(--Color-gray-3);
    text-align: start;
  }

  @media (min-width: 768px) {
    .container > img {
      display: inline-block;
    }
    .cookie-icon {
      top: -48px;
      left: -40px;
    }
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
