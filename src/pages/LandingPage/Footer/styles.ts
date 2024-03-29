import styled from "styled-components";

export const FooterStyled = styled.footer`
    background-color: var(--Color-gray-3);
    min-height: 320px;

    .container {
        min-height: 320px;
        padding: 32px 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .swiper-slide {
        padding: 16px;

        border-radius: 8px;

        background-color: var(--Color-white);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }
    .swiper-slide > img {
        width: 64px;
        border-radius: 50%;
    }
    .swiper-slide > h3 {
        font-size: 20px;
    }

    .swiper-slide > div > a {
        color: var(--Color-gray-3);
        font-size: 32px;
        margin: 0 8px;
    }

    @media (min-width: 1024px) {
        .container {
            max-width: 1024px;
            margin: 0 auto;
            padding: 32px 0;
        }
    }
`;
