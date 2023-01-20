import styled from "styled-components";

export const SectionEmphasisStyled = styled.section`
    min-height: 320px;
    background-color: var(--Color-gray-3);

    .container {
        padding: 32px 16px;

        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .container > h3 {
        width: 100%;
    }

    .container > img {
        width: 100%;
        border-radius: 56px 0 56px 0;
        object-fit: cover;
        object-position: center;
    }

    .box-infos {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .box-infos > p {
        line-height: 32px;
    }

    .box-infos > a {
        color: var(--Color-white);
        border: none;
        border-radius: 56px;
        background-color: var(--Color-brand-1);
        text-transform: uppercase;
        padding: 8px;
        border-radius: 56px;
        width: 168px;
    }

    @media (min-width: 768px) {
        .container > img {
            width: 30%;
            height: 320px;
        }
        .box-infos {
            width: 65%;
        }
        .container {
            flex-direction: row;
            flex-wrap: wrap;
        }
    }

    @media (min-width: 1024px) {
        .container {
            padding: 32px 0;
            max-width: 1024px;
            margin: 0 auto;
        }
    }
`;
