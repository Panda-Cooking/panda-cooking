import styled from "styled-components";

export const HeaderStyle = styled.header`
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 64px;
        padding: 0 16px;
    }
    background-color: var(--Color-brand-2);

    .header-linkHome > h3 {
        display: none;
    }

    .header-linkHome > svg {
        color: var(--Color-gray-3);
    }

    .header-buttons {
        display: flex;
        gap: 8px;
    }

    .header-buttons > a {
        background-color: var(--Color-brand-1);
        color: var(--Color-gray-3);
        padding: 4px;
        border-radius: 4px;
    }

    @media (min-width: 768px) {
        .header-linkHome {
            display: flex;
            align-items: center;
            gap: 16px;
        }
        .header-linkHome > h3 {
            display: block;
        }
    }

    @media (min-width: 1024px) {
        .container {
            padding: 0;
            max-width: 1024px;
            margin: 0 auto;
        }
    }
`;
