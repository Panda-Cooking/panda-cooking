import styled from "styled-components";

export const SectionLastAddedStyled = styled.section`
    background-color: var(--Color-brand-2);

    padding-top: 32px;

    .container {
        min-height: 320px;

        padding: 0 16px;

        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .swiper-slide > a {
        background-color: var(--Color-white);

        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 16px;

        border-radius: 8px;
        padding-bottom: 16px;
        height: 216px;

        text-align: center;
    }
    .swiper-slide > a > img {
        border-radius: 8px;
        height: 128px;
        width: 100%;
        object-fit: cover;
    }

    .swiper-slide > a > h3 {
        font-size: 20px;
    }

    @media (min-width: 1024px) {
        .container {
            padding: 0;
            max-width: 1024px;
            margin: 0 auto;
        }
    }
`;
