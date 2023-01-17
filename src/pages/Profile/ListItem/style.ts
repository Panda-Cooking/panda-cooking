import styled from "styled-components";

export const StyledLi = styled.li`
    width: 100%;
    height: 264px;
    display: flex;

    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

export const NameContainer = styled.div`
    width: 100%;
    height: 84px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 14px;
`;

export const StyledFigure = styled.figure`
    width: 100%;
    height: 180px;
`;

export const RecipeImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;
