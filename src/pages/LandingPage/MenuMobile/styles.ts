import { motion } from "framer-motion";
import styled from "styled-components";

export const MenuMobileStyled = styled(motion.div)`
    background-color: var(--Color-brand-2);

    border-radius: 0 0 8px 8px;

    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 16px;

    position: absolute;
    left: 0;
    bottom: -96px;

    padding: 16px;

    & > a {
        background-color: var(--Color-brand-1);
        color: var(--Color-gray-3);
        padding: 4px;
        border-radius: 4px;
        width: 100%;
        text-align: center;
    }
`;
