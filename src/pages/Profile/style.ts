import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    color: var(--Color-gray-3);
`;

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px 16px;

    @media (min-width: 1024px) {
        padding: 32px 0;
        max-width: 1024px;
        margin: 0 auto;
    }
`;

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 45px;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 800px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
    }
`;

export const UpdateProfile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 8px;
    background-color: var(--Color-brand-2);
    padding: 32px 20px;
    width: 100%;
    max-width: 350px;
    max-height: 750px;
`;
export const UserInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
`;

export const UserFigure = styled.figure`
    width: 192px;
    height: 192px;
    border-radius: 50%;
    overflow: hidden;
`;

export const UserImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 23px;
    justify-content: center;
    align-items: center;
`;

export const InputDefault = styled.input`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    border-radius: 12px;
    border: none;
    outline: none;
    background-color: white;
    font-size: 20px;
    font-weight: 400;
    color: var(--Color-gray-3);

    &:focus {
        outline: 2px solid var(--Color-gray-3);
    }
`;
export const ButtonDefault = styled.button`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--Color-brand-1);
    border: none;
    border-radius: 16px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        filter: brightness(0.9);
    }
`;

export const RecipesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 961px;
    max-height: fit-content;
`;

export const RecipesHeader = styled.div`
    display: flex;
    height: 64px;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--Color-brand-2);
    border-radius: 8px;
    margin-bottom: 40px;
`;

export const RecipeList = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
    width: 100%;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
