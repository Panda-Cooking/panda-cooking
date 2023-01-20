import styled from "styled-components";

export const HambStyle = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 101;
    svg {
        cursor: pointer;
        color: var(--Color-gray-3);
    }

    .menu-body {
        background-color: var(--Color-brand-2);

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;

        border-radius: 4px;

        width: 104px;
        padding: 8px;

        box-shadow: 0px 0px 4px #333333;

        a {
            color: var(--Color-gray-3);
            background-color: var(--Color-brand-1);
            border-radius: 4px;
            padding-top: 1px;
            width: 100%;
            height: 24px;
            text-align: center;
            font-size: 16px;
        }

        button {
            width: 100%;
            height: 24px;
            background-color: var(--Color-brand-1);
            color: var(--Color-gray-3);
            border-radius: 4px;
            font-size: 16px;
            border: none;
        }

        position: absolute;
        top: 35px;
        left: -64px;
    }

    @media (min-width: 1024px) {
        .menu-body {
            top: 35px;
            left: -35px;
        }
    }
`;
